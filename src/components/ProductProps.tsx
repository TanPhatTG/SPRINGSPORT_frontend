import React, { useEffect, useState } from "react";
import ProductModel from "../models/ProductModel";
import ImageModel from "../models/ImageModel";
import { getAllImage } from "../api/ImageAPI";
import { CSSProperties } from 'react';

interface ProductProps {
    product: ProductModel;
}

const ProductProps: React.FC<ProductProps> = ({ product }) => {

    const prdId : any = product.ProductId;
    
    const [imgList, setImgList] = useState<ImageModel[]>([]);
    const [loadingBar, setLoadingBar] = useState(false);
    const [error, setError] = useState<null>();

    const itemStyle: CSSProperties  = {
        flex: '0 0 20%',
       
        textAlign: 'center',
        padding: '10px',
        boxSizing: 'border-box' as const, // Đảm bảo padding không ảnh hưởng đến kích thước tổng thể
    };

    useEffect(() => {
        getAllImage(prdId).then(
            imgData =>{
                setImgList(imgData);
                setLoadingBar(false);
            }
        )
        .catch(
            error => {
                setLoadingBar(true);
                setError(error.message);
            }
        );
    },[]
    )

    

    // const log =  imgList[0].imgResouce;
    // console.log('BB '+log);

    // for(const img in imgList){
    //     const haveResource = img.imgResouce !== undefined || img.imgResouce !== null;
    //     if(img.icon && haveResource == true){
    //         image = img;
    //     }
    // }

    if(loadingBar){
        return(
            <div>Loading, Wait minutes</div>
        );
    }else if(error != null || error !== undefined){
        return(
            <div>Error: ${error}</div>
        )
    }

    return (
        <div className="col-md-3 mt-2 ">
            <div className="card " style={{ width: '230px', ...itemStyle}}> 
                <img
                    src={imgList[0]?.imgResouce}
                    className="object-fit-contain"
                    alt={imgList[0]?.imgName}
                     style={{ height: '250px' }}
                />
                <div className="card-body">
                    <h5 className="card-title">{product.ProductName}</h5>
                    <p className="card-text">{product.shortDescription}</p>
                    <div className="row float-start">
                        <div className="price">
                            <span className="original-price">
                                <del>{product.discountId}</del>
                            </span>
                        </div>
                        <div className="price mt-2">
                            <span className="discounted-price">
                                <strong>{product.discountId}</strong>
                            </span>
                        </div>
                    </div>
                    <div className="row" role="group">
                        <div className="col-6 float-end">
                            <a href="#" className="btn btn-danger btn-block">
                                <i className="fas fa-heart"></i>
                            </a>
                        </div>
                        <div className="col-6 float-end">
                            <button className="btn btn-success btn-block">
                                <i className="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductProps;