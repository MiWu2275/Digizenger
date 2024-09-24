import { useAppDispatch, useAppSelector } from "../hook/Hook";
import { selectActiveChatRoom, selectChatList } from "../feature/chatSlice";

function ChatBoxLayout (){
    const activeChatRoom = useAppSelector(selectActiveChatRoom);
    const chatList = useAppSelector(selectChatList);

    const message = chatList.find((msg)=>msg.id === activeChatRoom)



    console.log(message);
    return(
        <section>
            {
                message.messages.map((text)=>{
                    return(
                    <span>{text.content}</span>
                    )
                })
            }

        </section>
    )
}

export default ChatBoxLayout;