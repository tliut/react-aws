import React from 'react'
import ScreenShot from "../assets/images/ScreenShot.jpg"

function Screenshot() {
    return (
        
        // <div className="row mb-3">
        //     <div className="col px-0">
        //         <h1>My Task List</h1>
        //         <p>This is my fullstack app using React and AWS (Lambda, APIGateway and DynamoDB</p>
        //         <img className='img-fluid' src={ScreenShot} />
        //     </div>
        // </div>
       
       <div className="card" >
       
        <div className="card-body">
            <h5 className="card-title">Screen shot of my Fullstack App</h5>
            <p className="card-text">Test Drive the application by clicking on the button below.</p>
            <a href="/myTasksApp" className="btn btn-primary">Try My App</a>
        </div>
        <img src={ScreenShot} class="card-img-top" alt="..."/>
        </div>



    )
}

export default Screenshot