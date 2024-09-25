import logo from "/images/Digizenger2.png";

function NewFeedNav({activeChat}){

    return(
        <section className="border-b-2 border-[#ECF1F4] bg-white w-full ">
            <div>
                <img src={logo} className={activeChat ? "w-[180px] ml-[2px]": " ml-[20px] w-[190px]"}/>
            </div>
        </section>
    )
}

export default NewFeedNav;