class ProductModel{
    ProductId?: number;
    ProductCode?:string;
    ProductName?:string; // có thể bị NULL
    discountId?: number;
    shortDescription?:string;
    longDescription?: number;
    enabled?:boolean;
    inStock?:boolean;
    ImageModel?: any

    constructor (
        ProductId?: number,
        ProductCode?: string,
        ProductName?:string,// có thể bị NULL
        discountId?: number,
        shortDescription?:string,
        longDescription?: number,
        enabled?:boolean,
        inStock?:boolean,
        ImageModel?: any
    ){
        this.ProductId = ProductId;
        this.ProductCode= ProductCode;
        this.ProductName= ProductName;
        this.discountId= discountId;
        this.shortDescription= shortDescription;
        this.longDescription= longDescription;
        this.enabled= enabled;
        this.inStock= inStock;
        // eslint-disable-next-line no-self-assign
        ImageModel = ImageModel;
    }
}



export default ProductModel