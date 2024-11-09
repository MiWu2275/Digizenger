import andrea from '/images/andrea.png';
import mark from '/images/mark2.png';
import { PiPhone } from "react-icons/pi";
import { GoDeviceCameraVideo } from "react-icons/go";
import { HiOutlineDotsVertical } from "react-icons/hi";


function ChatBoxUserStatusNav({message}){
    return(
        <section className='absolute top-[3.2rem] px-[10px] bg-[#ECF1F4] w-[30.4%] z-20 chat-box-nav2-responsive'>
            <div className="flex justify-between items-center bg-[#ECF1F4]">
               <div className="flex items-center gap-[12px]">
                    <img src={andrea} className='w-[40px] h-[40px] rounded-[50%]'/>
                    <div className='flex flex-col items-start justify-center'>
                        <div className='flex items-center justify-center gap-[8px]'>
                            <span className='text-[#2C3E50] font-semibold text-[20px]'>Andrea</span>
                            <img src={mark} />
                        </div>
                        <span className='text-[#7E7E8D] text-[14px]'>Online 12m ago</span>

                    </div>

               </div>
               <div className='flex items-center justify-center gap-[20px]'>
                    <i className='text-[#0097A7]'><PiPhone  size={25}/></i>
                    <i className='text-[#0097A7]'><GoDeviceCameraVideo size={25}/></i>
                    <i className='text-[#0097A7]'><HiOutlineDotsVertical size={25}/></i>
               </div>

            </div>
        </section>
    )
}

export default ChatBoxUserStatusNav;