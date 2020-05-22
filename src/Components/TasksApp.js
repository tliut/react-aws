import React from 'react'
import APIGateway from '../APIGateway'

function TasksApp() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark my=3">
                <a className="navbar-brand" href="#">My FullStack Application Template</a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> */}
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Logout</button>
                    </form>
                </div>
            </nav>

            <div className='container'>
                <APIGateway />    
            </div>


        </div>
    )
}


export default TasksApp