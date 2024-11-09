
import { BsToggleOn } from "react-icons/bs";
function ChatListNav({activeChat}){

    return(
        <section className={activeChat ?  "flex justify-between items-center flex-shrink-0 py-[4px] px-[25px] bg-white border-b border-[#ECF1F4] absolute " : "flex justify-between items-center flex-shrink-0 py-[4px] px-[25px] bg-white border-b border-[#ECF1F4] absolute w-[100%]"}>
            <div className="text-[28px] font-bold text-[#2C3E50]">
                Messages
            </div>
            <div className="flex items-center gap-[8px]">
                <span className="text-[16px] font-bold leading-6 text-[#2C3E50]">Guard Mode</span>
                <i className='text-[#C9DCDE]'><BsToggleOn size={44}/></i>
            </div>
        </section>
    )
}

export default ChatListNav;