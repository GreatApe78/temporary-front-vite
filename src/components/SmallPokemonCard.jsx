import { useState } from "react"
import Spinner from "react-bootstrap/esm/Spinner"



export default function SmallPokemonCard({name,setSelected,id,handleChoose}) {
    const [loading,setLoading] = useState(false)
    function handleCardClick(){
        setSelected(true)
        setLoading(true)
        handleChoose(id).then((transaction) => {
            console.log(transaction)
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(()=>{
            setLoading(false)
        })
    }
  
    return (
        <div
        className="bg-light border  d-flex p-1 align-items-center mt-2 mb-2 rounded card-hover b-1"
        onClick={handleCardClick}
      >
        <div>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            width={"50px"}
            alt="image"
          />
        </div>
        <h3>
          {name} #{id}
        </h3>
        {loading?(<div><Spinner /></div>):(<></>)}
      </div>
  )
}
