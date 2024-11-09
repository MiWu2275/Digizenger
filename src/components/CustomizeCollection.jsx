import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import folder from '../../images/folder.png';
import { RxPlus } from "react-icons/rx";
import Collection1 from './Collection1';
function CustomizeCollection(){

    const [isButtonActive, setIsButtonActive] = useState(false);
    const handleButtonClick = () => {
        setIsButtonActive(true); 
    };

    const [isAddChatsClicked, setIsAddChatsClicked] = useState(false);
    const handleAddChatsClick = () => {
        setIsAddChatsClicked(true); 
    };

    return(
        <div>
            <div  className="bg-white w-[526px] h-[502.13px] rounded-lg p-20 border mt-40 ml-6 flex justify-center items-center relative">
                <div className=" w-[486px] h-[19.13px] p-3 gap-0 mx-auto absolute inset-0 m-auto mt-4  flex items-center justify-end ">
                    <RxCross2 className=" w-[18px] h-[18px] text-[#2C3E50]"/>
                </div>

                {isAddChatsClicked ? (
                    <Collection1 /> // Show Collections1 component if button clicked
                ) : (
                <div className=" bg-white w-[482px] h-[443px] flex flex-col  items-center absolute mt-6 ">
                    <div className=" bg-white w-[79px] h-[79px] flex justify-center ">
                        <img src={folder} alt="" />
                    </div>
                        <div className="mt-4 text-center ">
                        <h3 className="text-[#0097A7] font-bold text-[24px]">New Collection</h3>
                        <p className="text-[#7E7E8D]">Choose chats you want to add to your collections for quick access and keep your conversations organized.</p>
                        </div>
                        <div>
                        <button
                    onClick={handleButtonClick}                  className={`rounded-lg w-[482px] h-[48px] bg-[#ECF1F4] text-[#8C8CA1] mt-6 flex items-center justify-start cursor-pointer ${
                        isButtonActive ? 'border-[#0097A7] border' : ''
                    }`} // Conditional border color
                >
                    <label className="ml-2">Untitled Collection</label>
                </button>
                        </div>
                        <div className="mt-4 text-left">
                        <h3 className="text-[#2C3E50] font-bold text-[20px] w-[482px] h-[30px]">Chat List</h3>
                        <p className="text-[#7E7E8D] mt-2">No chat added.</p>
                            <div onClick={handleAddChatsClick} className=" w-[482px] h-[24px] flex mt-4">
                            <RxPlus className=" w-[21px] h-[22px] text-[#2C3E50] ml-2 flex items-center" />
                            <p className=" h-[24px] text-[16px] text-[#2C3E50] ml-4 flex items-center">Add Chats</p>
                            </div>
                            <div>
                                <button className="rounded-lg w-[482px] h-[47px] bg-[#0097A7] font-bold text-white mt-5 cursor-pointer">Save</button>
                            </div>
                        </div>
                </div>
      )}
            </div>
        </div>
    );

}
export default CustomizeCollection;