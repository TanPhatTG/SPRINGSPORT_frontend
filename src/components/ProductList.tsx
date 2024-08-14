import React, { useEffect, useState } from "react";
import BookProps from "./ProductProps";
import ProductModel from "../models/ProductModel";
import { getAllProduct } from "../api/ProductAPI";
import { Pagination } from "../utils/Pagination";

interface BookListProps {
	paginable?: boolean;
	size?: number;
	keySearch?: string | undefined;
	idGenre?: number;
	filter?: number;
}

const ProductList: React.FC<BookListProps> = (Prod) => {

    const [prodList, setProdList] = useState<ProductModel[]>([]);
    const [loadingBar, setLoadingBar] = useState(false);
    const [error, setError] = useState<null>();
    const [currPage, setCurrPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    useEffect(() => {
        getAllProduct(currPage).then(
            product => {
                setProdList(product.result);
                setTotalPage(10);
            }
        )
        .catch(
            error => {
                setLoadingBar(true);
                setError(error.message);
            }
        );
    },[currPage]
    )

    const paging = (page: number) => setCurrPage(page);

    if(loadingBar){
        return(
            <div>Loading, Wait minutes</div>
        );
    }else if(error != null || error !== undefined){
        return(
            <div>Error: ${error}</div>
        )
    }

    //const products: ProductModel[] = [];

    return (
        <div className="container">
            <div className="row mt-3">
                {
                    prodList.map((product) => (
                            <BookProps key={product.ProductId}  product={product} />
                        )
                    )
                }
            </div>
            <Pagination curPage={currPage} totalPage={totalPage} offset={paging}/>
        </div>
        
    );
}

export default ProductList;