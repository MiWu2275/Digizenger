import React, { useRef } from 'react';
import john from '/images/john doe.jpg';
import active from '/images/active.jpg';
import mark from '/images/mark.jpg';
import publicIcon from '/images/public.png';

function Post() {
    const textareaRef = useRef(null);

    const handleInput = (e) => {
        const target = e.target;
        target.style.height = 'auto'; // Reset height
        target.style.height = `${target.scrollHeight}px`; // Set to scroll height
    };

    return (
        <section>
            <main className="flex flex-col items-center gap-[14px] p-[20px] rounded-[8px] self-stretch bg-white">
                <div className="flex flex-col items-center bg-white">
                    <div className="flex flex-col items-start  self-stretch">
                        <div className="flex items-start justify-between">
                            <div className="flex gap-[8px] w-[320px]">
                                <div className="w-[38px] h-[38px]">
                                    <img src={john} alt="John" />
                                    <img src={active} className='relative top-[-11px] left-6' alt="Active" />
                                </div>
                                <div className='flex flex-col items-start w-[250px]'>
                                    <div className='flex items-center h-[20px] gap-[8px]'>
                                        <span className='text-[14px] font-bold leading-8'>John Doe</span>
                                        <img src={mark} alt="Mark" />
                                    </div>
                                    <div className='text-[12px] h-auto w-full font-normal leading-8 text-[#7E7E8D]'>
                                        <textarea
                                            ref={textareaRef}
                                            placeholder="Share Your Thought"
                                            className='outline-none w-full resize-none'
                                            onInput={handleInput}
                                            style={{ overflow: 'hidden',  height: "30px" }} // Set minimum height
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center p-[8px_20px] items-center rounded-[8px] h-[36px] bg-[#0097A7]'>
                                <span>Post</span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 items-start'>
                            <div className='flex gap-[12px]'>
                                <div className='w-[32px] h-[14px]'></div>
                                <div className='flex gap-[4px] items-center'>
                                    <img src={publicIcon} className='w-[16px] h-[16px]' alt="Public Icon" />
                                    <span className='text-[14px] text-[#0097A7] font-medium leading-5'>Everyone</span>
                                </div>
                            </div>
                            <div className='flex gap-[12px] items-center'>
                                <div className='w-[32px] h-[14px]'></div>
                                <div className='flex gap-[10px]'>
                                    <span className='text-[13px] font-normal leading-5'>Trending Now</span>
                                    <div className='flex gap-[8px]'>
                                        <span className='text-[13px] text-[#0097A7]'>#appleevent</span>
                                        <span className='text-[13px] text-[#0097A7]'>#ipone16</span>
                                        <span className='text-[13px] text-[#0097A7]'>#myanmarwin</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
}

export default Post;
