import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import CSS của thư viện
import ProductModel from "../models/ProductModel";
import { getNew5Product } from "../api/ProductAPI";
import SSCarouselItem from "./SSCarouselItem";
//import { Carousel } from "react-responsive-carousel";
const SSCarousel : React.FC = () => {

    const [prodList, setProdList] = useState<ProductModel[]>([]);
    const [loadingBar, setLoadingBar] = useState(true);
    const [error, setError] = useState<null>();

    useEffect(() => {
        getNew5Product().then(
            product => {
                setProdList(product.result);
            }
        )
        .catch(
            error => {
                setLoadingBar(false);
                setError(error.message)
            }
        );
    },[]
    )
    
    return (
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
            {
                    prodList.map((product) => (
                            <SSCarouselItem key={product.ProductId} prod = {product} />
                        )
                    )
                }
        </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    );
}


export default SSCarousel;