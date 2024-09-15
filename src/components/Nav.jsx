import logo from "/images/Digizenger2.png";
import { Link } from "react-router-dom";
import { useState } from "react";
function Nav(){

    const [activeLink ,setActiveLink] = useState();

    const handleLinkClick = (e) => {
        const link = e.currentTarget;
        console.log(link)
        setActiveLink(link);
    };

    return(
        <section className="fixed z-[10] bg-white w-full grid grid-cols-[40%_50%]  gap-x-[4rem] border-b-2 border-slate-100 ">
            <img src={logo} className="w-[170px] h-[50px] ml-[10rem] my-[0.3rem]"></img>
            <ul className="flex flex-cols gap-x-[3rem] self-center text-sm">
                <Link to="/"><li className="first hover:text-[#00BCD4] " onClick={handleLinkClick}>Home</li></Link>
                <Link to="course"><li className="second hover:text-[#00BCD4]" onClick={handleLinkClick}>Products</li></Link>
                <Link to="pricing"><li className="hover:text-[#00BCD4]" onClick={handleLinkClick}>About Us</li></Link>
                <Link to="about"><li className="hover:text-[#00BCD4]" onClick={handleLinkClick}>Download App</li></Link>
                <Link to="signup"><span className="text-[18px] bg-[#0097A7] hover:bg-[#00BCD4] text-white px-[20px] py-[10px] rounded-md">Sign Up</span></Link>
                <Link to="login"><span className="text-[#00BCD4] hover:text-black font-bold">Login</span></Link>

            </ul>
        </section>
    )
}

export default Nav;