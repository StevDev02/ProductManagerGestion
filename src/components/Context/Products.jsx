import { createContext, useState } from "react"

export const ProductsContext = createContext()

export function ProductsProvider({ children }) {
    const [products, setProducts] = useState({
        category: "", //Listo
        clasificar: "", //Listo
        color: "", //Listo
        description: "", 
        estilo: "",
        image_one: "", //Listo
        image_two: "", //Listo
        price: 0, //Listo
        talla: "", //Listo
        tipo: "",
        title: "", //Listo
    })

    return (
        <ProductsContext.Provider value={{ 
            products, 
            setProducts}}>
            {children}
        </ProductsContext.Provider>
    )
}