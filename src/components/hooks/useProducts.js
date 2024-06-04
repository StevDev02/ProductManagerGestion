import { useContext, useCallback, useState } from "react";
import { ProductsContext } from "../Context/Products";
import { db, uplodaImageToFirebaseStorage } from "@/Firebase/config";
import { collection, addDoc } from 'firebase/firestore';

export function useProducts() {
    const { products, setProducts } = useContext(ProductsContext);
    const [loading, setLoading] = useState(null);

    const addProduct = (e) => {
        const { name, value } = e.target;
        setProducts({ ...products, [name]: value });
    };

    const handleImageUrlChange = (e) => {
        const file = e.target.files[0];
        setProducts({
            ...products,
            imageUrl: {
                file,
                name: file.name
            }
        });
    };

    const sendProducts = useCallback(async (e) => {
        e.preventDefault();
        //que aparezca despues de 1 segundo
        setTimeout(() => {
            setLoading(true); // Aquí estableces el estado de loading como true antes de empezar el envío de productos
        }, 1000);
        const docRef = collection(db, "db-products");
        try {
            const imageUrl = products.imageUrl;
            const imageUrlLink = await uplodaImageToFirebaseStorage(imageUrl.file, imageUrl.name);
            console.log('success');
            const productData = { ...products, imageUrl: imageUrlLink }; // Reemplazar el objeto File con la URL
            await addDoc(docRef, productData);
        } catch (error) {
            console.log('error', error);
        } finally {
            setLoading(false); // Aquí vuelves a establecer el estado de loading como false después de terminar el envío de productos
        }
    }, [products]);
    

    return {
        products,
        setProducts,
        addProduct,
        handleImageUrlChange,
        sendProducts,
        loading
    };
}
