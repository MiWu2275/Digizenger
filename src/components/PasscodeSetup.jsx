//import cross from '../../images/cross.png';
import { RxCross2 } from "react-icons/rx";
import logo from '../../images/logo.png';
function PasscodeSetup(){
    return(
        <div>
            <div className="bg-white w-[420px] h-[491.13px] rounded-lg p-20 border mt-6 ml-6 flex justify-center items-center relative">
                <div className=" w-[380px] h-[19.13px] p-3 gap-0 mx-auto absolute inset-0 m-auto mt-4  flex items-center justify-end">
                <RxCross2 className=" w-[13.13px] h-[13.13px] text-[#2C3E50]"/>
                </div>
                <div className=" bg-white w-[380px] h-[432px] flex flex-col  items-center absolute mt-5">
                   <div className=" bg-white w-[99px] h-[99px] flex justify-center ">
                    <img src={logo} alt="" />
                   </div>
                   <div className="mt-4 text-center">
                     <h3 className="text-[#0097A7] font-bold text-[24px]">Set up a Passcode to Protect Your Privacy</h3>
                     <p className="text-[#7E7E8D]">Create a 4-digit PIN code to enable Guard Mode. This passcode will help secure your messaging section, ensuring your privacy while you're away. Enter the code below to set up your protection.</p>
                   </div>
                   <div className=" bg-white w-[300px] h-[60px] grid grid-cols-4 gap-5 mt-4 ">
                    <input type="text" className="bg-[#ECF1F4] w-[60px] h-[60px] rounded-md border outline-none text-center hover:cursor-pointer" />
                    <input type="text" className="bg-[#ECF1F4] w-[60px] h-[60px] rounded-md border outline-none text-center hover:cursor-pointer" />
                    <input type="text" className="bg-[#ECF1F4] w-[60px] h-[60px] rounded-md border outline-none text-center hover:cursor-pointer" />
                    <input type="text" className="bg-[#ECF1F4] w-[60px] h-[60px] rounded-md border outline-none text-center hover:cursor-pointer" />
                   </div>

                   <div>
                        <button className="rounded-lg w-[380px] h-[47px] bg-[#0097A7] font-bold text-white mt-6 cursor-pointer">Save</button>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}
export default PasscodeSetup;