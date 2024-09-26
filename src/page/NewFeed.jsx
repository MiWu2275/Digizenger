import NewFeedNav from "../components/NewFeedNav";
import MenuNav from "../components/MenuNav2";
import Post from "../components/Post";
import Banner from "../components/banner";
import ShowPost from "../components/ShowPost";

function NewFeed({activeChat}){
    return(
        <section>
            <NewFeedNav activeChat={activeChat}/>
            <MenuNav activeChat={activeChat}/>
            <div className="flex flex-col p-[20px] gap-[12px] w-full bg-[#ECF1F4] h-[690px] overflow-y-auto scrollable">
                <Post activeChat={activeChat}/>
                <Banner activeChat={activeChat}/>
                <ShowPost activeChat={activeChat}/>
                <ShowPost activeChat={activeChat}/>
                <ShowPost activeChat={activeChat}/>
            </div>
            
        </section>
    )
}

export default NewFeed;