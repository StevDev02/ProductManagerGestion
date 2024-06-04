import { ClockCounterClockwise, SkipForwardCircle  } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export function TutorialAddProducts() {
    return ( 
        <>
            <div className="w-full relative">
                    <div className="w-[974px] p-4 relativel h-[86vh] flex-col shadow-md border rounded-md flex items-start justify-between  gap-2">
                        <video
                        autoPlay
                        muted
                        loop
                        className="w-full container absolute rounded-md top-0 -left-12 h-[86vh]" 
                        // poster="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        src="/video/video-tutorial.mp4"></video>
                        <div className=" flex cursor-pointer -mt-3 gap-2 p-4 items-start justify-center">
                            <ClockCounterClockwise className="z-20" size={24} color="#fff" />
                            <p className="z-20 text-[#fff] text-sm border-b border-[#fafafa] ">Easily upload files to your account with just a few clicks.</p>
                        </div>
                        <div className=" flex -mt-3 flex-col p-4 items-start justify-center">
                            <h2 className="z-20 text-black font-semibold text-base">Upload Image of the Product</h2>
                            <p className="z-20 text-[#000] text-[13px] ">Easily upload files to your account with just a few clicks.</p>
                        </div>
                        <Link to={'/ec/product-manager/add-product'} className="-right-14 bg-white -bottom-6 pr-1 w-[150px] gap-2 h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer border -translate-x-[50%] -translate-y-[50%] absolute overflow-hidden shadow-md  text-[#424242]">
                            <SkipForwardCircle  size={26} color="#424242" />    Skip Tutorial
                        </Link>
                    </div>
            </div>
        </>
     )
}