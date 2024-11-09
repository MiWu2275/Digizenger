import { PiPencilSimpleFill } from "react-icons/pi";
import { useState } from 'react';

function ChatListNav2({ activeChat }) {
    const [activeButton, setActiveButton] = useState("all");
    
    const buttonHandle = (value) => {
        setActiveButton(value);
    };

    return (
        <section className={activeChat ? "flex items-center justify-between px-[10px] py-[20px] bg-[#F8FCFD] absolute mt-[50.1px] w-[100%] border-b border-[#ECF1F4]" : "flex items-center justify-between px-[20px] py-[15px] bg-[#F8FCFD] absolute mt-[50.1px] w-[100%]"}>
            <ul className={activeChat ? "flex flex-row flex-wrap justify-start " : "flex flex-row w-full flex-wrap justify-start gap-[15px]"}>
                {["all", "read", "unread", "archived", "groups", "family"].map((item) => (
                    <li 
                        key={item} 
                        className={`flex flex-row hover:bg-red-100  min-w-[50px] h-[30px] px-[8px] py-[4px] rounded-[27px] justify-center items-center 
                            ${activeChat ? (activeButton === item ? "bg-[#2C3E50] text-white" : "text-[#7E7E8D] gap-[2px]") : (activeButton === item ? "bg-[#2C3E50] text-white px-[25px] " : "text-[#7E7E8D] px-[25px] ")}`}
                        onClick={() => buttonHandle(item)}
                    >
                        <span className={activeChat ? "text-[12px] font-medium" : "text-[14px] font-medium"}>
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </span>
                    </li>
                ))}
            </ul>
            <div className={activeChat ? 'w-[24px] h-[24px] bg-[#ECF1F4] flex justify-center rounded-[27px] p-[6px] items-center' : 'w-[26px] h-[26px] bg-[#ECF1F4] flex justify-center rounded-[101px] p-[6px] items-center'}>
                <i className='text-[#2C3E50]'><PiPencilSimpleFill size={14.58}/></i>
            </div>
        </section>
    );
}

export default ChatListNav2;
