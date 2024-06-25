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


    const sendProducts = useCallback(async (e) => {
        e.preventDefault();
        setTimeout(() => {
            setLoading(true)
        }, 1000);
        const docRef = collection(db, "db-products");
        try {
            const image_one = products.image_one
            const image_two= products.image_two
            const imageUrlLinkOne = await uplodaImageToFirebaseStorage(image_one.file, image_one.name)
            const imageUrlLinkTwo = await uplodaImageToFirebaseStorage(image_two.file, image_two.name)
            console.log('success');
            const productData = { ...products, image_one: imageUrlLinkOne, image_two: imageUrlLinkTwo }; // Reemplazar el objeto File con la URL
            await addDoc(docRef, productData);
        } catch (error) {
            console.log('error', error)
        } finally {
            setLoading(false)
        }
    }, [products]);
    

    return {
        products,
        setProducts,
        addProduct,
        sendProducts,
        loading
    };
}
