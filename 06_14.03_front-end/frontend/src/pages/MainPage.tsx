import { useEffect,useState } from 'react'
import { Category } from '../models/Category'
import { Products } from '../models/Products'

function MainPage() {

    //    muutuja - HTML   muudab muutujat + HTMLi   sulgude sees - algväärtus
const [kategooriad, setKategooriad] = useState<Category[]>([])
const [products, setProducts] = useState<Products[]>([])

// uef -> onload function
useEffect(() => {
  fetch("http://localhost:8080/products") // API otspunkt, kuhu läheb otspunkt
  .then(res=>res.json()) // kogu tagastus: headers, status coed jne
  .then(json=>setProducts(json)) // body: sisu, mida tagastab meile back-end
}, []);

useEffect(() => {
  fetch("http://localhost:8080/categories") // API otspunkt, kuhu läheb otspunkt
  .then(res=>res.json()) // kogu tagastus: headers, status coed jne
  .then(json=>setKategooriad(json)) // body: sisu, mida tagastab meile back-end
}, []);
  return (
    <div>{kategooriad.map(kategooria =>
        <div key ={kategooria.id}>
            {kategooria.name} {kategooria.active}
            </div>)}
            <br/>
            <br/>
            {products.map(product =>
                <div key={product.id}>
                    <div>{product.id}</div>
                    <div>{product.name}</div>
                    <div>{product.price}</div>
                    <div>{product.img}</div>
                    <div>{product.category?.name}</div>
                    </div>)}
    </div>
  )
}

export default MainPage