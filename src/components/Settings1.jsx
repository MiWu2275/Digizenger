import johndoe1 from '/images/john doe.jpg';
import { BiQr } from "react-icons/bi";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { PiCaretRightLight } from "react-icons/pi";
import { PiBellFill } from "react-icons/pi";
import { PiDevicesFill } from "react-icons/pi";
import { PiLockKeyFill } from "react-icons/pi";
import { PiMoonFill } from "react-icons/pi";
import { IoLogOut } from "react-icons/io5";
import { PiFileTextFill } from "react-icons/pi";
import PersonalDetails from '/images/PersonalDetails.png';
import OnlineStatus from '/images/OnlineStatus.png';
import GetHelp from '/images/GetHelp.png';
import GuardianMode from '/images/GuardianMode.png';
import { useState } from 'react';

function Settings1(){
     const [isGuardModeOn, setIsGuardModeOn] = useState(false);
     const handleToggle = () => {
         setIsGuardModeOn(!isGuardModeOn);
     };
return(
<div className=' w-[501px] h-[810px]   bg-[#FBFCFD]'>
    <div className=' w-[498px] h-[745px] flex flex-col justify-start items-center gap-2  bg-[#FBFCFD]'>
        <div className='mt-4 w-[498px] h-[80px]  bg-[#FBFCFD] flex items-center justify-center'>
             {/* User Name */}
             <div className=' w-[498px] h-[80px] gap-12 flex flex-col justify-center items-center'>
                <div className="border border-[#ECF1F4] flex items-center justify-center bg-white w-[461px] h-[80px] rounded-lg hover:bg-[#ECF1F4] transition-colors duration-300 shadow-sm">
                    <div className=' w-[429px] h-[60px] flex items-center justify-between'>
                        <img src={johndoe1} className="w-[60px] h-[60px] rounded-full "></img>
                        <div className=' w-[357px] h-[39px] flex justify-between'>
                            <div className=' w-[113px] h-[39px] flex flex-col justify-center'>
                                <div className=' w-[113px] h-[20px] flex items-center'>
                                    <div className=' w-[113px] h-[20px] flex items-center'>
                                        <div className=' w-[91px] h-[14px] flex items-center'>
                                            <span className='text-[#2C3E50] font-bold text-[19px]'>John Doe</span>
                                        </div>
                                        <div className=' w-[20px] h-[20px] flex items-center justify-center'>
                                            <i className='text-[#7c3aed]'><HiMiniCheckBadge size={20}  /></i>
                                        </div>
                                    </div>
                                </div>
                                <div className=' w-[77px] h-[11px] flex items-center justify-center m-1'>
                                        <span className='text-[#7E7E8D] text-[14px]'>@johndoe</span>
                                </div>
                            </div>
                                <div className='flex items-center justify-center w-[38px] h-[38px] rounded-md hover:bg-[#C9DCDE] hover:scale-[1.02]'>
                                    <i className=" text-[#7E7E8D] hover:text-[#2C3E50]"><BiQr size={30}  /></i>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className=' w-[498px] h-[356px]  bg-[#FBFCFD] flex items-center justify-center'>
            {/* Action Button */}
            <div className=' w-[498px] h-[356px] gap-16 flex flex-col items-center absolute'>
                <div className="absolute border border-[#ECF1F4] flex flex-col justify-center w-[458px] h-[356px]  items-center bg-white rounded-lg">
                    <div className="group">   
                        <div className='bg-white hover:bg-[#ECF1F4] rounded-md w-[446px] h-[44px] flex justify-between items-center p-3 hover:scale-[1.01]'>
                            <div className='w-[153px] h-[24px] flex justify-between items-center'>
                                <div className=' w-[24px] h-[24px] bg-[#00BCD4] rounded-lg flex items-center justify-center'>
                                    <img src={PersonalDetails} alt="" />
                                </div>
                                <div  className=' w-[117px] h-[24px] flex items-center'>
                                    <span className='text-[#2C3E50] font-medium text-[15px]'>Personal details</span>
                                </div>
                            </div>
                            <div className=' w-[16px] h-[16px] flex items-center'>
                                <i className='text-[#7E7E8D]'><PiCaretRightLight  size={16}/></i>
                            </div>
                        </div>
                    <div className='border-b border-transparent group-hover:border-[#ECF1F4] w-[426px] h-[0px] text-[#ECF1F4A3] m-2'></div>
                    </div>

                        <div className='bg-white hover:bg-[#ECF1F4] rounded-md w-[446px] h-[44px] flex items-center p-3 hover:scale-[1.01]'>
                            <div className=' w-[426px] h-[24px] flex justify-between'>
                                <div className=' w-[134px] h-[24px] flex justify-between items-center'>
                                    <div className=' w-[24px] h-[24px] bg-[#00BA00] rounded-lg flex items-center justify-center'>
                                        <img src={OnlineStatus} alt="" />
                                    </div>
                                    <div className=' w-[98px] h-[24px] flex items-center'>
                                        <span className='text-[#2C3E50] font-medium text-[15px]'>Online status</span>
                                    </div>
                                </div>
                                <div className=' w-[219px] h-[24px] flex justify-end items-center'>
                                    <div className=' w-[22px] h-[24px] flex items-center'>
                                        <span className='text-[#7E7E8D] font-normal text-[15px]'>On</span>
                                    </div>
                                    <div className=' w-[16px] h-[16px] flex items-center'>
                                        <i className='text-[#7E7E8D]'><PiCaretRightLight  size={16}/></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <div className='border-b border-[#ECF1F4] w-[426px] h-[0px] text-[#ECF1F4A3] m-2'></div>
                    <div className='bg-white hover:bg-[#ECF1F4] rounded-lg  w-[446px] h-[44px] flex items-center p-3 hover:scale-[1.01]'>
                        <div className=' w-[426px] h-[24px] flex justify-between items-center'>
                            <div className=' w-[204px] h-[24px] flex justify-between items-center'>
                                <div className=' w-[24px] h-[24px] bg-[#FF227A] rounded-lg flex items-center justify-center'>
                                    <i className='text-[white] '><PiBellFill  size={16}/></i>
                                </div>
                                <div className=' w-[168px] h-[24px] flex items-center'>
                                    <span className='text-[#2C3E50] font-medium text-[15px]'>Notification and sound</span>
                                </div>
                            </div>
                            <div className=' w-[16px] h-[16px] flex items-center'>
                            <i className='text-[#7E7E8D]'><PiCaretRightLight  size={16}/></i>
                            </div>
                        </div>
                    </div>
                    <div className='hover:border-b border-[#ECF1F4] w-[426px] h-[0px] text-[#ECF1F4A3] m-2'></div>
                    <div className='bg-white hover:bg-[#ECF1F4] rounded-md  w-[446px] h-[44px] flex items-center p-3 hover:scale-[1.01]'>
                        <div className=' w-[426px] h-[24px] flex justify-between items-center'>
                            <div className=' w-[95px] h-[24px] flex justify-between items-center'>
                                <div className=' w-[24px] h-[24px]  bg-[#FFAA54] rounded-lg flex items-center justify-center'>
                                    <i className='text-[white] '><PiDevicesFill  size={16}/></i>
                                </div>
                                <div className=' w-[59px] h-[24px] flex items-center'>
                                    <span className='text-[#2C3E50] font-medium text-[15px]'>Devices</span>
                                </div>
                            </div>
                            <div className=' w-[219px] h-[24px] flex justify-end items-center'>
                                 <div className=' w-[10px] h-[24px]'>
                                    <span className='text-[#7E7E8D] font-medium text-[15px]'>3</span>
                                 </div>
                                <div className=' w-[16px] h-[16px] flex items-center'>
                                    <i className='text-[#7E7E8D]'><PiCaretRightLight  size={16}/></i>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className='border-b border-[#ECF1F4] w-[426px] h-[0px] text-[#ECF1F4A3] m-2'></div>
                        <div className='bg-white hover:bg-[#ECF1F4] rounded-md  w-[446px] h-[44px] flex items-center p-3 hover:scale-[1.01]'>
                            <div className=' w-[426px] h-[24px] flex justify-between items-center'>
                                <div className=' w-[187px] h-[24px] flex justify-between items-center'>
                                    <div className=' w-[24px] h-[24px]  bg-[#7E7E8D] rounded-lg flex items-center justify-center'>
                                        <i className='text-[white]'><PiLockKeyFill  size={16}/></i>
                                    </div>
                                    <div className=' w-[151px] h-[24px] flex items-center'>
                                        <span className='text-[#2C3E50] font-medium text-[15px]'>Privacy and security</span>
                                    </div>
                                </div>
                                <div className=' w-[16px] h-[16px] flex items-center'>
                                    <i className='text-[#7E7E8D]'><PiCaretRightLight  size={16}/></i>
                                </div>
                            </div>
                        </div>
                <div className="group">
                    <div className='border-b border-transparent group-hover:border-[#ECF1F4] w-[426px] h-[0px] text-[#ECF1F4A3] m-2'></div>
                        <div className='bg-white hover:bg-[#ECF1F4] rounded-md w-[446px] h-[44px]  flex items-center p-3 hover:scale-[1.01]'>
                            <div className=' w-[426px] h-[24px] flex justify-between items-center'>
                                    <div className=' w-[117px] h-[24px] flex justify-between items-center'>
                                        <div className=' w-[24px] h-[24px]  bg-[#434445] rounded-lg flex items-center justify-center'>
                                            <i className='text-[white]'><PiMoonFill  size={16}/></i>
                                        </div>
                                        <div className=' w-[81px] h-[24px] flex items-center'>
                                            <span className='text-[#2C3E50] font-medium text-[15px]'>Dark mode</span>
                                        </div>
                                    </div>
                                    <div className=' w-[44px] h-[24px] flex items-center justify-center'>
                                        <div className={`w-10 h-6 relative cursor-pointer rounded-[22px] shadow-inner transition-colors duration-300 ${isGuardModeOn ? 'bg-[#00BCD4]' : 'bg-[#c9dcde]'}`} onClick={handleToggle}>
                                            <div className={`w-5 h-5 absolute top-[2px] rounded-full bg-white transition-all duration-300 ${isGuardModeOn ? 'left-[23px]' : 'left-[2px]'}`}></div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>

        <div className=' w-[498px] h-[56px]  bg-[#FBFCFD] flex items-center justify-center'>
            {/* Guardian Mode */}
                <div className=' w-[498px] h-[56px] gap-16 flex flex-col items-center absolute'>
                    <div className='absolute border border-[#ECF1F4] flex flex-col justify-center w-[458px] h-[56px]  items-center  bg-[white] rounded-lg'>
                        <div className='bg-white hover:bg-[#ECF1F4] rounded-md  w-[446px] h-[44px] flex items-center p-3 hover:scale-[1.01]'>
                            <div className=' w-[426px] h-[24px] flex justify-between items-center'>
                                <div className=' w-[151px] h-[24px] flex items-center justify-between'>
                                    <div className=' w-[24px] h-[24px]  bg-[#00BA00] rounded-lg flex items-center justify-center'>
                                        <img src={GuardianMode} alt="" />
                                    </div>
                                    <div className='w-[115px] h-[24px]  '>
                                        <span className='text-[#2C3E50] font-medium text-[15px]'>Guardian mode</span>
                                    </div>
                                </div>
                                <div className=' w-[219px] h-[24px] flex justify-end items-center'>
                                    <div className=' w-[16px] h-[16px] flex items-center'>
                                        <i className='text-[#7E7E8D]'><PiCaretRightLight  size={16}/></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>      
            <div className=' w-[498px] h-[116px]  bg-[#FBFCFD] flex items-center justify-center'>
                {/* Get Help & Legal Information */}
                    <div className='border border-[#ECF1F4] w-[458px] h-[116px] bg-[white] rounded-lg flex flex-col items-center justify-center '>
                        <div className='bg-white hover:bg-[#ECF1F4] rounded-md  w-[446px] h-[44px] flex items-center justify-center p-3 hover:scale-[1.01]'>
                            <div className=' w-[426px] h-[24px] flex items-center justify-between'>
                                <div className=' w-[100px] h-[24px] flex items-center justify-between'>
                                    <div className=' w-[24px] h-[24px] bg-[#3795FF] rounded-lg flex items-center justify-center'>
                                        <img src={GetHelp} alt="" />
                                    </div>
                                    <div className=' w-[64px] h-[24px]'>
                                        <span className='text-[#2C3E50] font-medium text-[15px]'>Get help</span>
                                    </div>
                                </div>
                                    <div className=' w-[219px] h-[16px] flex items-center justify-end'>
                                        <div className=' w-[16px] h-[16px] flex items-center'>
                                            <i className='text-[#7E7E8D]'><PiCaretRightLight  size={16}/></i>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className='border-b border-[#ECF1F4] w-[426px] h-[0px] m-2'></div>
                            <div className='bg-white hover:bg-[#ECF1F4] rounded-md  w-[446px] h-[44px] flex items-center justify-center p-3 hover:scale-[1.01]'>
                                <div className=' w-[426px] h-[24px] flex items-center justify-between'>
                                    <div className=' w-[164px] h-[24px] flex items-center justify-between'>
                                        <div className='w-[24px] h-[24px] bg-[#A08DFF] rounded-lg flex items-center justify-center'>
                                            <i className='text-[white] '><PiFileTextFill  size={16}/></i>
                                        </div>
                                        <div className='w-[128px] h-[24px]'>
                                            <span className='text-[#2C3E50] font-medium text-[15px]'>Legal information</span>
                                        </div>
                                    </div>
                                    <div className='w-[16px] h-[16px] flex items-center'>
                                        <i className='text-[#7E7E8D]'><PiCaretRightLight  size={16}/></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className=' w-[498px] h-[56px] bg-[#FBFCFD] flex items-center justify-center'>
                    {/* Log out */}
                    <div className='border border-[#ECF1F4] w-[458px] h-[56px] bg-[white] rounded-lg flex flex-col items-center justify-center '>
                        <div className='bg-white hover:bg-[#ECF1F4] rounded-md w-[446px] h-[44px] flex items-center justify-center p-3 hover:scale-[1.01]'>
                                <div className='w-[426px] h-[24px] flex items-center justify-center'>
                                    <div className='w-[92px] h-[24px] flex items-center justify-between'>
                                        <div className='w-[24px] h-[24px] bg-[#F04343] rounded-lg flex items-center justify-center'>
                                            <i className='text-[white] '><IoLogOut  size={16}/></i>
                                        </div>
                                        <div className='w-[56px] h-[24px]'>
                                            <span className='text-[#2C3E50] font-normal text-[15px]'>Log out</span>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                    <div className=' w-[146px] h-[21px] bg-[#FBFCFD] flex items-center justify-center'>
                        {/* Footer */}
                        <span className='text-[#7E7E8D] font-normal text-[14px]'>Digizenger Web v1.0.0</span>
                    </div>
                </div>
            </div>
)
}
export default Settings1;