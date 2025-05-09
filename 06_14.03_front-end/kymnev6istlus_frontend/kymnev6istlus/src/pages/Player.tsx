import { useEffect,useState } from 'react'
import { Player } from '../models/Player'


function PlayerPage(){
    const [athlete, setPlayer] = useState<Player[]>([])


    useEffect(() => {
        fetch("http://localhost:8080/player") // API otspunkt, kuhu läheb otspunkt
        .then(res=>res.json()) // kogu tagastus: headers, status coed jne
        .then(json=>setPlayer(json)) // body: sisu, mida tagastab meile back-end
    }, []);


    return(
        <div>
            {athlete.map(athlete =>
                <div key={athlete.id}>
                    <div>Id: {athlete.id}</div>
                    <div>Nimi: {athlete.name}</div>
                    <div>Riik: {athlete.country}</div>
                    <div>Vanus: {athlete.age}</div>
                    <br />
                    </div>)}
                </div>
    )
}

export default PlayerPage