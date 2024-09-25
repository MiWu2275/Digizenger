import magnifying from "/images/magnifying.png";
import john from '/images/john doe.jpg';

function ChatBoxNav({setActiveChat}) {

    const closeActiveChat =() =>{
        setActiveChat(false);
        console.log("hi")
    }
    return(
            <section className="flex  items-center gap-[10px] px-[10px] bg-white border-b border-[#ECF1F4]">
                <div className="flex flex-col relative w-[350px]">
                    <input type="text" className="rounded-[16px] py-[5px]"></input>
                    <div className="flex items-center gap-[10px] absolute top-[5px] left-[4px]">
                        <img src={magnifying} className="w-[24px] h-[24px]" />
                        <span className="text-[16px] text-[#8C8CA1] font-normal leading-6">Digisearch</span>
                    </div>  
                </div>
                <div className="flex items-center justify-center px-[14px] gap-[12px]" onClick={closeActiveChat}>
                    <img src={john} className="w-[40px] h-[40px]"></img>
                    <div className="flex flex-col gap-[2px]">
                        <span className="text-[16px] font-bold leading-7 text-[#2C3E50]">John Doe</span>
                        <span className="text-[10px] font-normal leading-5">Standard User</span>

                    </div>

                </div>

        </section>
    )
}

export default ChatBoxNav