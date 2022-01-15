import React from 'react'
import { Link } from 'react-router-dom'

const Home = () =>
{
    return (
        <div className='container text-left'>
            <div className="row">
                <div className="col-md-12 ml-4 my-5 ">
                    <Link to="/add" className='btn btn-outline-dark'>Add Contact</Link>
                </div>
                <div className="col-md-6 text-center mx-auto">
                    Hello
                </div>
            </div>
        </div>
    )
}

export default Home
