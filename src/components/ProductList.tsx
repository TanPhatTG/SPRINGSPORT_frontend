import React, { useEffect, useState } from "react";
import BookProps from "./ProductProps";
import ProductModel from "../models/ProductModel";
import { getAllProduct } from "../api/ProductAPI";

const ProductList: React.FC = () => {

    const [prodList, setProdList] = useState<ProductModel[]>([]);
    const [loadingBar, setLoadingBar] = useState<true>();
    const [error, setError] = useState<null>();

    useEffect(() => {
        getAllProduct().then(
            product => {
                setProdList(product)
            }
        )
        .catch(

        );
    },[]
    )

    if(loadingBar){
        return(
            <div>Loading, Wait minutes</div>
        );
    }else if(error != null || error !== undefined){
        return(
            <div>Error: ${error}</div>
        )
    }

    const products: ProductModel[] = [
        
        
    ];

    return (
        <div className="container">
            <div className="row mt-4">
                {
                    prodList.map((product) => (
                            <BookProps key={product.ProductId}  product={product} />
                        )
                    )
                }
            </div>
        </div>
    );
}

export default ProductList;