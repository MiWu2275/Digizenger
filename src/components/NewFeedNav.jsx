import logo from "/images/Digizenger2.png";

function NewFeedNav({activeChat}){

    return(
        <section className={activeChat ? "border-b-2 h-[50px] border-[#ECF1F4] bg-white w-[24.2%] overflow-hidden z-10 fixed logo-nav-small-screen" : "border-b h-[50px] border-[#ECF1F4] bg-white w-[36.7%] overflow-hidden z-10 absolute logo-nav-big-screen"}>
            <div>
                <img src={logo} className={activeChat ? "w-[180px] ml-[2px]": " ml-[20px] w-[190px]"}/>
            </div>
        </section>
    )
}

export default NewFeedNav;