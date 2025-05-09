import {useRef } from "react"
import { useNavigate } from "react-router-dom"


function AddWords() {

    const navigate = useNavigate()

    const wordRef = useRef<HTMLInputElement>(null)
    const definitionRef = useRef<HTMLInputElement>(null)

    const addWord = () => {
        const newWord = {
            word: wordRef.current?.value,
            definition: definitionRef.current?.value
        }

        fetch("http://localhost:8080/words", {
            method: "POST",
            body: JSON.stringify(newWord),
            headers: {
                "Content-Type": "application/json"
            }
        })

        navigate("/")
    }


  return (
    <div>
        <label>Word</label> <br />
        <input ref={wordRef} type="text" /> <br />
        <label>Definition</label> <br />
        <input ref={definitionRef} type="text" /> <br />
        <button onClick={()=>addWord()}>Add word</button>
    </div>
  )
}

export default AddWords