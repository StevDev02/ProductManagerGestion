
import { useProducts } from "@/components/hooks/useProducts";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";


export function StepOne() {

    const { products, addProduct } = useProducts();

    return ( 
        <>
            <section className="">
                <h1 className="text-xl flex items-center gap-1 font-semibold p-2">Step One For Adding Products <span className="text-[#00000080] mt-0.5 font-semibold text-base">(Name, Price, Size)</span> </h1>
                <div className="w-[734px] flex flex-col items-start justify-center gap-4">
                    <div className="flex p-4 items-center justify-between w-[734px] bg-white shadow-sm h-[184px] border rounded-lg ">
                        <div className="flex flex-col items-start justify-start gap-2">
                            <h2 className="text-black font-semibold text-base">Product Id</h2>
                            <p className="text-[#505052] text-sm ">A unique identifier is required for each product.</p>
                            <Input className="w-[318px] border border-red-300 h-[34px] " 
                            disabled placeholder="Id of the product" />
                            <p className="text-xs text-red-300">The product ID will be generated automatically, due to <br /> security policies</p>
                        </div>
                        <div className="flex flex-col items-start justify-center gap-2">
                            <h2 className="text-black font-semibold text-base">Product Name</h2>
                            <p className="text-[#505052] text-sm ">We need each product to have its own name for when <br /> you want to place an order or manage it.</p>
                            <Input className="w-[318px] " 
                            name="title"
                            onChange={(e) => addProduct(e)}
                            type="text" placeholder="Name of the product" />
                        </div>
                    </div>
                    <div className="flex items-start justify-center gap-4">
                        <div className="w-[358px]  flex flex-col p-4 items-start justify-center h-[170px] bg-white shadow-sm border rounded-lg">
                            <h2 className="text-[#505052] font-semibold text-base">Product Price</h2>
                            <div>
                                <p className="font-medium text-4xl" >${products.price ?? 0}.00</p>
                                <p className="text-[#5050529a] text-[13px] ">The price varies depending on the product </p>
                            </div>
                            <input
                            name="price"
                            type="range" min="0" step="1" max="50" className="w-[300px] mt-4 border h-[7px] bg-[#d1d1d1] rounded-lg"
                            onChange={(e) => addProduct(e)}
                            value={products.price ?? 0}
                            />
                        </div>
                        <div className="w-[358px]  flex flex-col p-4 items-start justify-center h-[170px] bg-white shadow-sm border rounded-lg">
                            <h2 className="text-[#505052] font-semibold text-base">Product Size</h2>
                            <div>
                                <p className="font-medium text-xl" >Size of the product</p>
                                <p className="text-[#5050529a] text-[13px] ">Upsizing the product is important </p>
                            </div>
                            <Input className="w-[318px] mt-4" 
                            name="talla"
                            onChange={(e) => addProduct(e)}
                            type="text" placeholder="Size of the product" />
                        </div>
                    </div>
                </div>
                <div className="absolute translate-y-[-50%] bottom-[5%] flex place-content-center gap-8">
                    <Link to={'/ec/product-manager/add-product'} className="border border-[#eee] transition-all duration-300 shadow-md hover:scale-110 rounded-md py-1 px-10">Regresar</Link>
                    <Link to={'/ec/product-manager/get-started/step-2'} className="border border-[#eee] transition-all duration-300 shadow-md hover:scale-110 rounded-md py-1 px-10">Step 2</Link>
                </div>
            </section>
        </>
     )
}