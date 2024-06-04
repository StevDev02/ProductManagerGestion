import { useProducts } from "@/components/hooks/useProducts";
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle, ShoppingCartSimple } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function AlertSucces() {
    return ( 
        <>
            <div
            className="bg-green-100 bottom-0 -right-44 absolute -translate-x-[50%] -translate-y-[50%] z-50 w-[400px] h-[70px] border-s-4 border-green-500 p-4 dark:bg-green-800/30" role="alert">
                <div className="flex">
                <div className="flex-shrink-0">
                    <span className="inline-flex justify-center items-center size-8 rounded-full border-4 border-green-100 bg-green-200 text-green-800 dark:border-green-900 dark:bg-green-800 dark:text-green-400">
                        <CheckCircle size={24} color="#34ad5e" />
                    </span>
                </div>
                <div className="ms-3">
                    <h3 className="text-gray-800 font-semibold dark:text-white">
                    Succefull
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-neutral-400">
                    the product has been stored correctly
                    </p>
                </div>
                </div>
            </div>
        </>
     )
}

export function FinallySteps() {
    const { sendProducts, loading } = useProducts();
    return ( 
        <>
            <section
            style={{ opacity: loading ? 0 : 1 }}
            className="opacity-10">
            <h1 className="text-xl flex items-center gap-1 font-semibold p-2">Final Step For Adding Products <span className="text-[#00000080] mt-0.5 font-semibold text-base">(Accept Policies, Send Data)</span> </h1>
                <div className="w-[741px] h-[380px] flex-col bg-white shadow-md border rounded-md flex items-start justify-center gap-2">
                        <div className=" flex -mt-3 flex-col p-4 items-start justify-center">
                        <h2 className="text-black font-semibold text-base">Upload Image of the Product</h2>
                        <div>
                            <p className="text-[#5050529a] text-[13px] ">Welcome to our product data upload service for your eCommerce website. Please,</p>
                            <p className="text-[#5050529a] text-[13px] ">Please take a moment to carefully review the terms and conditions governing your use of this</p>
                            <p className="text-[#5050529a] text-[13px] ">service. By using our product data upload service, you agree to comply and be</p>
                            <p className="text-[#5050529a] text-[13px] ">subject to these terms and conditions.</p>
                            <p className="text-black font-semibold text-base">Service description</p>
                            <p className="text-[#5050529a] text-[13px] ">Our product data upload service allows you to submit and upload</p>
                            <p className="text-[#5050529a] text-[13px] ">información sobre sus productos en su eCommerce web. </p>
                            <p className="text-black font-semibold text-base">Data Ownership</p>
                            <p className="text-[#5050529a] text-[13px]">You retain ownership of all data and information you provide</p>
                            <p className="text-[#5050529a] text-[13px] ">para su carga en su eCommerce web. </p>
                            <br />
                            <p className="text-[#5050529a] text-[13px] ">By using our product data upload service, you acknowledge that you have read, understood and</p>
                            <p className="text-[#5050529a] text-[13px] ">accepted these terms and conditions in full.</p>
                        </div>
                        <br />
                        <div className="flex items-center gap-2">
                            <Checkbox/>
                            <p className="text-[#505052fb] text-sm">I have read and agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></p>
                        </div>
                    </div>
                </div>
                <button
                    onClick={sendProducts}
                className=" w-[150px] gap-2 h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer top-[79%] left-[54%] border -translate-y-[50%] absolute overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full hover:before:left-0  text-[#000]">
                    <ShoppingCartSimple size={24} color="#000" />    Send Data
                </button>
            </section>


            {loading ? 
            <div className="top-[50%] left-[36%] absolute -translate-x-[50%] -translate-y-[50%]" >
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><circle cx="12" cy="2" r="0" fill="currentColor"><animate attributeName="r" begin="0" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(45 12 12)"><animate attributeName="r" begin="0.125s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(90 12 12)"><animate attributeName="r" begin="0.25s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(135 12 12)"><animate attributeName="r" begin="0.375s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(180 12 12)"><animate attributeName="r" begin="0.5s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(225 12 12)"><animate attributeName="r" begin="0.625s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(270 12 12)"><animate attributeName="r" begin="0.75s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle><circle cx="12" cy="2" r="0" fill="currentColor" transform="rotate(315 12 12)"><animate attributeName="r" begin="0.875s" calcMode="spline" dur="1s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"/></circle></svg>
            </div> 
            : 
            <p></p>}
            
            
            {loading ? <AlertSucces  /> : <p></p>}
            <Link to={'/ec/product-manager/add-product/step-finally'} className="absolute z-10 hover:border hover:border-[#00000033] hover:rounded-md top-[95%] left-[26%]  bg-transparent -translate-y-[50%] w-20 h-9 "></Link>
        </>
     )
}