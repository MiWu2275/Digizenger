import edit from '/images/edit.png';

function ChatListNav2 ({activeChat}){
    return(
        <section className={activeChat ?"flex items-center justify-between p-[15px] bg-[#F8FCFD]" : "flex items-center justify-between px-[20px] py-[15px] bg-[#F8FCFD]"}>
            <ul className="flex flex-row w-full flex-wrap justify-start gap-[2px]">
                <li className="flex flex-row hover:bg-red-100 gap-[2px] min-w-[50px] px-[12px] py-[4px] rounded-[15px] justify-center items-center">
                    <span className={activeChat ? "text-[14px] font-medium text-[#7E7E8D]" : "text-[16px] font-medium text-[#7E7E8D]"}>All</span>
                </li>
                <li className="flex flex-row hover:bg-red-100 gap-[2px] min-w-[50px] px-[20px] py-[4px] rounded-[15px] justify-center items-center">
                    <span className={activeChat ? "text-[14px] font-medium text-[#7E7E8D]" : "text-[16px] font-medium text-[#7E7E8D]"}>Read</span>
                </li>
                <li className="flex flex-row hover:bg-red-100 gap-[2px] min-w-[50px] px-[20px] py-[4px] rounded-[15px] justify-center items-center">
                    <span className={activeChat ? "text-[14px] font-medium text-[#7E7E8D]" : "text-[16px] font-medium text-[#7E7E8D]"}>Unread</span>
                </li>
                <li className="flex flex-row hover:bg-red-100 gap-[2px] min-w-[50px] px-[20px] py-[4px] rounded-[15px] justify-center items-center">
                    <span className={activeChat ? "text-[14px] font-medium text-[#7E7E8D]" : "text-[16px] font-medium text-[#7E7E8D]"}>Archived</span>
                </li>
                <li className="flex flex-row hover:bg-red-100 gap-[2px] min-w-[50px] px-[20px] py-[4px] rounded-[15px] justify-center items-center">
                    <span className={activeChat ? "text-[14px] font-medium text-[#7E7E8D]" : "text-[16px] font-medium text-[#7E7E8D]"}>Group</span>
                </li>
                <li className="flex flex-row hover:bg-red-100 gap-[2px] min-w-[50px] px-[20px] py-[4px] rounded-[15px] justify-center items-center">
                    <span className={activeChat ? "text-[14px] font-medium text-[#7E7E8D]" : "text-[16px] font-medium text-[#7E7E8D]"}>Family</span>
                </li>
                
            </ul>
            <div className='w-[26px] h-[26px] bg-[#ECF1F4] flex justify-center rounded-[27px] p-[6px] items-center'>
                <img src={edit} className='w-[14px] h-[14px]'></img>
            </div>
        </section>
    )
}

export default ChatListNav2;