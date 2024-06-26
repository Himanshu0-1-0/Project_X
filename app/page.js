'use client'
import Navbar from "@/Components/Navbar/Navbar.js";
import styles from "./page.module.css";
import MainDiv from "@/Components/Cards1/MainDiv";
import { AuthProvider } from "@/store/AuthContext";
import { CartProvider } from "@/store/CartContext";
import Footer from "@/Components/Footer/Footer";
import Swiper from "@/Components/Swiper/Carasoul.js";

export default function Home() {
  
  return (
    <AuthProvider>
       <CartProvider>
        <Navbar />
        <MainDiv/>
        <Swiper />
        
        <Footer/>
        {/* <div className={styles.test}></div> */}
      </CartProvider>
    </AuthProvider>
  );
}
