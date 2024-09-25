import { useAppDispatch, useAppSelector } from "../hook/Hook";
import { selectActiveChatRoom, selectChatList } from "../feature/chatSlice";
import andrea from '/images/andrea.png';
import { PiChatTeardropFill } from "react-icons/pi";
import { VscTriangleUp } from "react-icons/vsc";
function ChatBoxLayout (){
    const activeChatRoom = useAppSelector(selectActiveChatRoom);
    const chatList = useAppSelector(selectChatList);

    const message = chatList.find((msg)=>msg.id === activeChatRoom)



    console.log(message);
    return(
        <section className="flex flex-col items-start  pb-[100px] pt-[20px] chat-bg px-[20px] gap-[20px] relative">
            {
                message.messages.map((text)=>{
                    return(
                        <main className={`flex flex-col w-full ${text.sender === "server" ? "sender" : "user"}`}>
                            <div className="chat-msg-container">
                                {text.sender === "server" && (
                                <div className="w-[40px] h-[40px]">
                                    <img src={andrea} alt="User Avatar" />
                                </div>
                                )}

                                <div className="fled flex-col px-[16px] py-[4px] bg-[#ECF1F4] rounded-[12px] relative">
                                    <div className="text-[#2C3E50] text-[16px] font-normal"><span>{text.content}</span></div>
                                    <div className={`text-right text-[12px] text-[#2C3E50] ${text.sender === "user" ? "mr-[5px]" : ""}`}><span>{text.timestamp}</span></div>
                                    <div className={`absolute top-4 ${text.sender === "user" ? "right-[-15px]" : "left-[-11px]"}`}><i className=" text-[#ECF1F4]"><VscTriangleUp size={50}/></i></div>
                                </div>

                                {text.sender === "user" && (
                                    ""
                                )}
                            </div> 
                            
                        
                        </main>
                    )
                })
            }

        </section>
    )
}

export default ChatBoxLayout;


