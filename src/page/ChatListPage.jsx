import ChatListNav from "../components/ChatListNav";
import data from "../data";
import ChatLayout from "../components/ChatLayout";
import  {setChatList}  from "../feature/chatSlice";
import { useEffect } from "react";
import {useAppDispatch, useAppSelector} from '../hook/Hook.ts';
import {selectChatList} from "../feature/chatSlice";


function ChatList ({activeChat}) {
    const dispatch = useAppDispatch();

    const chatList = useAppSelector(selectChatList);

    useEffect(()=>{
        dispatch(setChatList(data))
    },[dispatch])

    return(
        <section>
            <div>
                <ChatListNav/>
                <div className="h-[768px] overflow-y-auto scrollable}">
                    {chatList.map((chat)=>{
                        console.log(chat);
                        return(
                        <ChatLayout key={chat.id} chat={chat} activeChat={activeChat}/>
                    )
                    })
                        
                    }
                </div>
               
            </div>
        </section>
    )
}

export default ChatList;