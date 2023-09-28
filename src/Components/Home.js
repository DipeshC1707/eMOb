import React,{useState,useEffect} from "react"
import { Navbar } from "./Navbar";
import { Products } from "./Products";
import { Banner } from "./Banner";
import {auth,db} from '../FIrebase/firebaseConfig'
import { query ,getDocs,where,collection } from "firebase/firestore";
import { ProductSlider } from "./ProductsPage/ProductSlider";


export const Home = () => {
  function GetCurrentUser(){
    const [user, setuser] = useState("");
    const userCollection = collection(db,'users');
    useEffect(() => {
      auth.onAuthStateChanged(userlogged=>{
        if(userlogged){
          const getUsers = async()=>{
            const q = query(collection(db,"users"),where("uid","==",userlogged.uid));

            const data = await getDocs(q)
            setuser(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
          }
          getUsers();
        }
        else{
          setuser(null);
        }
      })
    }, [])
    return user;
  }

  const loggedUser = GetCurrentUser();

  return (
    <>
      <Navbar />
      <Banner/>
      <ProductSlider brand={'Oneplus'}/>
    </>
  )
}


