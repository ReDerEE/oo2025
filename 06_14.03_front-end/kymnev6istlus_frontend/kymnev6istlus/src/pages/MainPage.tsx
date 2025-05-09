import { useCallback, useEffect,useRef,useState } from 'react'
import { Player } from "../models/Player";
import { Points } from "../models/Points";
import { Link } from 'react-router-dom';





function MainPage(){

    const [athlete, setPlayer] = useState<Player[]>([])
    const [punktid, setPoints] = useState<Points[]>([])
    const [page, setPage] = useState(0)
    const [athletesByPage, setAthletesByPage] = useState(1)
    const [activeCountry, setActiveCountry] = useState("ALL")
    const [totalAthletes, setTotalAthletes] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const [staticPlayer, setStaticPlayer] = useState<Player[]>([])

    useEffect(() => {
        fetch("http://localhost:8080/player") // API otspunkt, kuhu läheb otspunkt
        .then(res=>res.json()) // kogu tagastus: headers, status coed jne
        .then(json=>{setPlayer(json)
        setStaticPlayer(json)
        }) // body: sisu, mida tagastab meile back-end
    }, []);

    useEffect(() => {
        fetch("http://localhost:8080/points") // API otspunkt, kuhu läheb otspunkt
        .then(res=>res.json()) // kogu tagastus: headers, status coed jne
        .then(json=>setPoints(json)) // body: sisu, mida tagastab meile back-end
    }, []);

    const uniqueCountries = [...new Set(staticPlayer.map(item => item.country))];

    const showByCountry = useCallback((country: string, currentPage: number) => {
        setActiveCountry(country)
        setPage(currentPage)
        fetch("http://localhost:8080/player-country?country="+country+
            "&size="+athletesByPage+
            "&page="+currentPage
                )
                .then(res=>res.json())
                .then(json=>{
                    setPlayer(json.content)
                    setTotalAthletes(json.totalElements)
                    setTotalPages(json.totalPages)
                })
    }, [athletesByPage])

    useEffect(() => {
        showByCountry("ALL", 0)
    }, [showByCountry])

    function updatePage(newPage: number){
        showByCountry(activeCountry, newPage)
    }


    

    const athletesByPageRef = useRef<HTMLSelectElement>(null)
    return (
        <div>
            <select ref={athletesByPageRef} onChange={()=> setAthletesByPage(Number(athletesByPageRef.current?.value))}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
            <br />
            <button onClick={()=>showByCountry("ALL", 0)}>Kõik riigid</button>

            {uniqueCountries.map(country =>
                <button key={country} onClick={() => showByCountry(country, 0)}>
                    {country}
                </button>
            )}


    

            <br />
            <br />
            <div>Kokku võistlejaid: {totalAthletes}</div>
            {athlete.map(athlete =>
                <div key={athlete.id}>
                    <div>Id: {athlete.id}</div>
                    <div>Nimi: {athlete.name}</div>
                    <div>Riik: {athlete.country}</div>
                    <div>Vanus: {athlete.age}</div>
                    <Link to={'/player/'+athlete.id}>
                        <button>
                            Vaata lähemalt
                        </button>
                    </Link>
                    <br />
                    </div>)}
            {/* {punktid.map(punktid=>
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
                )} */}
                <button disabled={page===0} onClick={()=>updatePage(page-1)}>Eelmine</button>
                <span>{page}</span>
                <button disabled={page >= totalPages -1} onClick={()=>updatePage(page+1)}>Järgmine</button>
    </div>
    )
}

export default MainPage