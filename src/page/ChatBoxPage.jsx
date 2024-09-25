import ChatBoxLayout from "../components/ChatBoxLayout";
import ChatBoxNav from "../components/ChatBoxNav";

function ChatBox (){
    return(
        <section>
            <ChatBoxNav/>
            <ChatBoxLayout/>
        </section>
        
    )
}

export default ChatBox;