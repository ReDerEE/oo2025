import { useEffect, useRef, useState } from "react";
import { Category } from "../models/Category";
import { useNavigate, useParams } from "react-router-dom";
import { Products } from "../models/Products";
import { ToastContainer, toast } from "react-toastify";

function EditProduct() {
    const {productId} = useParams()
    const nameRef = useRef<HTMLInputElement>(null);
    const priceRef = useRef<HTMLInputElement>(null);
    const imageRef = useRef<HTMLInputElement>(null);
    const activeRef = useRef<HTMLInputElement>(null);
    const categoryRef = useRef<HTMLSelectElement>(null);
    const [categories, setCategories] = useState<Category[]>([])
    const [product, setProduct] = useState<Products>()
    const navigate = useNavigate()

    useEffect(() => {
      fetch("http://localhost:8080/categories")
          .then(res=>res.json())
          .then(json=> setCategories(json))
    }, []);

    useEffect(() => {
    fetch("http://localhost:8080/products/"+productId)
    .then(res=>res.json())
    .then(json=>setProduct(json))  
    }, [productId]);


    const editProduct = () => {
      const modifiedProduct = {
        id: productId,
        name: nameRef.current?.value,
        price: Number(priceRef.current?.value), // kui on numbriline väärtus, siis peaksin Number() ümber panema
        image: imageRef.current?.value,
        active: activeRef.current?.checked, // kui on checkbox, siis ei ole .value (muidu annab "on")
        category: {"id": Number(categoryRef.current?.value)}
      }

      fetch("http://localhost:8080/products", 
        {method: "PUT",
          body: JSON.stringify(modifiedProduct),
          headers: {
            "Content-Type":"application/json"
          }
        })
      .then(res=>res.json())
      .then(json=>{
        if(json.message && json.timestamp && json.status){
          // alert(json.message)
          toast.error(json.message)
        }
        else{
          navigate("/manage/products")
        }
      })
    }


  if(product===undefined){
    return(
      <div>
        Product not found
      </div>
    )
  }

  return (
    <div>

      <label>Name</label> <br />
      <input ref={nameRef} defaultValue={product?.name} type="text" /> <br />
      <label>Price</label> <br />
      <input ref={priceRef} defaultValue={product?.price} type="number" /> <br />
      <label>Image</label> <br />
      <input ref={imageRef} defaultValue={product?.img} type="text" /> <br />
      <label>Active</label> <br />
      <input ref={activeRef} defaultChecked={product?.active} type="checkbox" /> <br />
      <label>Category</label> <br />
      {/* <input ref={categoryRef} type="number" /> <br /> */}
      <select defaultValue={product?.category?.id} ref={categoryRef}>
      {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
      </select>
      <button onClick={() => editProduct()}>Edit product</button>
      <ToastContainer/>
    </div>
  )
}

export default EditProduct