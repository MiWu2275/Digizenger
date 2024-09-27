import { BsChatDotsFill } from "react-icons/bs";
import { TbPhoneFilled } from "react-icons/tb";
import { IoMdNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { useState } from "react";
function ChatListBottomNav ({activeChat}) {
    const [activeButton, setActiveButton] = useState ("message");
    const buttonHandle = (value) => {
        setActiveButton(value);
    }
    return (
        <section className={ activeChat ? "flex items-center justify-center  w-[100%] bg-[#5f6d7b] absolute custom-blur bottom-0" : "flex items-center  justify-between w-[100%] bg-[#5f6d7b] absolute custom-blur bottom-0"}>
            <div className="flex flex-col justify-center items-center gap-[2px] w-[100px] h-[70px] " onClick={()=> buttonHandle("message")}>
                <i className={`flex h-[30px] w-[30px] text-[#ECF1F4] items-center justify-center ${activeButton === "message" ? " text-white" : ""}`} ><BsChatDotsFill size={30}/></i>
                <div className={`flex text-[12px] font-medium leading-5 text-[#ECF1F4] ${activeButton === "message" ? " text-white" : ""}`}>Messages</div>
            </div>
            <div className="flex flex-col justify-center items-center gap-[2px] w-[100px] h-[70px]" onClick={()=>buttonHandle("call")}>
                <i className={`flex h-[30px] w-[30px] text-[#ECF1F4] items-center justify-center ${activeButton === "call" ? " text-white" : ""}`}><TbPhoneFilled size={30}/></i>
                <div className={`text-[12px] font-medium leading-5 text-[#ECF1F4] ${activeButton === "call" ? " text-white" : ""}`}>Recent Calls</div>
            </div>
            <div className="flex flex-col justify-center items-center gap-[2px] w-[100px] h-[70px] " onClick={()=>buttonHandle("noti")}>
                <i className={`flex h-[30px] w-[30px] text-[#ECF1F4] items-center justify-center ${activeButton === "noti" ? " text-white" : ""}`}><IoMdNotifications size={30}/></i>
                <div className={`text-[12px] font-medium leading-5 text-[#ECF1F4] ${activeButton === "noti" ? " text-white" : ""}`}>Notifications</div>
            </div>
            <div className="flex flex-col justify-center items-center gap-[2px] w-[100px] h-[70px]" onClick={()=> buttonHandle("setting")}>
                <i className={`flex h-[30px] w-[30px] text-[#ECF1F4] items-center justify-center ${activeButton === "setting" ? " text-white" : ""}`}><IoMdSettings size={30}/></i>
                <div className={`text-[12px] font-medium leading-5 text-[#ECF1F4] ${activeButton === "setting" ? " text-white" : ""}`}>Settings</div>
            </div>
        </section>
    )
}

export default ChatListBottomNav;