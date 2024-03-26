import React from 'react'
import { ReactNavbar } from 'overlay-navbar';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
// import "overlay-navbar/ReactNavbar.min.css";

const Header = (props) => {

  const options = {
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png',
     navColor1: "rgb(200, 200, 200)",
     burgerColorHover: "blue",
     logoWidth: "70%",
     logoHoverColor: "blue",
     link1Size: "1rem",
     link1Color: "black",
     link1Padding: "1.5vmax",
     link1ColorHover: "blue",
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
     searchIcon: true,
     SearchIconElement: FacebookIcon ,
     cartIcon: true,
     CartIconElement:  XIcon ,
     profileIcon: true,
     ProfileIconElement: FacebookIcon ,
   
     searchIconMargin: "1vmax",
     cartIconMargin: "0vmax",
     profileIconMargin: "1vmax",
   
     searchIconColor: "black",
     profileIconColor: "black",
     cartIconColor: "black",
   
     searchIconColorHover: "blue",
     cartIconColorHover: "blue",
     profileIconColorHover: "blue",
   };

  return (
    <>
    <ReactNavbar {...options} />

    </>
  )
}

export default Header