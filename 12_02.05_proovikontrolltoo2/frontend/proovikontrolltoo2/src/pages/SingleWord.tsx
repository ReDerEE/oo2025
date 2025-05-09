import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Words } from "../models/words";

function SingleWord() {

    const navigate = useNavigate()

    const{wordId} = useParams()
    const [word, setWord] = useState<Words>()

    const wordRef = useRef<HTMLInputElement>(null)
    const definitionRef = useRef<HTMLInputElement>(null)

    const deleteWord = ()=>{
        fetch("http://localhost:8080/words/"+wordId, 
            {
                method: "DELETE"
            }
        )
        navigate("/")
    }


    const editWord = ()=>{
        const editedWord = {
            id: wordId,
            word: wordRef.current?.value,
            definition: definitionRef.current?.value
        }

        fetch("http://localhost:8080/words",
            {
                method: "PUT",
                body: JSON.stringify(editedWord),
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
        navigate("/")

    }


    useEffect(() => {
        fetch("http://localhost:8080/words/"+wordId)
        .then(res => res.json())
        .then(json => setWord(json))
    }, [wordId]);

  return (
    <div>
        <div key={word?.id}>
            <div>Sõna: {word?.word}</div>
            <div>Tähendus: {word?.definition}</div>
        </div>
        <div>
            <h1>Muuda sõna</h1>
            <label>Word</label> <br />
            <input ref={wordRef} defaultValue={word?.word} type="text" /> <br />
            <label>Definition</label> <br />
            <input ref={definitionRef} defaultValue={word?.definition} type="text" /> <br />
            <button onClick={()=>editWord()}>Muuda</button>
            <button onClick={()=>deleteWord()}>Kustuta</button>
        </div>
    </div>
  )
}

export default SingleWord