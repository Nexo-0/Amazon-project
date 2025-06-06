import React, { useState } from "react";
import Products_Data from "../assets/Products_Data.json";
import ProductImg from "../assets/Product.jpg";
import { Link } from "react-router-dom";

function Products() {
  return (  

    let [cat,setCat] = useState("Home");


    let  cat_array =Products_Data.map((p)=>{
        return p.category;
    });

    console.log(category_array);







    <div className="container-fluid mt-3">
      <div className="row">
            {/* Filters */}
            <div className="col-md-3">
                <div className="p-3 bg-light border rounded sticky-top">
                    <h5>Filters:</h5>       
                    <hr/>
                    <h5>Categories :</h5>
                    <div>
                        {categories.map((cat)=>(
                                <button className="btn btn-secondary btn-sm mb-2 me-2"></button>
                        ))}
                    </div>
                    <hr/>

                </div>

            </div>
            <div className="col-md-9 ">
                <div className="row">
            {Products_Data.map((p, index) => (
          <div className="col-md-3 col-sm-4 col-6 mb-4" key={index}>
            <div className="card h-100">
              <Link to={`/ProductDetails/${p.id}`}>
                <img src={ProductImg} className="card-img-top" alt="Product" />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text">{p.description}</p>
                <h6 className="text-success">₹{p.price}</h6>
                <button className="btn btn-warning">Add to cart</button>
              </div>
            </div>
          </div>
        ))}
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default Products;
