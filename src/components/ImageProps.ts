import React from "react";
import ImageModel from "../models/ImageModel";

interface ImageProps {
    image: ImageModel;
}

// const ImageProps: React.FC<ImageProps> = ( props ) => {

//     const image = props.

//     return (
//         <div className="col-md-3 mt-2">
//             <div className="card">
//                 <img
//                     src={product.ProductCode}
//                     className="card-img-top"
//                     alt={product.shortDescription}
//                     style={{ height: '200px' }}
//                 />
//                 <div className="card-body">
//                     <h5 className="card-title">{product.ProductName}</h5>
//                     <p className="card-text">{product.longDescription}</p>
//                     <div className="row float-start">
//                         <div className="price">
//                             <span className="original-price">
//                                 <del>{product.discountId}</del>
//                             </span>
//                         </div>
//                         <div className="price mt-2">
//                             <span className="discounted-price">
//                                 <strong>{product.discountId}</strong>
//                             </span>
//                         </div>
//                     </div>
//                     <div className="row" role="group">
//                         <div className="col-6 float-end">
//                             <a href="#" className="btn btn-danger btn-block">
//                                 <i className="fas fa-heart"></i>
//                             </a>
//                         </div>
//                         <div className="col-6 float-end">
//                             <button className="btn btn-success btn-block">
//                                 <i className="fas fa-shopping-cart"></i>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
export default ImageProps;