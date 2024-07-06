import React from 'react'

const Card = ({item, index, id}) => {
    return (
        <>

            <div className="col-md-4 col-lg-3 mb-4" >
                <div className="card h-100" data-bs-theme="dark">
                    <div className="card-header p-0">
                        <img src={item.flags.png} alt="" className='img-fluid' />
                    </div>
                    <div className="card-body text-center">{item.name.common} <br></br> Capital: {item.capital} </div>
                    <div className="card-footer text-center"> 
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${index}`} >
                        Modal
                    </button>
                    

                    </div>
                </div>
            </div>


            <div className="modal fade" id={index} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Ver Informacion del Pais</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">

                            <div className='row'>
                                <img src={item.flags.png} alt="" className='img-fluid' />
                            </div>
                            <h5 className='text-center'>DETALLES</h5>
                            <p>{item.name.common}</p>
                            <p>Capital: {item.capital} </p>
                            <p>Region: {item.region}  </p>
                            <p>Sub Region: {item.subregion} </p>


                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>







        </>



    )
}

export default Card