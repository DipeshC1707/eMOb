import React from "react"
import './Sliderproductcard.css'

export const SliderProductCard = (product) => {
    let overalltax = 10 / 100;
    let overcommission = 10 / 100;
    let extraforfun = 10 / 100;

    let mrp = parseInt(product.product.price);
    let trp = mrp + overalltax * mrp + overcommission * mrp + extraforfun * mrp;
    const saleprice = parseInt(mrp - extraforfun * trp);
    return (
        <>
            <div className="mini-product-container">
                <div className="mini-image-container">        
                <img src={product.product.productimage} />
                </div>
                <div className="mini-product-details">
                    <p className="mini-producttitle">{product.product.producttitle}</p>
                    <div className="price-containers">
                        <p className="mrp">MRP:<p className="rate">₹{mrp}</p></p>
                        <p className="saleprice">Discount Price:<p className="rate">₹{saleprice}</p></p>
                        <p className="yousave">You Save:<p className="rate">₹{mrp - saleprice}</p></p>
                    </div>
                   </div> 
                <button className="showmore">Show More &gt;</button>
            </div>
        </>
    )
}