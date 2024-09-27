import andrea from '/images/andrea.png';

function ChatBoxUserStatus(){
    return(
        <section>
            <div className="flex justify-between items-center bg-[#ECF1F4]">
               <div className="flex items-center gap-[12px]">
                    <img src={andrea} className='w-[40px] h-[40px] rounded-[50%]'/>

               </div>
               <div>

               </div>

            </div>
        </section>
    )
}

export default ChatBoxUserStatus;