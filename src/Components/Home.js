import React from 'react'
import NavBar from './NavBar'
import Screenshot from './Screenshot'

 

function LandingPage() {
    return (
      <div className="App">
            <div>
            <NavBar />
            </div>

            <div className="container" >
            <div className="jumbotron mb=3" >
                    <h3>Fullstack Application Template on AWS </h3>
                    <p>This is a sample application that allows users to manage a list of Tasks. Users are able to 
                    manage their Tasks using the create, update, and delete Task functionality. The application 
                    demonstrates use of AWS Services: Lambda, APIGateway, and DynamoDB.
                    </p>
                </div>

                <div>
                    <Screenshot />
                </div>
            </div>
        </div>
    )
}

export default LandingPage
