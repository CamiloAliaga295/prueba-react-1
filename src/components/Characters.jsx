import React, { useState } from 'react'

const Characters = ({ characters, search }) => {
  const [orden, setOrden] = useState('')

  let results = []
  if(!search){
results = characters
  }else {
   results= characters.filter((item) => 
   item.name.toLowerCase(). includes(search.toLowerCase()) ||
   item.species.toLowerCase(). includes(search.toLowerCase()) ||
   item.location.name.toLowerCase(). includes(search.toLowerCase())
   );
    }

    const ordenarMenor = (data) =>{
      results = data.sort((a ,b) => a.name.localeCompare(b.name))
    }
  
    const ordenarMayor = (data) =>{
      results = data.sort((a ,b) => b.name.localeCompare(a.name))
    }

    orden == 'menor' && ordenarMenor(characters)
    orden == 'mayor' && ordenarMayor(characters)

  return (
    
    <div className="row">

      <h2>Ordenar</h2>
    <select
    className='mb-5' 
    value={"default"}
    onChange={(e)=>setOrden(e.target.value)}>
      <option value="default" disabled hidden>-- Sort by --</option>
      <option value="menor">Nombra A - Z</option>
      <option value="mayor">Nombra Z - A</option>
   </select>

      {results.map((item, index) => (
          <div key={index} className="col mb-4">
              <div className="card" style={{minWidth:"200px"}}>
                <img src={item.image} alt="" />
                <div className="card-body">

                  <h5 className="card-tittle">{item.name}</h5>
                  <hr />
                  <p>Species: {item.species}</p>
                  <p>Location: {item.location.name}</p>
                </div>
              </div>

          </div>

        ))}



    </div>
  )
}

export default Characters;