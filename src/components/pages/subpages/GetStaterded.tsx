import { ProductsProvider } from "@/components/Context/Products";
import { BreadcrumbWithCustomSeparator } from "@/components/components-ui/Beamcrum";
import { PaginationDemoAddProducts } from "@/components/components-ui/PaginationAddProducts";
import { TabInformationProducts } from "@/components/components-ui/TabInformationProducts";
import { Outlet } from "react-router-dom";


export function GetStaterded() {
    
    return ( 
        <>
            <section className="w-full p-4 gap-4 bg-[#fbfbfb] h-[90vh] flex">
                    <div className="flex flex-col gap-4">
                        <BreadcrumbWithCustomSeparator/>
                        <form>
                            <ProductsProvider>
                                <Outlet /> 
                            </ProductsProvider>
                        </form>
                    </div>
                    <div className="w-[305px] h-[83vh] bg-white shadow-sm border rounded-lg ">
                        <TabInformationProducts />
                    </div>
                    <footer className="absolute top-[95%] left-5 -translate-y-[50%]">
                        <PaginationDemoAddProducts />
                    </footer>
            </section>
        </>
     )
}