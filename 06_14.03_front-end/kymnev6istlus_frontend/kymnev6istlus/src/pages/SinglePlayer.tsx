import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { Player } from "../models/Player";
import { Link } from "react-router-dom";

function SinglePlayer() {
    const{playerId} = useParams();

    const [player, setPlayer] = useState<Player>()
    // useParams peab ühtima URLis olevat id'd/muud parameetrit
    // Siin on productId (localhost:5173/product/1)

    useEffect(() => {
        fetch("http://localhost:8080/player/"+playerId)
        .then(res => res.json())
        .then(json => setPlayer(json))
    }, [playerId]);

  return (
    <div>
        <div>Nimi: {player?.name}</div>
        <div>Riik: {player?.country}</div>
        <div>Täispunktid: {Math.round(Number(player?.points?.sumPoints)) }</div>
        <Link to={'/editPlayer/'+playerId}>
          <button>
              Muuda
          </button>
        </Link>
    </div>
  )
}

export default SinglePlayer