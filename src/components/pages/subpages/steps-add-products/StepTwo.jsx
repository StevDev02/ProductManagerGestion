import { useProducts } from "@/components/hooks/useProducts";
import { Input } from "@/components/ui/input";
import { SketchPicker } from 'react-color';
import { Link } from "react-router-dom";

function PickedColor({ addProduct, products }) {
    const handleChangeComplete = (color) => {
        addProduct({
            target: {
                name: 'color',
                value: color.hex
            }
        });
    };

    return (
        <SketchPicker
            name="color"
            className="h-[318px]"
            color={products.color ?? '#fff'}
            onChangeComplete={handleChangeComplete}
        />
    );
}


export function StepTwo() {
    const { products, addProduct } = useProducts();

    return (
        <>
            <section className="">
                <h1 className="text-xl ml-2 flex items-center gap-1 font-semibold p-2">Step Two For Adding Products <span className="text-[#00000080] mt-0.5 font-semibold text-base">(Category, Sub-Category, Color)</span> </h1>
                <div className="w-[734px] flex items-start justify-center gap-4">
                    <div className="flex flex-col gap-4">
                        <div className="w-[358px] gap-3  flex flex-col p-4 items-start justify-center h-[170px] bg-white shadow-sm border rounded-lg">
                            <h2 className="text-[#000000d2] font-semibold text-lg">Select a Category</h2>
                            <div>
                                <p className="text-[#5050529a] text-[13px] ">Select the main product category</p>
                                <p className="text-[#00000094] font-semibold text-base">Category</p>
                            </div>
                            <Input className="w-[318px] -mt-2 "
                                name="category"
                                onChange={(e) => addProduct(e)}
                                type="text" placeholder="Enter a category" />
                        </div>

                        <div className="w-[358px] gap-3  flex flex-col p-4 items-start justify-center h-[170px] bg-white shadow-sm border rounded-lg">
                            <h2 className="text-[#000000d2] font-semibold text-lg">Select a classify</h2>
                            <div>
                                <p className="text-[#5050529a] text-[13px] ">Select the main product classify</p>
                                <p className="text-[#00000094] font-semibold text-base">classify: nuevo, popular, descuento</p>
                            </div>
                            <Input className="w-[318px] -mt-2 "
                                name="clasificar"
                                onChange={(e) => addProduct(e)}
                                type="text" placeholder="Enter a category" />
                        </div>
                    </div>

                    <div className="w-[338px] gap-3 items-center  flex flex-col p-4 h-[415px] bg-white shadow-sm border rounded-lg">
                        <h2 className="text-[#000000d2] font-semibold text-lg">Select a Color</h2>
                        <p className="text-[#5050529a] -mt-3 text-[13px] ">select shoe color</p>
                        <PickedColor addProduct={addProduct} products={products} />
                    </div>
                </div>
                <div className="absolute translate-y-[-50%] bottom-[5%] flex place-content-center gap-8">
                    <Link to={'/ec/product-manager/add-product'} className="border border-[#eee] transition-all duration-300 shadow-md hover:scale-110 rounded-md py-1 px-10">Regresar</Link>
                    <Link to={'/ec/product-manager/get-started/step-1'} className="border border-[#eee] transition-all duration-300 shadow-md hover:scale-110 rounded-md py-1 px-10">Step 1</Link>
                    <Link to={'/ec/product-manager/get-started/step-3'} className="border border-[#eee] transition-all duration-300 shadow-md hover:scale-110 rounded-md py-1 px-10">Step 3</Link>
                </div>
            </section>
        </>
    )
}
