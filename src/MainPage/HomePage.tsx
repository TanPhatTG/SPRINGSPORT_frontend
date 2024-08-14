import React from "react";
import { Banner } from "../components/Banner";
import ProductList from "../components/ProductList";
import SSCarousel from "../components/SSCarousel";
import { getAllProduct } from "../api/ProductAPI";
import { Pagination } from "../utils/Pagination";

function HomePage(){

    const pageURL = 

    getAllProduct(1)
            .then()
            .catch()    

    return(
        <div>
            <Banner/>
            <SSCarousel />
           <ProductList/> 
        </div>
    );
}

export default HomePage;