import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar'
import Screenshot from './Components/Screenshot'
import APIGateway from './APIGateway';
import Home from './Components/Home';
import TasksApp from './Components/TasksApp';
import CreateTask from './Components/CreateTask'

import {BrowserRouter, Switch, Route} from 'react-router-dom'



class App extends Component {
  
  render() {
    return (
      
      <BrowserRouter>
        <div>
          <Route path="/" component={Home} exact/>
          <Route path="/myTasksApp" component={TasksApp} />
          <Route path="/createTask" component={CreateTask} />
        </div>
        
      </BrowserRouter>
      // <div className="App">

      //   <div>
      //     <NavBar />
      //   </div>

      //   <div className="container" >
      //     <div className="jumbotron mb=3" >
      //       <h3>Fullstack Application Template on AWS </h3>
      //       <p>This is a sample application that allows users to manage a list of Tasks. Users are able to 
      //         manage their Tasks using the create, update, and delete Task functionality. The application 
      //         demonstrates use of AWS Services: Lambda, APIGateway, and DynamoDB.
      //       </p>
      //     </div>

      //     <div>
      //       <Screenshot />
      //     </div>

      //   </div>  

      //   <header className="App-header">

      //       <APIGateway />

           
      //   </header>
      // </div>
    );
  }
  
}

export default App;
