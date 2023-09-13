import React from "react"
import { Navbar } from "./Navbar";
import { Products } from "./Products";
import { Banner } from "./Banner";
export const Home = () => {
  return (
    <>
      <Navbar />
      <Banner/>
      <Products />
    </>
  )
}