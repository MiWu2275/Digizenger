import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosCheckbox } from "react-icons/io";
import { PiSealCheckFill } from "react-icons/pi";
import { PiShieldCheckFill } from "react-icons/pi";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import khin from "/images/khin.png";
import aliceonn from "/images/aliceonn.png";
import BobMaric from "/images/BobMaric.png";
import charlie from "/images/charlie.png";
import DianaPrince from "/images/DianaPrince.png";
import LifePlus from "/images/LifePlus.png";
import Collections2 from "./Collections2";
const Collection1 = () => {
    const [isCollection1Open, setIsCollection1Open] = useState(true);
    const [isCollections2Open, setIsCollections2Open] = useState(false);
    const [isButtonActive, setIsButtonActive] = useState(false);
       
    const [checkedItems, setCheckedItems] = useState({
        khin: false,
        aliceonn: false,
        BobMaric: false,
        charlie: false,
        DianaPrince: false,
        LifePlus: false,
    });

    const toggleCheckbox = (name) => {
        setCheckedItems((prevState) => ({
            ...prevState,
            [name]: !prevState[name],
        }));
    };

    const users = [
        { name: "Khin Nwe Win", image: khin, badge: <PiShieldCheckFill className="text-[#00BA00] w-[15px] h-[15px] " /> },
        { name: "Alice Onn", image: aliceonn, badge: <PiShieldCheckFill className="text-[#00BA00] w-[15px] h-[15px]" /> },
        { name: "Bob Maric", image: BobMaric, badge: <PiSealCheckFill className="text-[#20BCED] w-[15px] h-[15px] " /> },
        { name: "Charlie Robert", image: charlie },
        { name: "Diana Prince", image: DianaPrince, badge: <PiSealCheckFill className="text-[#F3B412] w-[15px] h-[15px]" /> },
        { name: "Life Plus", image: LifePlus, badge: <PiSealCheckFill className="text-[#F04343] w-[15px] h-[15px]" /> },
        { name: "Nandar Aung", image: charlie },
        { name: "Leo Robert", image: DianaPrince, badge: <PiSealCheckFill className="text-[#F3B412] w-[15px] h-[15px]" /> },
        { name: "Jean Hannah", image: khin, badge: <PiShieldCheckFill className="text-[#00BA00] w-[15px] h-[15px] " /> },
    ];

    const handleOpenCollection1 = () => {
        setIsCollection1Open(true);
        setIsCollections2Open(false);
    };
  
    const handleCloseCollection1 = () => {
        setIsCollection1Open(false);
        setIsCollections2Open(true);
    };

    const handleButtonClick = () => {
        setIsButtonActive(true);
    };

    return (
        <div>
             {isCollection1Open && (
        <div className="border w-[520px] h-[508.13px] bg-white rounded-md flex flex-col items-center justify-center">
             <div className=" w-[480px] h-[19.13px] flex items-center justify-end ">
                <RxCross2 className=" w-[18px] h-[18px] text-[#2C3E50]" />
            </div> 
            <div className=" w-[480px] h-[445px] flex flex-col items-center justify-end">
                <div className="w-[520px] h-[90px] flex flex-col items-center justify-start">
                    <span className=" w-[480px] h-[30px] flex items-start font-bold text-[#2C3E50] text-lg ">Select chats</span>
                    <button
                    onClick={handleButtonClick}  className={`flex items-center w-[464px] h-[44px] rounded-md bg-[#ECF1F4] mr-3 ${
                        isButtonActive ? 'border-[#0097A7] border' : ''
                    }`} // Conditional border color
                >
                     <IoSearchOutline className=" w-[24px] h-[24px] text-[#2C3E50] ml-3" />
                    <label className="ml-2 text-[#8C8CA1]">Search</label>
                </button>
                </div>
                <div className=" w-[480px] h-[300px] flex items-center justify-center scrollbar-hide overflow-y-auto mb-6" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} >
                    <div className=" w-[476px] h-[336px] flex flex-col items-center justify-center mr-2 mt-36">
                        {users.map((user, index) => (
                            <div key={index} className=" w-[464px] h-[48px] flex items-center justify-center hover:bg-[#ECF1F4] rounded-lg p-2">
                                <div className=" w-[32px] h-[32px] mr-2">
                                    <img src={user.image} alt="" />
                                </div>
                                <div className=" w-[396px] h-[28px] flex items-center justify-between ml-2">
                                    <div className=" w-auto h-[24px] flex items-center">
                                        <span className="text-[#2C3E50] text-[14px] font-bold">{user.name}</span>
                                        {user.badge && <span className="ml-1">{user.badge}</span>}
                                    </div>
                                    <div className="w-[28px] h-[28px] flex items-center justify-center" onClick={() => toggleCheckbox(user.name)}>
                                        {checkedItems[user.name] ? (
                                            <IoIosCheckbox className="text-[#0097A7] w-[21px] h-[21px]" />
                                        ) : (
                                            <MdOutlineCheckBoxOutlineBlank className="text-[#8C8CA1] w-[21px] h-[21px]" />
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="border rounded w-[4px] h-[77px] bg-[#C9DCDE] mb-40"></div>
                </div>

                <div onClick={handleCloseCollection1} className="rounded-md bg-[#0097A7] w-[480px] h-[47px] flex items-center justify-center text-white text-md font-bold">Done
                </div>
            </div>
        </div>
             )}
                    {isCollections2Open && (
                <Collections2 
                isOpen={isCollections2Open} 
                onClose={handleOpenCollection1} 
                />
            )}
      </div>
    );
}

export default Collection1;
