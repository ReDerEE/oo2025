import { useState, useEffect, useRef } from "react"
import { Player } from "../models/Player"

function ManagePlayer() {


  const [athlete, setAthlete] = useState<Player[]>([])

  useEffect(() => {
    fetch("http://localhost:8080/player")
    .then(res=>res.json())
    .then(json=>setAthlete(json))  
  }, []);
  
  const nameRef = useRef<HTMLInputElement>(null)
  const countryRef = useRef<HTMLInputElement>(null)
  const ageRef = useRef<HTMLInputElement>(null)
  const activeRef = useRef<HTMLInputElement>(null)

  const addPlayer = () => {
      const newPlayer = {
        name: nameRef.current?.value,
        active: activeRef.current?.checked,
        age: ageRef.current?.value,
        country: countryRef.current?.value
      }
      
      fetch(`http://localhost:8080/player`, {
            method: "POST",
            body: JSON.stringify(newPlayer),
            headers: {
              "Content-Type": "application/json"
            }
          }).then(res=>res.json())
            .then(json=> {
              if(json.message === undefined && json.timestamp === undefined && json.status === undefined){
                setAthlete(json)
                // toast.success(nameRef.current?.value+" lisatud!")
                alert("Lisatud!")
                if(nameRef.current && activeRef.current && ageRef.current && countryRef.current) {
                  nameRef.current.value = ""
                  ageRef.current.value = ""
                  countryRef.current.value = ""
                  activeRef.current.checked = false
                }
              }
              else{
                alert(json.message)
                  // toast.error("Veateade \n"+json.message)

              }
            })
              
  }


  return (
    <div>
        <h2>Manage players</h2>
    <label>Name</label> <br />
    <input ref={nameRef} type="text" /> <br />
    <label>Age</label><br />
    <input type="number" ref={ageRef} /><br />
    <label>Country</label> <br />
    <input type="text" ref={countryRef} /> <br />
    <label>Active</label> <br />
    <input ref={activeRef} type="checkbox" /> <br />
    <button onClick={()=> addPlayer()}>Add</button>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Country</th>
          <th>Active</th>
          <th>Point ID</th>
        </tr>
      </thead>
      <tbody>
        {athlete.map((athlete) => (
          <tr key={athlete.id}>
            <td>{athlete.id}</td>
            <td>{athlete.name}</td>
            <td>{athlete.age}</td>
            <td>{athlete.country}</td>
            <td>{athlete.active ? "Yes" : "No"}</td>
            <td>{athlete.points?.id}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default ManagePlayer