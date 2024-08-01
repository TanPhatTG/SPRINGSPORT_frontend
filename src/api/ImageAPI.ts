import React from "react";
import {request} from "../utils/Request";
import ImageModel from "../models/ImageModel";

export async function getAllImage(prodId : any) {
    const result : ImageModel[] = [];

     const newurl = `http://localhost:8082/springsport/admin/image?${prodId}`;
     const responses = await request(newurl);

    const imgs = responses._embedded.image;

    console.log('img '+imgs);


    for (const item in imgs) {
        result.push({
            imgCode: imgs[item].imgCode,
            imgName: imgs[item].imgName,
            imgResouce: imgs[item].imgResouce,
            mainImg: imgs[item].mainImg
        })
       
    }

   //    console.log('ABC '+imgs);
    return result;
}