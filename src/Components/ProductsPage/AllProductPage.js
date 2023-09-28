import React, { useState, useEffect } from "react"
import { Navbar } from "../Navbar";
import { db } from "../../FIrebase/firebaseConfig";
import { collection, query, onSnapshot, getDocs, QuerySnapshot } from "firebase/firestore";
import './AllProductPage.css';
import { Productcontainer } from "./Productcontainer";


export const AllProductPage = (props) => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    const getProducts = () => {
      const productsArray = [];
      const path = `products${props.brand.toUpperCase()}`;

      getDocs(collection(db, path)).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
          // console.log(doc.id, " => " , doc.data());
        })
        setproducts(productsArray);
      }).catch((e) => {
        console.log(e.message());
      })
    }
    getProducts();

  }, [])
  // console.log(products);

  // console.log(props.brand);
  return (
    <><Navbar />
      <div className="allproductpage">
        <div className="heading">
          <p>Top Results for {props.brand.toUpperCase()}</p>
        </div>
        <div className="allproductcontainer">
                    {products.map((product) => (
            <Productcontainer key={product.id}
              product={product} />
          ))}
        </div>
      </div>
    </>
  )
}
