import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PImg from "../assets/Product.jpg"
import Products_Data from '../assets/Products_Data.json'

function ProductDetails(props) {
   let {id} =  useParams()
    
   
   let product =  Products_Data.find((p)=> p.id == id )
    console.log(product)
   
    return (
     <>
     <br /><br />
     <div className="container mt-5" >
        <div className='row'>
            <div className="col-md-5">
                <img src={PImg} className='img-thumbnail' alt="" />
            </div>
            <div className="col-md-7">
                <h1 className='text-primary'> {product.title} </h1>
                <hr />
                <h2>{product.category}</h2>
                <h3>Description : {product.description}</h3>
                <hr />
                <h3>Size : {product.size}</h3>
                <h1 className='text-success'>Price : {product.price}</h1>
                <button className='btn btn-success'>Buy Now</button>
            </div>
        </div>
     </div>
     
     </>
    );
}

export default ProductDetails;