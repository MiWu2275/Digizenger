import React,{useState} from "react";
import { RxCross2 } from "react-icons/rx";
import { LuPlus } from "react-icons/lu";
import { LuMenu } from "react-icons/lu";
import CustomizeCollection from './CustomizeCollection';

    const Collection = () => {
        const [isCollectionOpen, setIsCollectionOpen] = useState(true);
        const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);
        
        const handleOpenCustomize = () => {
            setIsCustomizeOpen(true);
            setIsCollectionOpen(false);
        };
      
        const handleCloseCollection = () => {
            setIsCustomizeOpen(false);
            setIsCollectionOpen(true);
        };
    
    return(
        <div>
        {isCollectionOpen && (
        <div className="w-[405px] h-[564.13px] bg-[#ECF1F4] rounded-lg flex flex-col items-center justify-center">
            <div className=" w-[365px] h-[19.13px] flex items-center justify-end">
            <RxCross2  onClick={() => setIsCollectionOpen(false)}  className=" w-[18px] h-[18px] text-[#2C3E50]"/>
            </div>
            <div className=" w-[365px] h-[505px] flex flex-col items-center justify-center">
                <div className=" w-[365px] h-[111px] flex flex-col items-center justify-center">
                    <label className=" w-[261px] h-[31px] font-bold text-[#0097A7] text-xl flex items-center justify-center ">Customize Collections</label>
                    <label className=" w-[365px] h-[72px] text-[#7E7E8D] text-sm flex items-center justify-center">You can manage your chat list into customized collections. Easily organize and access your conversations the way you prefer."</label>
                </div>
                <div  onClick={handleOpenCustomize} className="hover:bg-[#C9DCDE] rounded-md w-[193px] h-[40px] flex items-center justify-center mt-4 transition duration-200 ease-in-out">
                        <div className=" w-[20px] h-[20px] flex items-center justify-center">
                        <LuPlus className=" w-[18px] h-[18px] text-[#2C3E50]" />
                        </div>
                        <label className=" w-[145px] h-[24px] font-bold text-[#2C3E50] text-[15px] flex items-center justify-center ">Create Collections</label>
                </div>
                <div className=" w-[365px] h-[314px] rounded-lg bg-white flex flex-col items-center p-2 mt-8 ">
                {["All", "Read", "Unread", "Archived", "Groups", "Family", "School"].map((item, index) => (
                        <div 
                            key={index} 
                            className="w-[345px] h-[42px] flex items-center justify-between px-2 group hover:bg-gray-100 rounded-md"
                        >
                            <span className="w-[18px] h-[24px] text-[#2C3E50] text-sm">{item}</span>
                            <LuMenu className="w-[15px] h-[15px] text-[#2C3E50] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )}
     {isCustomizeOpen && (
        <CustomizeCollection 
          isOpen={isCustomizeOpen} 
          onClose={handleCloseCollection}
          />
      )}
</div>
    )
}

export default Collection;