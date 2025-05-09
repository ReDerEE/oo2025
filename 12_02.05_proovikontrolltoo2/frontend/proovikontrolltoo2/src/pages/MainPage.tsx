import { useEffect, useState } from "react";
import { Words } from "../models/words";
import { Link } from "react-router-dom";


function MainPage() {
    const [words, setWords] = useState<Words[]>([])
    const [sort, setSort] = useState("asc")
    const [page, setPage] = useState(0)
    const [totalWords, setTotalWords] = useState(0)

    
    useEffect(() => {
        fetch("http://localhost:8080/pagedWords?sort=word,"+sort+
            "&page="+page+"&size=5")
        .then(res=>res.json())
        .then(json=>{setWords(json.content)
        setTotalWords(json.totalElements)
    })
    }, [sort, page]);


  return (
    <div>
        <button onClick={()=>setSort("asc")}>Sorteeri A-Z</button>
        <button onClick={()=>setSort("desc")}>Sorteeri Z-A</button> <br />
        <button disabled={page===0} onClick={()=>setPage(page-1)}>Tagasi</button>
        <>{page+1}</>
        <button disabled={page===Math.ceil(totalWords/5-1)} onClick={()=>setPage(page+1)}>Edasi</button> <br />

        <Link to={"addWords"}>
            <button>Lisa sõna</button>
            <br />
        </Link>
        
        {words.map(word=>
            <div key={word.id}>
                <div>{word.word}</div>
                {/* <div>{word.definition}</div> */}
                <Link to={"/words/"+word.id}>
                    <button>Vaata lähemalt</button>
                </Link>
                
                <br />
            </div>
        )}
    </div>
  )
}

export default MainPage