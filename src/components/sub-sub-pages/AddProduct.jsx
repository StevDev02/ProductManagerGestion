import { FolderSimplePlus , User , CurrencyDollar , UserList , StackPlus, Confetti } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export function AddProduct() {
    return ( 
        <>
            <div className="w-full flex flex-col gap-4 pl-4 relative">
                <div className="flex gap-4">
                    <div className="w-[270px] flex flex-col justify-center gap-2 h-[136px] p-4 shadow-md rounded-md border ">
                        <div className="flex items-center justify-between">
                            <h2 className="text-[#343435] font-semibold text-base">Total Products</h2>
                            <StackPlus size={20} color="#424242" />
                        </div>
                        <div className="flex gap-4 items-center justify-between">
                            <p className="font-medium text-4xl" >+0</p>
                            <p className="text-[#5050529a] text-[13px] ">Added Products </p>
                        </div>
                        <div>
                            <p className="text-[#5050529a] text-[13px] ">Upsizing the product is important </p>
                        </div>
                    </div>
                    <div className="w-[270px] flex flex-col justify-center gap-2 h-[136px] p-4 shadow-md rounded-md border ">
                        <div className="flex items-center justify-between">
                            <h2 className="text-[#343435] font-semibold text-base">Total Subscriptions</h2>
                            <UserList  size={22} color="#424242" />
                        </div>
                        <div className="flex gap-4 items-center justify-between">
                            <p className="font-medium text-4xl" >+2350</p>
                            <p className="text-[#5050529a] text-[13px] ">Added Persons </p>
                        </div>
                        <div>
                            <p className="text-[#5050529a] text-[13px] ">+180.1% from last month</p>
                        </div>
                    </div>
                    <div className="w-[270px] flex flex-col justify-center gap-2 h-[136px] p-4 shadow-md rounded-md border ">
                        <div className="flex items-center justify-between">
                            <h2 className="text-[#343435] font-semibold text-base">Total Sales</h2>
                            <CurrencyDollar size={20} color="#424242" />
                        </div>
                        <div className="flex gap-4 items-center justify-between">
                            <p className="font-medium text-4xl" >+12,234</p>
                            <p className="text-[#5050529a] text-[13px] ">Added Sales</p>
                        </div>
                        <div>
                            <p className="text-[#5050529a] text-[13px] ">+19% from last month </p>
                        </div>
                    </div>
                    <div className="w-[184px] flex flex-col justify-center gap-2 h-[136px] p-4 shadow-md rounded-md border ">
                        <div className="flex items-center justify-between">
                            <h2 className="text-[#343435] font-semibold text-base">Total Persons</h2>
                            <User   size={20} color="#424242" />
                        </div>
                        <div className="flex gap-4 items-center justify-between">
                            <p className="font-medium text-4xl" >#1</p>
                            <p className="text-[#5050529a] text-[13px] ">StevDev</p>
                        </div>
                        <div>
                            <p className="text-[#5050529a] text-[13px] ">Only creator of this dashboard</p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-7 ">
                    <div
                    //poner como fondo una imagen
                    style={{backgroundImage: `url(https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`}}
                     className="w-[507px] p-4 relative h-[56vh] flex-col bg-center bg-no-repeat bg-cover shadow-md border rounded-md flex items-start justify-between  gap-2">
                        <Link to={'/ec/product-manager/tutorial'} className=" flex cursor-pointer -mt-3 gap-2 p-4 items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#ffffffb4" d="m4 10l-.707.707L2.586 10l.707-.707zm17 8a1 1 0 1 1-2 0zM8.293 15.707l-5-5l1.414-1.414l5 5zm-5-6.414l5-5l1.414 1.414l-5 5zM4 9h10v2H4zm17 7v2h-2v-2zm-7-7a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5z"/></svg>
                            <p className="z-20 text-[#ffffffb4] text-sm border-b border-[#ffffff36] ">Back to Tutorial</p>
                        </Link>
                        <div className=" flex -mt-3 flex-col p-4 items-start text-center">
                            <h2 className="z-20 text-white font-semibold text-base">Upload Image of the Product</h2>
                            <p className="z-20 text-[#ffffffbd] text-[13px] ">Easily upload files to your account with just a few clicks.</p>
                        </div>
                        <Link to={'/ec/product-manager/get-started/step-1'} className="left-[50%] bg-white top-[50%] pr-1 w-[150px] gap-2 h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer border -translate-x-[50%] -translate-y-[50%] absolute overflow-hidden shadow-md  text-[#424242]">
                            <FolderSimplePlus   size={24} color="#424242" />Add Product
                        </Link>
                    </div>
                    <div className="w-[507px] p-4 relative h-[56vh] flex-col bg-center bg-no-repeat bg-cover shadow-md border rounded-md flex items-start justify-between  gap-2">
                        <div className=" flex -mt-3 flex-col p-4 items-start text-center">
                            <h2 className="z-20 text-black font-semibold text-base">Take Advantage of Summer offers</h2>
                            <p className="z-20 text-[#0303038c] text-[13px] ">For a limited time take advantage of the offers for a 50% discount.</p>
                        </div>
                        
                        <Link to={'/ec/product-manager/get-started/step-1'} className="-right-16 bg-white -bottom-7 pr-1 w-[150px] gap-2 h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer border -translate-x-[50%] -translate-y-[50%] absolute overflow-hidden shadow-md  text-[#424242]">
                            <Confetti    size={24} color="#424242" />Apply Offer
                        </Link>
                    </div>
                </div>
            </div>
        </>
     )
}