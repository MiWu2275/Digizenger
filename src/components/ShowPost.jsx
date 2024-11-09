import badges from '/images/Badges.png';
import { HiDotsHorizontal } from "react-icons/hi";
import andrea from '/images/andrea.png';
import { GoHeartFill } from "react-icons/go";
import { PiHandPointingFill } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
//import { FiTrendingUp } from "react-icons/fi";
import { IoIosTrendingUp } from "react-icons/io";
import { useState } from 'react';
import { useGetPostQuery } from '../api/Post';

function ShowPost({activeChat}) {
    const [clickHeart, setClickHeart] =useState(true);


    const heartHandle = ()=>{
        setClickHeart(!clickHeart);
    }
    return(
        <>
            <div className="flex flex-col items-start justify-center rounded-[8px] bg-white ">
                <div className="flex flex-col items-start gap-[16px]">
                    <div className="flex flex-col items-start gap-[12px] p-[10px] self-stretch">
                        <div className={activeChat ? "flex justify-center items-center gap-[12px] self-stretch" : "flex justify-center items-center gap-[20px] self-stretch" }>
                            <div className='w-[48px] h-[48px]'>
                                <img src={andrea}/>
                            </div>
                            <div className="flex flex-col items-start justify-center gap-[8px] ">
                                <div className="flex justify-between items-center self-stretch">
                                    <div className={activeChat ? "flex items-center gap-[8px] w-[320px]" : "flex items-center gap-[8px] w-[500px]"}>
                                        <div className="flex gap-[2px] items-center">
                                            <span className="text-[20px] font-bold leading-7 text-[#2C3E50]">Andrea Yu</span>
                                            <img src={badges} className='w-[20px] h-[20px]'></img>
                                        </div>
                                        <div className='w-[4px] h-[4px]'>
                                        <i className='text-[#8C8CA1]'><GoDotFill size={8}/></i>
                                        </div>
                                        <div className='text-[#7E7E8D]'>4m</div>
                                    </div>
                                    <div>
                                    <i className='text-[#7E7E8D]'><HiDotsHorizontal size={20.25}/></i>
                                    </div>
                                </div>
                                <div className='flex items-center gap-[8px] self-stretch'>
                                    <div className='text-[14px] font-normal leading-5 text-[#7E7E8D]'>Verified User</div>
                                    <i className='text-[#8C8CA1]'><GoDotFill size={8}/></i>
                                    <div className='text-[14px] font-normal leading-5 text-[#7E7E8D]'>14K follower</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className={activeChat ? 'flex gap-[12px] self-stretch items-start' : 'flex gap-[20px] self-stretch items-start'}>
                                    <div className='w-[48px]'></div>

                                    <div className={activeChat ? 'w-[330px] text-[15px]  text-[#7E7E8D] font-normal leading-6 line-clamp-3 text-left text-ellipsis ' : 'w-[450px] text-[15px]  text-[#7E7E8D] font-normal leading-6 line-clamp-2 text-left text-ellipsis '}>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt alias dolorem corporis non labore vitae modi?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt alias dolorem corporis non labore vitae modi?
                                    </div>

                            </div>
                        </div>
                        <div className={ activeChat ? 'flex items-start gap-[12px] self-stretch' : 'flex items-start gap-[20px] self-stretch'}>
                            <div className='w-[48px] self-stretch'></div>

                            <div className='flex justify-between items-center flex-grow flex-shrink-0 basis-0 p-[2px]'>
                                <div className={activeChat ? 'flex items-center gap-[4px]' : 'flex items-center gap-[10px]'}>
                                <i className='text-[#FF5582]' onClick={heartHandle}><GoHeartFill  size={16}/></i>
                                    <div className='text-[14px] font-medium leading-5 text-[#7E7E8D]'>
                                        You and 1.2K others
                                    </div>
                                </div>
                                <div className='text-[14px] font-medium leading-5 text-[#7E7E8D]'>
                                    428 Flicks
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={activeChat ? 'flex items-start gap-[14px] self-stretch mb-[10px]': 'flex items-start gap-[24px] self-stretch mb-[10px]'}>

                        <div className='w-[55px] self-stretch'></div>

                        <div className='flex justify-between items-start flex-grow flex-shrink-0 basis-0'>
                            <div className='flex w-[96px] h-[28px] items-center gap-[8px]'>
                                {clickHeart ? (<i className='text-[#C9DCDE]' onClick={heartHandle}><GoHeartFill  size={24.5}/></i>) : 
                                
                               ( <i className='text-[#C9DCDE]' onClick={heartHandle}><GoHeartFill  size={16}/></i>)
                                }
                                <span className='text-[14px] font-medium  leading-4 text-[#2C3E50]'>Love</span>
                            </div>
                           
                            <div className='flex w-[96px] h-[28px] items-center gap-[8px]'>
                            <i className='text-[#C9DCDE]' onClick={heartHandle}><PiHandPointingFill size={24.5} /></i>
                                <span className='text-[14px] font-medium leading-4 text-[#2C3E50]'>Flick</span>
                            </div>
                            
                            <div className='flex w-[96px] h-[28px] items-center gap-[8px]'>
                                <i className='text-[#C9DCDE]' onClick={heartHandle}><IoIosTrendingUp size={24.5} /></i>
                                <span className='text-[14px] font-medium leading-4 text-[#2C3E50]'>views</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ShowPost;