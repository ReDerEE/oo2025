


export default function Arrayd() {
    const sonad = ["Elas", "metsas", "mutt"]
  const autod = [
    {"mark":"BMW", "mudel": "m5", "year": 2015},
    {"mark":"Audi", "mudel": "A6", "year": 2013},
    {"mark":"Mercedes", "mudel": "Unimog", "year": 1980},
    {"mark":"VW", "mudel": "Beetle", "year": 2010}
]
  return (
    <div><div>{7 + 7}</div>
    <div>7+7</div>
    {sonad.map(sona => 
    <div key = {sona}>
     {sona}
     </div> )}

    <br />

    {autod.map(auto => 
    <div key = {auto.mark+auto.mudel}> 
     {auto.mark} - {auto.mudel} {+auto.year}
     </div> )}
     
     <br /></div>
  )
}
