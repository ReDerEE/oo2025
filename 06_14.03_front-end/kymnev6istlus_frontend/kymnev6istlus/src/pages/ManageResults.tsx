import { useEffect, useRef, useState } from "react";
import { Results } from "../models/Results";

function ManageResults() {


  const [result, setResult] = useState<Results[]>([])
  const hundredMeterRef = useRef<HTMLInputElement>(null)
  const longJumpRef = useRef<HTMLInputElement>(null)
  const shotPutRef = useRef<HTMLInputElement>(null)
  const highJumpRef = useRef<HTMLInputElement>(null)
  const fourHundredMeterRef = useRef<HTMLInputElement>(null)
  const hurdlesRef = useRef<HTMLInputElement>(null)
  const discThrowRef = useRef<HTMLInputElement>(null)
  const poleVaultRef = useRef<HTMLInputElement>(null)
  const javelinThrowRef = useRef<HTMLInputElement>(null)
  const oneFiveMeterRef = useRef<HTMLInputElement>(null)

 useEffect(() => {
  fetch("http://localhost:8080/results")
  .then(res=>res.json())
  .then(json=>setResult(json))
 }, []);

 const addResult = ()=>{
  const newResult = {
    hundredMeter:hundredMeterRef.current?.value,
    longJump:longJumpRef.current?.value,
    shotPut:shotPutRef.current?.value,
    highJump:highJumpRef.current?.value,
    fourHundredMeter:fourHundredMeterRef.current?.value,
    hurdles:hurdlesRef.current?.value,
    discThrow:discThrowRef.current?.value,
    poleVault:poleVaultRef.current?.value,
    javelinThrow:javelinThrowRef.current?.value,
    oneFiveMeter:oneFiveMeterRef.current?.value,
  }

  fetch("http://localhost:8080/results", {
    method: "POST",
    body: JSON.stringify(newResult),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res=>res.json())
  .then(json => {
    if(json.message === undefined && json.timestamp === undefined && json.status === undefined){
      setResult(json)
      // toast.success(nameRef.current?.value+" lisatud!")
      alert("Lisatud!")
    }
    if(hundredMeterRef.current && 
      longJumpRef.current &&
      shotPutRef.current &&
      highJumpRef.current &&
      fourHundredMeterRef.current &&
      hurdlesRef.current &&
      discThrowRef.current &&
      poleVaultRef.current &&
      javelinThrowRef.current &&
      oneFiveMeterRef.current){
          hundredMeterRef.current.value = ""
          longJumpRef.current.value = ""
          shotPutRef.current.value = ""
          highJumpRef.current.value = ""
          fourHundredMeterRef.current.value = ""
          hurdlesRef.current.value = ""
          discThrowRef.current.value= ""
          poleVaultRef.current.value = ""
          javelinThrowRef.current.value = ""
          oneFiveMeterRef.current.value = ""
       }
    else{
      alert(json.message)
    }
  })
 }


  return (
    <div>
      <h2>Result management</h2>
      <label>100-m run</label><br />
      <input type="number" ref={hundredMeterRef}/> <br />

      <label>Long jump</label><br />
      <input type="number" ref={longJumpRef}/> <br />

      <label>Shot put</label><br />
      <input type="number" ref={shotPutRef}/> <br />

      <label>High jump</label><br />
      <input type="number" ref={highJumpRef}/> <br />

      <label>400-m run</label><br />
      <input type="number" ref={fourHundredMeterRef}/> <br />

      <label>Hurdles</label><br />
      <input type="number" ref={hurdlesRef}/> <br />

      <label>Discus throw</label><br />
      <input type="number" ref={discThrowRef}/> <br />

      <label>Pole vault</label><br />
      <input type="number" ref={poleVaultRef}/> <br />

      <label>Javelin throw</label><br />
      <input type="number" ref={javelinThrowRef}/> <br />

      <label>1500m- run</label><br />
      <input type="number" ref={oneFiveMeterRef}/> <br />

      <button onClick={()=>addResult()}>Add</button>

       <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>100-m run</th>
          <th>Long jump</th>
          <th>Shot put</th>
          <th>High jump</th>
          <th>400-m run</th>
          <th>Hurdles</th>
          <th>Discus throw</th>
          <th>Pole vault</th>
          <th>Javelin throw</th>
          <th>1500-m run</th>
        </tr>
      </thead>
      <tbody>
        {result.map((result) => (
          <tr key={result.id}>
            <td>{result.id}</td>
            <td>{result.hundredMeter}</td>
            <td>{result.longJump}</td>
            <td>{result.shotPut}</td>
            <td>{result.highJump}</td>
            <td>{result.fourHundredMeter}</td>
            <td>{result.hurdles}</td>
            <td>{result.discThrow}</td>
            <td>{result.poleVault}</td>
            <td>{result.javelinThrow}</td>
            <td>{result.oneFiveMeter}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default ManageResults