import NewFeedNav from "../components/NewFeedNav";
import MenuNav from "../components/MenuNav2";
import Post from "../components/Post";
import Banner from "../components/banner";

function NewFeed(){
    return(
        <section>
            <NewFeedNav/>
            <MenuNav/>
            <div className="flex flex-col p-[20px] gap-[12px] w-full bg-[#ECF1F4]">
                <Post/>
                <Banner/>
            </div>
            
        </section>
    )
}

export default NewFeed;