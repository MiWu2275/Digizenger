function ChatListSettings(activeChat){
    return(
        <section className={activeChat ?  "flex justify-between items-center flex-shrink-0 py-[4px] px-[25px] bg-white border border-[#ECF1F4] absolute w-[499px] h-[60px]" : "flex justify-between items-center flex-shrink-0 py-[4px] px-[25px] bg-white border-b border-[#ECF1F4] absolute w-[100%]"}>
            <div className="text-[28px] font-bold text-[#2C3E50]">
                Settings
            </div>
        </section>
    )
}
export default ChatListSettings;