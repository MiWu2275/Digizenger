import NewFeed from "./NewFeed";
import ChatList from "./ChatListPage";
import { useState } from "react";
function Homepage (){

    const [activeChat, setActiveChat] = useState(false);

    const columnHandle =()=>{
        setActiveChat(!activeChat);
    }

    return(
        <section className={`grid ${activeChat ? "homepage_container" : " homepage_container_without_chat_room"}`}>
            <div>
                <NewFeed activeChat={activeChat}/>
            </div>
            <div onClick={columnHandle}>
                <ChatList activeChat={activeChat}/>
            </div>
            {activeChat &&(
                <div>
                     <h1 className="bg-black text-[32px] font-semibold tracking-wide text-[#00BCD4]">Welcome To Digizenger</h1>
                </div>
            )

            }
        </section>
    )
}

export default Homepage;