import React from "react";
import {request} from "../utils/Request";
import ImageModel from "../models/ImageModel";

export async function getAllImage(prodId : any) {
    const result : ImageModel[] = [];
    console.log(prodId);
     const newurl = `http://localhost:8082/springsport/admin/product/${prodId}/images`;
     const responses = await request(newurl);

    const imgs = responses._embedded.image;

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

export async function getImageOfPrd(prdId:number) {
    

    const newUrl : string =`http://localhost:8082/springsport/admin/image?${prdId}`;
    const response = await request(newUrl);
    const responseData = response._embedded.image;

    let check = (responseData.imgCode !== null || responseData.imgCode !== undefined || responseData.imgResouce !== null ||  
    responseData.imgResouce !== undefined) ;
    
    if(check){
        const image : ImageModel = new ImageModel(responseData.imgCode,
                                                responseData.imgName,
                                                responseData.imgPath,
                                                responseData.imgResource,
                                                responseData.mainImg,
                                                responseData.icon,
                                                responseData.isCate,
                                                responseData.isBrand,
                                                );
    console.log('Log '+ responseData.imgResource);

      return image;
    }
    
}