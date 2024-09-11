import third from "../images/second image.png";
import third1 from "../images/second image2.png"
function ThirdPage (){
    return(
        <section className="mt-[8rem]">
            <div className="grid grid-cols-[40%_50%] gap-x-[60px] ml-[100px] ">
                <div className="grid grid-row">
                    <div className="justify-self-center">
                        <div className="mt-[100px]">
                            <span className="text-white text-[#FF0000] text-4xl font-semibold mr-[10px]">LEARN</span>
                            <span className="text-white text-4xl font-semibold">anywhere</span>
                        </div>
                        <div>
                            <h3 className="text-white text-4xl font-bold leading-7 mt-[20px] mb-[20px]"> <span className="text-[#FF0000]">MOBILE</span> | <span className="text-[#FF0000]">TABLET</span> | <span className="text-[#FF0000]">LAPTOP</span></h3>
                        </div>
                        <button className='bg-[#D00029] rounded-[10px] mt-[20px] p-[9px] w-[350px] font-semibold h-[44px] text-lg text-white justify-self-center'>Start With Free Lesson</button>
                    </div>
                </div>
                <div className="h-[30rem]">
                    <div className="pl-[4rem] py-[2rem] z-10 relative back_color">
                        <img src={third1} className="w-[80px] h-[200px] inline-flex mr-[1rem] mt-[30px] "></img>
                        <img src={third} className="w-[400px] h-[250px] inline-flex mt-[30px]"></img>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default ThirdPage;