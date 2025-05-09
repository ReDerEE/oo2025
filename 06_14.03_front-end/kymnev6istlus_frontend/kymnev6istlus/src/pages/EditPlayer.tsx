import { useParams } from "react-router-dom"
import { useEffect, useRef, useState } from "react";
import { Player } from "../models/Player";
import { useNavigate } from "react-router-dom";

function EditPlayer() {
    const{playerId} = useParams();
    const nameRef = useRef<HTMLInputElement>(null)
    const ageRef = useRef<HTMLInputElement>(null)
    const countryRef = useRef<HTMLInputElement>(null)
    const activeRef = useRef<HTMLInputElement>(null)
    const [player, setPlayer] = useState<Player>()
    const navigate = useNavigate()

    const editPlayer = () =>{

    const modifiedPlayer = {
        id: playerId,
        name: nameRef.current?.value, // kui on numbriline väärtus, siis peaksin Number() ümber panema
        age: ageRef.current?.value,
        country: countryRef.current?.value,
        active: activeRef.current?.checked, // kui on checkbox, siis ei ole .value (muidu annab "on")
      }

      fetch("http://localhost:8080/player", 
        {method: "PUT",
          body: JSON.stringify(modifiedPlayer),
          headers: {
            "Content-Type":"application/json"
          }
        })
      .then(res=>res.json())
      .then(json=>{
        if(json.message && json.timestamp && json.status){
          // alert(json.message)
          alert(json.message)
        }
        else{
          navigate("/")
        }
      })
    }
    
    // useParams peab ühtima URLis olevat id'd/muud parameetrit
    // Siin on productId (localhost:5173/product/1)
    
    useEffect(() => {
        fetch("http://localhost:8080/player/"+playerId)
        .then(res => res.json())
        .then(json => setPlayer(json))
    }, [playerId]);


  return (
    <div>
        <label>Nimi</label><br />
        <input ref={nameRef} defaultValue={player?.name} type="text" /><br />
        <label>Vanus</label> <br />
        <input type="number" ref={ageRef} defaultValue={player?.age} /> <br />
        <label>Riik</label> <br />
        <input type="text" ref={countryRef} defaultValue={player?.country} /> <br />
        <label>Aktivne</label> <br />
        <input type="checkbox" ref={activeRef} defaultChecked={player?.active}/>  <br />
        <button onClick={() => editPlayer()}>Muuda</button>   
    </div>
  )
}

export default EditPlayer