import React from "react";
import { Banner } from "../components/Banner";
import ProductList from "../components/ProductList";
import Carousel1 from "../components/Carousel1";
import { getAllProduct } from "../api/ProductAPI";

function HomePage(){

    getAllProduct()
            .then()
            .catch()    

    return(
        <div>
            <Banner/>
            <Carousel1 />
           <ProductList/> 
        </div>
    );
}

export default HomePage;