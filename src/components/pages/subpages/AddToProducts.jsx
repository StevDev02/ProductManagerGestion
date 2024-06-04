
import { Outlet } from "react-router-dom";

export function AddToProducts() {
    return ( 
        <>
            
            <section className="w-[100%] p-4 gap-4 bg-[#fbfbfb] h-[90vh] flex">
                    <Outlet />
            </section>
        </>
     )
}