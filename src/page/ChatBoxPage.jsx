import ChatBoxLayout from "../components/ChatBoxLayout";
import ChatBoxNav from "../components/ChatBoxNav";

function ChatBox ({setActiveChat}){
    return(
        <section>
            <ChatBoxNav setActiveChat={setActiveChat}/>
            <ChatBoxLayout/>
        </section>
        
    )
}

export default ChatBox;