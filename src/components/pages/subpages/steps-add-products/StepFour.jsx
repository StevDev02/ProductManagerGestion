import { Images } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { useProducts } from "@/components/hooks/useProducts";

function UploadImageForTheProduct() {

    const { products, setProducts } = useProducts();

      const handleImageUrlChange = (e) => {
        const file = e.target.files[0];
        setProducts({
            ...products,
            image_two: {
                file,
                name: file.name
            }
        });
    };

    return ( 
        <>
            <div className="flex flex-col gap-y-4 -mt-2 items-start pl-4 justify-center w-full">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-[700px] h-52 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-transparent  hover:bg-gray-50   ">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input
                    name="image_two"
                    id="dropzone-file" 
                    onChange={handleImageUrlChange}
                    type="file" className="hidden" />
                </label>
                    { products.image_two && <div className="flex items-center justify-center gap-10">
                    <div className="w-[309px] relative items-center p-2 gap-2 rounded-lg flex border h-[67px] ">
                        <div className="w-[60px] h-[46px] border rounded-md ">
                            <img className="container border rounded-md" src={products.image_two.url} alt="" />
                        </div>
                        <div>
                            <p className="text-base font-semibold" >{products.image_two.name}</p>
                            <p className="text-sm text-[#0000009a]  " > {products.image_two.size}.KB</p>
                        </div>
                        <Images className="absolute translate-x-[50%] right-6 " size={24} color="#787878" />
                    </div>
                </div>}
            </div> 
        </>
     )
}
export function StepFour() {
    return ( 
        <>
            <section className="">
            <h1 className="text-xl flex items-center gap-1 font-semibold p-2">Step Three For Adding Products Image One <span className="text-[#00000080] mt-0.5 font-semibold text-base">(Image, Is New, Is Popular)</span> </h1>
                <div className="w-[741px] h-[380px] flex-col bg-white shadow-md border rounded-md flex items-start justify-center gap-2">
                    <div className=" flex -mt-3 flex-col p-4 items-start justify-center">
                        <h2 className="text-black font-semibold text-base">Upload Image of the Product</h2>
                        <div>
                            <p className="text-[#5050529a] text-[13px] ">Easily upload files to your account with just a few clicks.</p>
                        </div>
                    </div>
                    <UploadImageForTheProduct />
                </div>
                <div className="absolute translate-y-[-50%] bottom-[5%] flex place-content-center gap-8">
                    <Link to={'/ec/product-manager/add-product'} className="border border-[#eee] transition-all duration-300 shadow-md hover:scale-110 rounded-md py-1 px-10">Regresar</Link>
                    <Link to={'/ec/product-manager/get-started/step-3'} className="border border-[#eee] transition-all duration-300 shadow-md hover:scale-110 rounded-md py-1 px-10">Step 3</Link>
                    <Link to={'/ec/product-manager/get-started/step-5'} className="border border-[#eee] transition-all duration-300 shadow-md hover:scale-110 rounded-md py-1 px-10">Step 5</Link>
                </div>
            </section>
        </>
     )
}