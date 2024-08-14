import React, { useEffect, useState } from "react";
import ProductModel from "../models/ProductModel";
import ImageModel from "../models/ImageModel";
import { getImageOfPrd } from "../api/ImageAPI";

interface CarouselItemInterface {
    prod: ProductModel;
}

const CarouselItem: React.FC<CarouselItemInterface> = (props) => {

    const prdId : any = props.prod.ProductId;

    const [image, setImg] = useState<ImageModel>();
    const [loadingBar, setLoadingBar] = useState(false);
    const [error, setError] = useState<null>();

    useEffect(() => {
        // getImageOfPrd(prdId).then(
        //     imgData => {
        //         setImg(imgData);
        //         setLoadingBar(false);
        //     }
        // ).catch(
        //     error => {
        //         setLoadingBar(false);
        //         setError(error.message);
        //     }
        // );
    })

    if (loadingBar) {
        return (
            <div>
                <h1>Loading, Please waiting...</h1>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <h1>Error: {error}</h1>
            </div>
        );
    }

    let imgData: any = "";
    if (image?.imgCode !== null || image?.imgCode !== undefined) {
        imgData = image?.imgResouce;
    }

    return (
        <div className="carousel-item active">
            <div className="col-5 text-center">
                <img src={image?.imgResouce} style={{ width: '150px' }} />
            </div>
            <div className="col-7">
                <h5>{props.prod.ProductName}</h5>
                <p>{props.prod.shortDescription}</p>
            </div>
        </div>
    );
}
export default CarouselItem;