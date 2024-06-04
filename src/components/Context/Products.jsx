import { createContext, useState } from "react"

export const ProductsContext = createContext()

export function ProductsProvider({ children }) {
    const [products, setProducts] = useState({
        nombre: "",
        precio: 0,
        talla: 0,
        categoria: "",
        subcategoria: "",
        color: "",
        imageUrl: "",
        new: false,
        popular: false
    })

    return (
        <ProductsContext.Provider value={{ 
            products, 
            setProducts}}>
            {children}
        </ProductsContext.Provider>
    )
}