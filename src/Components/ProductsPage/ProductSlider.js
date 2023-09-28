import React, { useState, useEffect } from "react"
import { db } from "../../FIrebase/firebaseConfig";
import { collection, query, onSnapshot, getDocs, QuerySnapshot } from "firebase/firestore";
import './AllProductPage.css';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { SliderProductCard } from "./SliderProductCard";

export const ProductSlider = (props) => {
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
  console.log(products);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div>
        <Carousel responsive={responsive}>
            {products.map((product)=>(
                <SliderProductCard key={product.id} product={product}/>
            ))}
        </Carousel>
    </div>
  )
}