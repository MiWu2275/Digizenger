import logo from "/images/Digizenger2.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import HamburgerMenu from "./Hamburger.jsx"
function Nav(){

    return(
        <section className="nav_container fixed bg-white w-full grid grid-cols-[30%_10%_50%]  gap-x-[2rem] border-b-2 border-slate-100 ">
            <img src={logo} className="w-[170px] h-[50px] ml-[10rem] my-[0.3rem] mx-auto edsn_logo"></img>
            <div className="burger duration-100"><HamburgerMenu/></div>
            <ul className="normal_menu flex flex-cols gap-x-[3rem] self-center text-sm">
                <Link to="/"><li className="first hover:text-[#00BCD4] " >Home</li></Link>
                <Link to="course"><li className="second hover:text-[#00BCD4]" >Products</li></Link>
                <Link to="pricing"><li className="hover:text-[#00BCD4]" >About Us</li></Link>
                <Link to="about"><li className="hover:text-[#00BCD4]" >Download App</li></Link>
                <Link to="signup"><span className="sign_up_button text-[18px] bg-[#0097A7] hover:bg-[#00BCD4] text-white px-[20px] py-[10px] rounded-md">Sign Up</span></Link>
                <Link to="login"><span className="text-[#00BCD4] hover:text-black font-bold">Login</span></Link>

            </ul>
        </section>
    )
}

export default Nav;