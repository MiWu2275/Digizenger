import HomeLogo from "/images/home.png";
import Postcast from "/images/Postcast.png";
import Digizen from "/images/digizen.png";
import Profile from "/images/profile.png";
function MenuNav({activeChat}){
    return(
        <section className={activeChat ?"p-[15px] w-[449px] z-20 bg-white fixed top-[50px]" : "px-[20px] py-[15px] z-20 bg-white fixed w-[50%] top-[50px]"}>
            <ul className="flex flex-row w-full flex-wrap justify-start gap-[4px]">
                <li className="flex flex-row hover:bg-red-100 gap-1 min-w-[50px] py-[8px] px-[18px] rounded-[20px] justify-center items-center">
                    <img className={activeChat ? "w-[15px] h-[15px]" : "w-[20px] h-[20px]"} src={HomeLogo} />
                    <span className={activeChat ? "text-[12px] font-medium text-[#2C3E50]" : "text-[16px] font-bold text-[#2C3E50]"}>Home</span>
                </li>

                <li className="flex flex-row hover:bg-red-100 gap-1 py-[8px] px-[18px] rounded-[20px] items-center  ">
                    <img className={activeChat ? "w-[15px] h-[15px]" : "w-[20px] h-[20px]"} src={Postcast} />
                    <span className={activeChat ? "text-[12px] font-medium text-[#2C3E50] leading-[21px]" : "text-[16px] font-bold text-[#2C3E50]"}>Postcasts</span>
                </li>

                <li className="flex flex-row hover:bg-red-100 gap-1 py-[8px] px-[18px] rounded-[20px] items-center">
                    <img className={activeChat ? "w-[15px] h-[15px]" : "w-[20px] h-[20px]"} src={Digizen} />
                    <span className={activeChat ? "text-[12px] font-medium text-[#2C3E50]" : "text-[16px] font-bold text-[#2C3E50]"}>Digizens</span>
                </li>

                <li className="flex flex-row hover:bg-red-100 gap-1 py-[8px] px-[18px] rounded-[20px] items-center">
                    <img className={activeChat ? "w-[15px] h-[15px]" : "w-[20px] h-[20px]"} src={Profile} />
                    <span className={activeChat ? "text-[12px] font-medium text-[#2C3E50]" : "text-[16px] font-bold text-[#2C3E50]"}    >Profile</span>
                </li>

            </ul>
        </section>
    )
}

export default MenuNav;