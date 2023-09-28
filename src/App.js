import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from "./Components/Home"
import { SignUp } from "./Components/SignUp";
import { Login } from "./Components/Login";
import { Notefound } from "./Components/Notefound";
import {ProfilePage} from "./Components/ProfilePage";
import {Cart} from "./Components/Cart";
import { AddProduct } from './Components/AddProduct';
import { AllProductPage } from './Components/ProductsPage/AllProductPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Notefound/>}/>
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/sellproduct" element={<AddProduct />} />
        <Route exact path="/profile" element={<ProfilePage />} />
        <Route exact path="/brand/apple" element={<AllProductPage brand="apple"/>} />
        <Route exact path="/brand/vivo" element={<AllProductPage brand="vivo"/>} />
        <Route exact path="/brand/oneplus" element={<AllProductPage brand="oneplus"/>} />
        <Route exact path="/brand/realme" element={<AllProductPage brand="realme"/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
