import charlie from "/images/charlie.png";
import aliceonn from "/images/aliceonn.png";
import DianaPrince from "/images/DianaPrince.png";
import { RxCross2 } from "react-icons/rx";
import folder from '/images/folder.png';
import { RxPlus } from "react-icons/rx";
import React,{useState} from "react";
function Collections2(){
    const [isButtonActive, setIsButtonActive] = useState(false);
    const handleButtonClick = () => {
        setIsButtonActive(true); // Set to true when clicked
    };

    return(
        <div>
            <div  className="bg-white w-[520px] h-[622.13px] rounded-lg p-20 border ml-6 flex justify-center items-center relative">
                <div className=" w-[480px] h-[19.13px] p-3 gap-0 mx-auto absolute inset-0 m-auto mt-4  flex items-center justify-end ">
                    <RxCross2 className=" w-[16px] h-[16px] text-[#2C3E50]"/>
                </div>
                <div className=" bg-white w-[480px] h-[563px] flex flex-col  items-center absolute mt-6 ">
                    <div className=" w-[480px] h-[246px]">
                        <div className=" w-[480px] h-[178px] flex flex-col items-center">
                            <div className=" bg-white w-[79px] h-[79px] flex justify-center ">
                                <img src={folder} alt="" />
                            </div>
                        <div className="mt-4 text-center ">
                        <h3 className="text-[#0097A7] font-bold text-[24px]">New Collection</h3>
                        <p className="text-[#7E7E8D]">Choose chats you want to add to your collections for quick access and keep your conversations organized.</p>
                        </div>
                        </div>
                        <div className="w-[480px] h-[48px]">
                        <button
                    onClick={handleButtonClick}                  className={`rounded-lg w-[480px] h-[48px] bg-[#ECF1F4] text-[#8C8CA1] mt-6 flex items-center justify-start cursor-pointer ${
                        isButtonActive ? 'border-[#0097A7] border' : ''
                    }`} // Conditional border color
                >
                    <label className="ml-2">Friends</label>
                </button>
                </div>
                        </div>
                        <div className=" w-[480px] h-[222px] mt-4 text-left">
                        <h3 className="text-[#2C3E50] font-bold text-[20px] w-[480px] h-[30px]">Chat List</h3>
                        <div className="w-[480px] h-[144px] flex">
                            <div className=" mt-2 w-[482px] h-[144px]">
                            <div className=" w-[472px] h-[48px] flex items-center justify-center hover:bg-[#ECF1F4] rounded-lg">
                                <div className=" w-[32px] h-[32px] mr-2">
                                    <img src={charlie} alt="" />
                                </div>
                                <div className=" w-[396px] h-[28px] flex items-center justify-between ml-2">
                                    <div className=" w-[112px] h-[24px] flex items-center">
                                        <span className="text-[#2C3E50] text-[14px] font-bold">Charlie Robert</span>
                                    </div>
                                </div>
                            </div>
                            <div className=" w-[472px] h-[48px] flex items-center justify-center hover:bg-[#ECF1F4] rounded-lg">
                                <div className=" w-[32px] h-[32px] mr-2">
                                    <img src={aliceonn} alt="" />
                                </div>
                                <div className=" w-[396px] h-[28px] flex items-center justify-between ml-2">
                                    <div className=" w-[100px] h-[24px] flex items-center">
                                        <span className="text-[#2C3E50] text-[14px] font-bold">Alice Onn</span>
                                    </div>
                                </div>
                            </div>
                            <div className=" w-[472px] h-[48px] flex items-center justify-center hover:bg-[#ECF1F4] rounded-lg">
                                <div className=" w-[32px] h-[32px] mr-2">
                                    <img src={DianaPrince} alt="" />
                                </div>
                                <div className=" w-[396px] h-[28px] flex items-center justify-between ml-2">
                                    <div className=" w-[100px] h-[24px] flex items-center">
                                        <span className="text-[#2C3E50] text-[14px] font-bold">Nandar Aung</span>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className=" rounded w-[4px] h-[77px] bg-[#C9DCDE]"></div>
                        </div>
                            <div className=" w-[480px] h-[24px] flex items-center mt-5 ">
                            <RxPlus className=" w-[20px] h-[20px] text-[#2C3E50] ml-5 flex items-center" />
                            <p className=" h-[24px] text-[15px] text-[#2C3E50] ml-4 flex items-center">Add Chats</p>
                            </div>
                            <div>
                                <div className="rounded-lg w-[480px] h-[47px] bg-[#0097A7] font-bold text-white mt-5 cursor-pointer flex items-center justify-center">
                                <label className="text-[white]">Save</label>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );

}
export default Collections2;