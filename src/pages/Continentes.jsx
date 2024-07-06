import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { useParams } from 'react-router-dom';

const API = 'https://restcountries.com/v3.1/region/';

const Continentes = () => {
  const params = useParams()
  const [datos, setDatos] = useState([])
  let URI = API + params.id
  const getDatos = async () => {
    
    try {

      const response = await fetch(URI);
      const data = await response.json();
      console.log(data)
      setDatos(data);
    } catch (error) {
      console.error(error)
    }
  };


  useEffect(() => {
    getDatos();
  }, [params.id]);



  return (
    <>
      <div className='text-center'>Continente {URI} </div>
      <div className='container'>
        <h3 className="text-center py-4"> {params.id} </h3>
        <div className="row">
        {datos && datos.map((item, index) => (
                        <Card key={index} item={item} index={index} />
                    ))}
        </div>
      </div>



   


    </>

  )
}

export default Continentes