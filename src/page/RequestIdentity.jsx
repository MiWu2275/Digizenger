import { IoShieldCheckmark } from "react-icons/io5";
import {Link} from "react-router-dom"

function RequestIdentity (){
    return(
        <section className="flex justify-center mt-[30px]">
            <main className="text-center">
                <div>
                    <article>
                        <h1 className="text-[32px] font-semibold tracking-wide">Welcome aboard.</h1>
                        <h2 className="text-[32px] font-semibold tracking-wide">You're now a standard user. </h2>
                        <p className="whitespace-normal text-slate-400 tracking-wide">You have access to all our basic feature and can start <br/>exploring our platform right away.</p>
                    </article>
                    <Link to="/"><button className="w-[140px] p-[8px] mt-[20px] bg-[#0097A7] text-white text-[18px] font-bold tracking-wide rounded-[5px]">Explore Now</button></Link>
                </div>
                <div className="mt-[20px] mb-[10px] justify-self-center relative or">or</div>
                <div className="grid bg-[#F6FCFF] shadow-sm p-[20px]">
                    <i className="place-self-center mt-[20px] mb-[20px] text-[#00BCD4]"><IoShieldCheckmark size={50} /></i>
                    <article>
                        <h1 className="text-[32px] font-semibold">Want to unlock <span className="text-[#00BCD4]">more advanced <br></br>tool and exclusive feature?</span></h1>
                        <p className="text-slate-400 tracking-wide mt-[15px] mb-[15px]">You will gain access to a suit of advanced tool and <br></br> exclusive feature designed to enhance your <br></br> experience by verifying your identity.</p>
                    </article>
                    <button className="place-self-center w-[200px] p-[8px] mt-[20px] mb-[20px] bg-[#0097A7] text-white text-[18px] font-bold tracking-wide rounded-[8px]">Verify Your Identity</button>
                </div>
            </main>
        </section>
    )
}

export default RequestIdentity;