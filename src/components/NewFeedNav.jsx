import logo from "/images/Digizenger2.png";

function NewFeedNav({activeChat}){

    return(
        <section className={activeChat ? "border-b h-[50px] border-[#ECF1F4] bg-white w-[449px] overflow-hidden z-10 fixed" : "border-b h-[50px] border-[#ECF1F4] bg-white w-[49.9%] overflow-hidden z-10 fixed"}>
            <div>
                <img src={logo} className={activeChat ? "w-[180px] ml-[2px]": " ml-[20px] w-[190px]"}/>
            </div>
        </section>
    )
}

export default NewFeedNav;