import NewFeed from "./NewFeed";
import ChatList from "./ChatListPage";
import { useState } from "react";
import ChatBox from "./ChatBoxPage";
function Homepage (){

    const [activeChat, setActiveChat] = useState(false);

    const columnHandle =()=>{
        if(activeChat === true){
            return;
        }
        setActiveChat(!activeChat);
    }

    return(
        <section className={`grid ${activeChat ? "homepage_container" : " homepage_container_without_chat_room"}`}>
            <div>
                <NewFeed activeChat={activeChat}/>
            </div>
            <div >
                <ChatList activeChat={activeChat} columnHandle={columnHandle}/>
            </div>
            {activeChat &&(
                <div>
                     <ChatBox setActiveChat={setActiveChat}/>
                </div>
            )

            }
        </section>
    )
}

export default Homepage;