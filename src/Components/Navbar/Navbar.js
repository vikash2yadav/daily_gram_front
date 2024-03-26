import React from "react";
import { ReactNavbar } from "overlay-navbar";
// import { CgSearch } from "react-icons/cg";
// import { AiFillShopping } from "react-icons/ai";
// import { CgProfile } from "react-icons/cg";
// import logo from "../../../image/logo.png"

const options = {
//  logo,
  navColor1: "rgba(255,255,255)",
  burgerColorHover: "#eb4034",
  logoWidth: "100%",
  logoHoverColor: "#eb4034",
  link1Size: "1rem",
  link1Color: "black",
  link1Padding: "1.5vmax",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  link2Margin: "0vmax",
  link3Margin: "0vmax",
  link4Margin: "1vmax",

  nav3justifyContent: "start",
  link1Text: "Home",
  link1Family: "sans-serif",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  nav4justifyContent: "start",

  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  // searchIcon: true,
  // SearchIconElement: CgSearch ,
  // cartIcon: true,
  // CartIconElement:  AiFillShopping ,
  // profileIcon: true,
  // ProfileIconElement: CgProfile ,

  searchIconMargin: "1vmax",
  cartIconMargin: "0vmax",
  profileIconMargin: "1vmax",

  searchIconColor: "black",
  profileIconColor: "black",
  cartIconColor: "black", 

  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  profileIconColorHover: "#eb4034",
};
const Navbar = () => {
  return (
    <>
      <ReactNavbar style={{height:"400px", width:"400px"}} {...options}/>
    </>
  );
};

export default Navbar;


