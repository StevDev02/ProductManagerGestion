
import { useProducts } from "@/components/hooks/useProducts";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";


export function StepFive() {

    const { addProduct } = useProducts();

    return ( 
        <>
            <section className="">
                <h1 className="text-xl flex items-center gap-1 font-semibold p-2">Step Five For Adding Products <span className="text-[#00000080] mt-0.5 font-semibold text-base">(Style, Description, Type)</span> </h1>
                <div className="w-[734px] flex flex-col items-start justify-center gap-4">
                    <div className="flex p-4 items-center justify-between w-[734px] bg-white shadow-sm h-[184px] border rounded-lg ">
                        <div className="flex flex-col items-start justify-start gap-2">
                            <h2 className="text-black font-semibold text-base">Recommendation</h2>
                            <p className="text-[#505052] text-sm ">The types, the styles should be the same as the</p>
                            <p className="text-[#505052] text-sm ">categories one for a group of products</p>
                        </div>
                        <div className="flex flex-col items-start justify-center gap-2">
                            <h2 className="text-black font-semibold text-base">Product Style</h2>
                            <p className="text-[#505052] text-sm ">Remember to use a style for a group of products <br />to be able to create good filters.</p>
                            <Input className="w-[318px] " 
                            name="estilo"
                            onChange={(e) => addProduct(e)}
                            type="text" placeholder="Style of the product" />
                        </div>
                    </div>
                    <div className="flex items-start justify-center gap-4">
                        <div className="w-[358px]  flex flex-col p-4 items-start justify-center h-[170px] bg-white shadow-sm border rounded-lg">
                            <div className="flex flex-col items-start justify-center gap-2">
                                <h2 className="text-black font-semibold text-base">Product Type</h2>
                                <p className="text-[#505052] text-sm ">Remember to use a type for a group of products <br />to be able to create good filters.</p>
                                <Input className="w-[318px] " 
                                name="tipo"
                                onChange={(e) => addProduct(e)}
                                type="text" placeholder="Type of the product" />
                            </div>
                        </div>
                        <div className="w-[358px]  flex flex-col p-4 items-start justify-center h-[170px] bg-white shadow-sm border rounded-lg">
                            <div className="flex flex-col items-start justify-center gap-2">
                                <h2 className="text-black font-semibold text-base">Product description</h2>
                                <textarea className="w-[318px] resize-none border-[#eee] rounded-md p-2 shadow border h-[95px] " 
                                name="description"
                                onChange={(e) => addProduct(e)}
                                type="text" placeholder="Type of the product" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute translate-y-[-50%] bottom-[5%] flex place-content-center gap-8">
                    <Link to={'/ec/product-manager/add-product'} className="border border-[#eee] transition-all duration-300 shadow-md hover:scale-110 rounded-md py-1 px-10">Regresar</Link>
                    <Link to={'/ec/product-manager/get-started/step-4'} className="border border-[#eee] transition-all duration-300 shadow-md hover:scale-110 rounded-md py-1 px-10">Step 4</Link>
                    <Link to={'/ec/product-manager/get-started/step-finally'} className="border border-[#eee] transition-all duration-300 shadow-md hover:scale-110 rounded-md py-1 px-10">finally</Link>
                </div>
            </section>
        </>
     )
}