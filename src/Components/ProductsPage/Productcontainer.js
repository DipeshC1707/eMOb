import React from "react";
import "./ProductContainer.css"

export const Productcontainer = (product) => {
  let overalltax = 10/100;
  let overcommission = 10/100;
  let extraforfun = 10/100;

  let mrp = parseInt(product.product.price);
  let trp = mrp + overalltax*mrp + overcommission*mrp + extraforfun*mrp;
  const saleprice = parseInt(mrp - extraforfun*trp);
 return(
    <>
    <div className="product-container">
      <img src={product.product.productimage}/>
      <div className="product-details">
        <p className="product-title">{product.product.producttitle}</p>
        <div className="price-container">
          <p className="mrp">MRP:<p className="rate">₹{mrp}</p></p>
          <p className="saleprice">Discount Price:<p className="rate">₹{saleprice}</p></p>
          <p className="yousave">You Save:<p className="rate">₹{mrp-saleprice}</p></p>
        </div>
        <div className="buy-cart">
          <button className="btn">Buy Now</button>
          <button className="btn">Add to Cart</button>
        </div>
      </div>
    </div>
    </>
  )
}