import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { Products } from "../models/Products";

function SingleProduct() {


    const{productId} = useParams();

    const [product, setProduct] = useState<Products>()
    // useParams peab ühtima URLis olevat id'd/muud parameetrit
    // Siin on productId (localhost:5173/product/1)

    useEffect(() => {
        fetch("http://localhost:8080/products/"+productId)
        .then(res => res.json())
        .then(json => setProduct(json))
    }, [productId]);

  return (
    <div>
        <div>Nimi: {product?.name}</div>
        <div>Hind: {product?.price}€</div>
        <div>Kategooria: {product?.category?.name}</div>
        <img src={product?.img} alt="" />
    </div>
  )
}

export default SingleProduct