import React from 'react'
import { Link } from 'react-router-dom'

const Home = () =>
{
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12 ml-4 my-5 text-right">
                    <Link to="/add" className='btn btn-outline-dark'>Add Contact</Link>
                </div>
                <div className="col-md-6 mx-auto">
                    Hello
                </div>
            </div>
        </div>
    )
}

export default Home
