import { Images } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { useProducts } from "@/components/hooks/useProducts";

function UploadImageForTheProduct() {

    const { products, setProducts } = useProducts();

    const handlePopularChange = (e) => {
        setProducts({
          ...products,
          popular: e.target.checked // Cambia a true si está marcado, false si está desmarcado
        });
      };

      const handleNewChange = (e) => {
        setProducts({
          ...products,
          new: e.target.checked // Cambia a true si está marcado, false si está desmarcado
        });
      };

      const handleImageUrlChange = (e) => {
        const file = e.target.files[0];
        setProducts({
            ...products,
            imageUrl: {
                file, // Guarda el archivo
                name: file.name // Guarda el nombre del archivo
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
                    name="imageUrl"
                    id="dropzone-file" 
                    onChange={handleImageUrlChange}
                    type="file" className="hidden" />
                </label>
                    { products.imageUrl && <div className="flex items-center justify-center gap-10">
                    <div className="w-[309px] relative items-center p-2 gap-2 rounded-lg flex border h-[67px] ">
                        <div className="w-[60px] h-[46px] border rounded-md ">
                            <img className="container border rounded-md" src={products.imageUrl.url} alt="" />
                        </div>
                        <div>
                            <p className="text-base font-semibold" >{products.imageUrl.name}</p>
                            <p className="text-sm text-[#0000009a]  " > {products.imageUrl.size}.KB</p>
                        </div>
                        <Images className="absolute translate-x-[50%] right-6 " size={24} color="#787878" />
                    </div>
                    <div className="w-[359px] relative items-center p-2 gap-8 rounded-lg flex h-[67px] ">
                        <div className="w-[179px] relative items-center p-2 gap-4 rounded-lg flex border h-[47px] ">
                            <h2 className="text-black font-semibold text-sm">Is a New Product?</h2>
                            <input
                            type="checkbox"
                            onChange={handleNewChange}
                                checked={products.new} // Marcar/desmarcar según el estado de 'new'
                            name="new"
                            />
                        </div>
                        <div className="w-[179px] relative items-center p-2 gap-2 rounded-lg flex border h-[47px] ">
                            <h2 className="text-black font-semibold text-sm">Is a Popular Product?</h2>
                            <input
                                type="checkbox"
                                onChange={handlePopularChange}
                                checked={products.popular} // Marcar/desmarcar según el estado de 'popular'
                                name="popular"
                            />
                        </div>
                    </div>
                </div>}
            </div> 
        </>
     )
}
export function StepThree() {
    return ( 
        <>
            <section className="">
            <h1 className="text-xl flex items-center gap-1 font-semibold p-2">Step Three For Adding Products <span className="text-[#00000080] mt-0.5 font-semibold text-base">(Image, Is New, Is Popular)</span> </h1>
                <div className="w-[741px] h-[380px] flex-col bg-white shadow-md border rounded-md flex items-start justify-center gap-2">
                    <div className=" flex -mt-3 flex-col p-4 items-start justify-center">
                        <h2 className="text-black font-semibold text-base">Upload Image of the Product</h2>
                        <div>
                            <p className="text-[#5050529a] text-[13px] ">Easily upload files to your account with just a few clicks.</p>
                        </div>
                    </div>
                    <UploadImageForTheProduct />
                </div>
            </section>
            <Link to={'/ec/product-manager/get-started/step-finally'} className="absolute z-10 hover:border hover:border-[#00000033] hover:rounded-md top-[95%] left-[26%]  bg-transparent -translate-y-[50%] w-20 h-9 "></Link>
            <Link to={'/ec/product-manager/get-started/step-finally'} className="absolute z-10 hover:border hover:border-[#00000033] hover:rounded-md top-[95%] left-[22.2%]  bg-transparent -translate-y-[50%] w-9 h-9 "></Link>
        </>
     )
}