import second from "../images/second.png";
function SecondPage (){
    return(
        <section className="mt-[8rem]">
            <div className="grid grid-cols-[50%_40%] gap-x-[50px] ml-[130px] ">
                <div>
                    <img src={second} className="w-[500px] h-[350px]"></img>
                </div>
                <div className="grid grid-row">
                    <div className="self-center justify-self-center">
                        <div className="mt-[45px]">
                            <span className=" text-[#FF0000] text-4xl font-semibold mr-[10px]">FREE</span>
                            <span className="text-white text-4xl font-semibold">LESSONS</span>
                        </div>
                        <button className='bg-[#D00029] rounded-[10px] mt-[20px] p-[9px] w-[350px] font-semibold h-[44px] text-lg text-white justify-self-center'>Start With Free Lesson</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SecondPage;