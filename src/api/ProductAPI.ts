import React from "react";
import ProductModel from "../models/ProductModel";
import {request} from "../utils/Request";

export async function getAllProduct(): Promise<ProductModel[]> {
    const result: ProductModel[] = [];
    const url:string = `http://localhost:8082/springsport/admin/product`;

    const response = await request(url);

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
        

        const img = response[key].images;

        
        //const img = getAllImage(response[key]);
        // if(img !== null || img !== undefined){
        //     result[key].ImageModel.p
        // }
    }

    
    return result;
}