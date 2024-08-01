class ImageModel{

    imgCode?:string;
    imgName?:string; // có thể bị NULL
    imgPath?: string;
    imgResouce?: string;
    mainImg?:boolean;
    icon?: boolean;
    isCate?:boolean;
    isBrand?:boolean;

    constructor (
        imgCode?: string,
        imgName?: string, // có thể bị NULL
        imgPath?: string,
        imgResouce?: string,
        mainImg?: boolean,
        icon?: boolean,
        isCate?: boolean,
        isBrand?: boolean
    ){
        this.imgCode= imgCode;
        this.imgName= imgName;
        this.imgPath= imgPath;
        this.imgResouce= imgResouce;
        this.mainImg= mainImg;
        this.icon= icon;
        this.isCate= isCate;
        this.isBrand= isBrand;
    }
}

export default ImageModel