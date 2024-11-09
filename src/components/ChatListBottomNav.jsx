//import { BsChatDotsFill } from "react-icons/bs";
//import { TbPhoneFilled } from "react-icons/tb";
import { PiPhoneFill } from "react-icons/pi";
import { PiChatCircleDotsFill } from "react-icons/pi";
import { PiBellFill } from "react-icons/pi";
import { PiGearFill } from "react-icons/pi";
import { useState } from "react";
function ChatListBottomNav ({activeChat}) {
    const [activeButton, setActiveButton] = useState ("message");
    const buttonHandle = (value) => {
        setActiveButton(value);
    }
    return (
        <section className={ activeChat ? "flex items-center justify-center  w-[100%]  bg-[#5f6d7b] absolute custom-blur bottom-0" : "flex items-center  justify-between w-[100%] rounded-t-xl bg-[#5f6d7b] absolute custom-blur bottom-0"}>
            <div className="flex flex-col justify-center items-center gap-[2px] w-[499px] h-[80px] " onClick={()=> buttonHandle("message")}>
                <i className={`flex h-[32px] w-[32px] items-center justify-center ${activeButton === "message" ? " text-white" : " text-[#ECF1F4B2] "}`} ><PiChatCircleDotsFill size={30}/></i>
                <div className={`flex text-[14px] font-extralight leading-5  ${activeButton === "message" ? " text-white" : "text-[#ECF1F4B2]"}`}>Messages</div>
            </div>
            <div className="flex flex-col justify-center items-center gap-[2px] w-[499px] h-[80px]" onClick={()=>buttonHandle("call")}>
                <i className={`flex h-[32px] w-[32px] items-center justify-center ${activeButton === "call" ? " text-white" : "text-[#ECF1F4B2]"}`}><PiPhoneFill size={30}/></i>
                <div className={`text-[14px] font-extralight leading-5  ${activeButton === "call" ? " text-white" : "text-[#ECF1F4B2]"}`}>Recent Calls</div>
            </div>
            <div className="flex flex-col justify-center items-center gap-[2px] w-[499px] h-[80px] " onClick={()=>buttonHandle("noti")}>
                <i className={`flex h-[32px] w-[32px]  items-center justify-center ${activeButton === "noti" ? " text-white" : "text-[#ECF1F4B2]"}`}><PiBellFill size={30}/></i>
                <div className={`text-[14px] font-extralight leading-5  ${activeButton === "noti" ? " text-white" : "text-[#ECF1F4B2]"}`}>Notifications</div>
            </div>
            <div className="flex flex-col justify-center items-center gap-[2px] w-[499px] h-[80px]" onClick={()=> buttonHandle("setting")}>
                <i className={`flex h-[32px] w-[32px]  items-center justify-center ${activeButton === "setting" ? " text-white" : "text-[#ECF1F4B2]"}`}><PiGearFill size={30}/></i>
                <div className={`text-[14px] font-extralight leading-5  ${activeButton === "setting" ? " text-white" : "text-[#ECF1F4B2]"}`}>Settings</div>
            </div>
        </section>
    )
}

export default ChatListBottomNav;