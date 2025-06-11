import React, { useState } from "react";
import Products_Data from "../assets/Products_Data.json";
import ProductImg from "../assets/Product.jpg";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";

function Products() {
  let [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(0); 

  let category_array = Products_Data.map((p) => {
    return p.category;
  });

  // console.log(category_array);

  let categoryList = Products_Data.map((product) => product.category);
  let uniqueCategory = new Set(categoryList);
  let categories = Array.from(uniqueCategory);
  categories.sort();

  categories.unshift("All");
  // console.log(categories);

  const filteredProducts = Products_Data.filter((product) => {
    const matchCategory = category === "All" || product.category === category;
    const matchPrice = product.price <= maxPrice;
    return matchCategory && matchPrice;
  });

  return (
    <div className="container-fluid mt-3">
      <div className="row">
        {/* Filters */}
        <div className="col-md-3">
          <div className="p-3 bg-light border rounded sticky-top">
            <h5>Filters:</h5>
            <hr />
            <div>
              <h5>Max Price: ₹{maxPrice}</h5>
              <input
                type="range"
                min="0"
                max="10"
                step=".5"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              />
              
              <hr></hr>
            </div>

            <h5>Categories :</h5>
            <div>
              {categories.map((categories, index) => (
                <button
                  className="btn btn-secondary btn-sm mb-2 me-2"
                  key={index}
                  onClick={() => {
                    setCategory(categories);
                  }}
                >
                  {" "}
                  {categories}
                </button>
              ))}
            </div>
            <hr />
          </div>
        </div>
        <div className="col-md-9 ">
          <h5>{category}</h5>
          <div className="row">
            {filteredProducts.map((p, index) => (
              <div className="col-md-3 col-sm-4 col-6 mb-4" key={index}>
                <div className="card h-100">
                  <Link to={`/product_Details/${p.id}`}>
                    <img
                      src={ProductImg}
                      className="card-img-top"
                      alt="Product"
                    />
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
