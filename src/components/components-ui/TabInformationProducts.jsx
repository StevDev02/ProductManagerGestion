import { ShoppingCart , NotePencil } from "@phosphor-icons/react";

function IconsIDProducts() {
    return ( 
        <>
            <div className="absolute left-[84%] top-[49%] flex gap-1 -translate-x-[50%] -translate-y-[50%] ">
                <button className="rounded-md flex items-center justify-center w-[42px] bg-white shadow-sm border h-[33px] "><ShoppingCart  size={20}/></button>
                <button className="rounded-md flex items-center justify-center w-[42px] bg-white shadow-sm border h-[33px] "><NotePencil size={20}/></button>
            </div>
        </>
     )
}

export function TabInformationProducts() {
    return ( 
        <>
            <div className="bg-[#f9f9fa] border-b border-[#00000011] relative flex items-start justify-center flex-col p-6 w-[303px] h-[100px] ">
                <IconsIDProducts />
                <h2 className="text-[17px] font-semibold">Product Id:</h2>
                <p className="text-[17px] -mt-1 flex-wrap font-semibold">Oe31b70HOOe31b70HO</p>
                <p className="text-sm mt-2 text-[#909098] ">Date: November 23, 2023</p>
            </div>
            <div className="p-6 w-[308px] flex flex-col  gap-2 justify-center">
                <h2 className=" font-semibold">Order Details</h2>
                    <p className="text-center font-medium">Tacon Rojo - Sabata</p>
                <div className="flex items-start justify-between gap-4">
                    <p className="text-[#7f7f88]  ">Product Price: </p>
                    <p className="text-[#000000c9]  ">$20.00</p>
                </div>
                <div className="flex items-start justify-between gap-4">
                    <p className="text-[#7f7f88]  ">Product Size: </p>
                    <p className="text-[#000000c9]  ">#17</p>
                </div>
            </div>
            <hr className="w-[248px] ml-7 h-[1.2px]  " />

            <div className="p-6 w-[308px] flex flex-col -mt-3  gap-2 justify-center">
                <div className="flex items-start justify-between gap-4">
                    <p className="text-[#7f7f88]  ">Category: </p>
                    <p className="text-[#000000c9]  ">Tacones</p>
                </div>
                <div className="flex items-start justify-between gap-4">
                    <p className="text-[#7f7f88]  ">SubCategory: </p>
                    <p className="text-[#000000c9]  ">Taco Alto</p>
                </div>
            </div>

            <hr className="w-[248px] ml-7 h-[1.2px]  " />

            <div className="p-6 w-[308px] flex flex-col -mt-3 gap-2 justify-center">
                <div className="flex items-start justify-between gap-4">
                    <p className="text-[#7f7f88]  ">Popular: </p>
                    <p className="text-[#000000c9]  ">No</p>
                </div>
                <div className="flex items-start justify-between gap-4">
                    <p className="text-[#7f7f88]  ">New: </p>
                    <p className="text-[#000000c9]  ">Si</p>
                </div>
            </div>

            <hr className="w-[248px] -mt-3 ml-7 h-[1.2px]  " />

            <div className="p-6 w-[308px] flex flex-col -mt-3 gap-2 justify-center">
                <div className="flex items-start justify-between gap-4">
                    <p className="text-[#7f7f88]  ">Color: </p>
                    <div className="rounded-full w-[24px] bg-[#ecbbba] shadow-sm border h-[24px] " />
                </div>
            </div>
        </>
     )
}