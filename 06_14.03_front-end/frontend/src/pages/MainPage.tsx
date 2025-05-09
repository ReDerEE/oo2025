import { useCallback, useEffect,useRef,useState } from 'react'
import { Category } from '../models/Category'
import { Products } from '../models/Products'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

// React Hook (Reacti erikood)
// 1. peab importima
// 2. peab algama use eesliidesega
// 3. peab olema funktsionaalne - tõmban ta käima nii, et panen sulud lõppu
// 4. ei tohi olla tingimuslikult loodud (if sees)
// 5. ei tohi olla funktsioonide sees loodud

function MainPage() {

    //    muutuja - HTML   muudab muutujat + HTMLi   sulgude sees - algväärtus
const [kategooriad, setKategooriad] = useState<Category[]>([])
const [products, setProducts] = useState<Products[]>([])
const [productsByPage, setProdutsByPage] = useState(1)
const [page, setPage] = useState(0)
const [totalProducts, setTotalProducts]= useState(0)
const [activeCategory, setActiveCategory] = useState(-1)
const { t } = useTranslation()

const productsByPageRef = useRef<HTMLSelectElement>(null) // HTMLi inputiga/selectiga sidumiseks
                                                    //.current? ---> küsimärk tähendab, et TS näeb, et Ref alguses on null ehk tühi
                                                    // see tähendab, et tal on 2 väärtuse võimalust
                                                    //.current?.value ---> selle selecti väärtus, mis väljastab alati stringi
                                                    //Number() ---> Konverteerime selle .current.value väärtuse numbriks tagasi



  const [sort, setSort] = useState("id,asc")


// uef -> onload function
useEffect(() => {
  fetch("http://localhost:8080/products") // API otspunkt, kuhu läheb otspunkt
  .then(res=>res.json()) // kogu tagastus: headers, status coed jne
  .then(json=>setProducts(json)) // body: sisu, mida tagastab meile back-end
}, []);



useEffect(() => {
  fetch("http://localhost:8080/categories") // API otspunkt, kuhu läheb otspunkt
  .then(res=>res.json()) // kogu tagastus: headers, status code jne
  .then(json=>setKategooriad(json)) // body: sisu, mida tagastab meile back-end
}, []);


const showByCategory =  useCallback((categoryId: number, currentPage: number) => {
  setActiveCategory(categoryId)
  setPage(currentPage)
  fetch("http://localhost:8080/category-products?categoryId="+categoryId+
  "&size="+productsByPage+
  "&page="+currentPage+
  "&sort="+sort
  ) // API otspunkt, kuhu läheb otspunkt
  .then(res=>res.json()) // kogu tagastus: headers, status code jne
  .then(json=>{
    setProducts(json.content)
    setTotalProducts(json.totalElements)
  }) // body: sisu, mida tagastab meile back-end
}, [productsByPage, sort])

useEffect(() => {
  showByCategory(activeCategory, 0)
}, [showByCategory, activeCategory]);

function updatePage(newPage: number){
  
  showByCategory(activeCategory, newPage)//TODO: aktiivne kategooria
}



  return (
    <div>
      <button onClick={() => setSort("id,asc")}>Surteeri vanemad enne</button>
      <button onClick={() => setSort("id,desc")}>Surteeri uuemad enne</button>
      <button onClick={() => setSort("name,asc")}>Surteeri A-Z enne</button>
      <button onClick={() => setSort("name,desc")}>Surteeri Z-A enne</button>
      <button onClick={() => setSort("price,asc")}>Surteeri odavamad enne</button>
      <button onClick={() => setSort("price,desc")}>Surteeri kallimad enne</button>
      <br />
      <select ref={productsByPageRef} 
      onChange={() => setProdutsByPage(Number(productsByPageRef.current?.value)) }>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      <button onClick={()=>showByCategory(-1, 0)}>
        {t('home.all-categories')}
      </button>
      {kategooriad.map(kategooria =>
      <button key={kategooria.id} onClick={()=> showByCategory(kategooria.id, 0)}>
        {kategooria.name}
      </button>)}
        {/* <div key ={kategooria.id}>
            {kategooria.name} {kategooria.active}
            </div>)} */}
            <br/>
            <br/>
            <div>Kokku tooteid {totalProducts} tk</div>
            {products.map(product =>
                <div key={product.id}>
                    <div>{product.id}</div>
                    <div>{product.name}</div>
                    <div>{product.price}€</div>
                    <div>{product.img}</div>
                    <div>{product.category?.name}</div>
                    <Link to={"/product/"+product.id}>
                      <button>
                        Vaata lähemalt
                      </button>
                    </Link>
                    </div>)}
                  <button disabled={page === 0} onClick={()=>updatePage(page-1)}>Eelmine</button>
                  <span>{page+1}</span>
                  <button disabled={page === Math.ceil(totalProducts/productsByPage-1)} onClick={()=>updatePage(page+1)}>Järgmine</button>
    </div>
  )
}

export default MainPage