import React,{useEffect,useState} from "react"
import { Navbar } from "./Navbar"
import { useNavigate } from "react-router-dom";
import {storage,auth,db} from '../FIrebase/firebaseConfig'
import { getDownloadURL,ref,uploadBytes } from "firebase/storage";
import { query ,getDocs,where,collection,addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import './AddProduct.css'
 
export const AddProduct = () => {
    const [producttitle, setproducttitle] = useState('');
    const [description, setdescription] = useState('');
    const [brand, setbrand] = useState('');
    const [customersupport, setcustomersupport] = useState('');
    const [price, setprice] = useState('');
    const [warranty, setwarranty] = useState('');
    const [productimage, setproductimage] = useState('');

    const [imgerror, setimgerror] = useState('');
    const [uploaderror, setuploaderror] = useState('');
    const [successmsg, setsuccessmsg] = useState('');

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

      const types = ['image/jpg','image/jpeg','image/png','image/PNG']
      const handleProductImg = (e)=>{
        e.preventDefault();
        let selectedFile = e.target.files[0];
        if (selectedFile && types.includes(selectedFile.type)) {
            setproductimage(selectedFile);
            setimgerror('')
        }
        else{
            setproductimage(null);
            setimgerror("Please Select a Valid Type of File")
        }
      }
      const handleAddProduct = (e) =>{
        e.preventDefault();
        const storageRef = ref(storage,`product-images${brand.toUpperCase()}/${Date.now()}`)
         uploadBytes(storageRef,productimage).then(()=>{
            getDownloadURL(storageRef).then(url=>{
                 addDoc(collection(db,`products${brand.toUpperCase()}`),{
                    productimage:url,producttitle,description,brand,customersupport,warranty,price
                 }
                 ).then(()=>{
                  setsuccessmsg("Product Added Succesfully");
                 })
            })
         })


      }
      const loggedUser = GetCurrentUser(); 
  return (
    <>
    <Navbar/>
    <br></br>
      <form className="container">
        <br></br>
        <br></br>
        <h1>Add Products</h1>
        <hr></hr>
        <div className="form-group">
        {successmsg && <>
            <div className="success">
              {successmsg}
            </div></>}
          {imgerror && <>
            <div className="error">
              {imgerror}
            </div></>}
          <label><strong>Product Title</strong></label>
          <input onChange={(e)=>setproducttitle(e.target.value)} type="text" className="form-control" id="title" aria-describedby="emailHelp" placeholder="Product Title" />
          <br></br>
        </div>
        <div className="form-group">
          <label><b>Decription</b></label>
          <input onChange={(e)=>setdescription(e.target.value)}type="text" className="form-control" id="description" placeholder="Decription" />
            <br></br>        
            </div>
        <div className="form-group">
          <label><b>Brand</b></label>
          <input onChange={(e)=>setbrand(e.target.value)} type="text" className="form-control" id="brand" placeholder="Brand" />
            <br></br>        
            </div>
        <div className="form-group">
          <label><b>Image</b></label>
          <input type="file" className="form-control" onChange={handleProductImg} />
            <br></br>        
            </div>
        <div className="form-group">
          <label><b>Warranty</b></label>
          <input onChange={(e)=>setwarranty(e.target.value)} type="text" className="form-control" id="warranty" placeholder="Warranty" />
            <br></br>        
            </div>
        <div className="form-group">
          <label><b>Price</b></label>
          <input onChange={(e)=>setprice(e.target.value)} type="text" className="form-control" id="price" placeholder="Price" />
            <br></br>        
            </div>
        <div className="form-group">
          <label><b>Customer Support</b></label>
          <input onChange={(e)=>setcustomersupport(e.target.value)} type="text" className="form-control" id="customer" placeholder="Customer Support" />
            <br></br>        
            </div>
        <button type="submit" onClick={handleAddProduct} className="btn btn-success">Submit</button>
      </form>
      <br></br>
    </>
  )
}