import NewFeedNav from "../components/NewFeedNav";
import MenuNav from "../components/MenuNav2";
import Post from "../components/Post";
import Banner from "../components/banner";

function NewFeed({activeChat}){
    return(
        <section>
            <NewFeedNav activeChat={activeChat}/>
            <MenuNav activeChat={activeChat}/>
            <div className="flex flex-col p-[20px] gap-[12px] w-full bg-[#ECF1F4]">
                <Post activeChat={activeChat}/>
                <Banner activeChat={activeChat}/>
            </div>
            
        </section>
    )
}

export default NewFeed;