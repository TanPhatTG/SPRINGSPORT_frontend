import React from "react";
import ProductModel from "../models/ProductModel";
import {request} from "../utils/Request";

interface ProductResponse{
    result: ProductModel[];
    totalPage: number;
    totalElement: number;
}

export async function getProduct(url : string): Promise<ProductResponse> {
    const result: ProductModel[] = [];
    //const url:string = `http://localhost:8082/springsport/admin/product`;

    const responseData = await request(url);
    const response = responseData._embedded.products;

    for (const key in response) {
        result.push({
        ProductId: response[key].id ,
        ProductCode: response[key].productCode,
        ProductName: response[key].productName,
        shortDescription: response[key].shortDescription,
        longDescription: response[key].longDescription,

        enabled: response[key].enabled,
        inStock: response[key].inStock,
        ImageModel: []
        })
    }

    const totalPage: number = responseData.page.totalPage;
    const totalElement: number = responseData.page.totalElement;
    
    return {result: result, totalPage: totalPage, totalElement: totalElement} ;
}

export async function getAllProduct(currPage: number): Promise<ProductResponse> {
    const url : string = `http://localhost:8082/springsport/admin/product?sort=id,desc&size=8&page=${currPage-1}`;
    return getProduct(url);
}

export async function getNew5Product(): Promise<ProductResponse> {
    const url : string = 'http://localhost:8082/springsport/admin/product?sortField=id,desc';
    return getProduct(url);
}

export async function getProductByKeyword(keyword: string, currPage: number): Promise<ProductResponse> {
    
    let url : string = ``;
    if(keyword !== ``){
        url += `http://localhost:8082/springsport/admin/product?keyword=${keyword}?sortField=id,desc&size=8&page=${currPage-1}`;
        return getProduct(url);
    }
    return getAllProduct(currPage);
}
    