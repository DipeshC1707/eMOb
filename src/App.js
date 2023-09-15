import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from "./Components/Home"
import { SignUp } from "./Components/SignUp";
import { Login } from "./Components/Login";
import { Notefound } from "./Components/Notefound";
import {ProfilePage} from "./Components/ProfilePage";
import {Cart} from "./Components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Notefound/>}/>
        <Route exact path="/cart" element={<Cart />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
