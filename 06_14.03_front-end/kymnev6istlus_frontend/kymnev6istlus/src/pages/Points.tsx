import { useEffect,useState } from 'react'
import { Points } from "../models/Points";






function PointPage(){

    const [punktid, setPoints] = useState<Points[]>([])


    useEffect(() => {
        fetch("http://localhost:8080/points") // API otspunkt, kuhu läheb otspunkt
        .then(res=>res.json()) // kogu tagastus: headers, status coed jne
        .then(json=>setPoints(json)) // body: sisu, mida tagastab meile back-end
    }, []);

    return (
        <div>
            
            {punktid.map(punktid=>
                <div key={punktid.id}>
                    <div>Id: {punktid.id}</div>
                    <div>100-meetri jooks: {Math.floor(punktid.hundredMeter)}</div>
                    <div>Kaughüpe: {Math.floor(punktid.longJump)}</div>
                    <div>Kuulitõuge: {Math.floor(punktid.shotPut)}</div>
                    <div>Kõrghüpe: {Math.floor(punktid.highJump)}</div>
                    <div>400-meetri jooks: {Math.floor(punktid.fourHundredMeter)}</div>
                    <div>Tõkkejooks: {Math.floor(punktid.hurdles)}</div>
                    <div>Kettaheid: {Math.floor(punktid.discThrow)}</div>
                    <div>Teivashüpe: {Math.floor(punktid.poleVault)}</div>
                    <div>Hambahorgivise: {Math.floor(punktid.javelinThrow)}</div>
                    <div>1,5km jooks: {Math.floor(punktid.oneFiveMeter)}</div>
                    <div>Kokku: {Math.floor(punktid.sumPoints)}</div>
                    <br />


                </div>

                )}
                
    </div>
    )
}

export default PointPage