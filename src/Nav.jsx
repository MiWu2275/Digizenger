import logo from "../images/logo.png";
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
        <section className="grid grid-cols-[30%_40%] gap-x-[23rem] bg-[#0c0c0c] text-center">
            <img src={logo} className="w-[210px] h-[85px] ml-[4rem] my-[0.5rem]"></img>
            <ul className="flex flex-cols gap-x-[5rem] text-white font-bold self-center relative nav">
                <Link to="/"><li className="first" onClick={handleLinkClick}>Home</li></Link>
                <Link to="course"><li className="second" onClick={handleLinkClick}>Course</li></Link>
                <Link to="pricing"><li onClick={handleLinkClick}>Pricing</li></Link>
                <Link to="about"><li onClick={handleLinkClick}>About Us</li></Link>
                <div className="animation"
                style={
                    activeLink
                        ? {
                              width: `${activeLink.offsetWidth}px`,
                              left: `${activeLink.offsetLeft}px`,
                          }
                        : {}
                }
                >

                </div>
            </ul>
        </section>
    )
}

export default Nav;