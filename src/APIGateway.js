import React, { Component } from 'react'

// import './APIGateway.css'


class APIGateway extends Component {

    componentDidMount() {
        fetch('https://88ceirvm60.execute-api.us-east-1.amazonaws.com/prod/')
        .then(res => res.json())
        .then(json => {
            const goals = json.map(item => item.Goal);
            console.log(goals);
            this.setState({
                goals:  goals
            });
        });
    }

    
    constructor(props){
        super(props)
        this.state = {
            item: '',
            goals: []
            
        }
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(e) {
          this.setState({
              item: e.target.value 
        });
      }

    //   handleSubmit(e) {
    //     e.preventDefault();
    //     const { goals } = this.state;

    //     fetch('https://88ceirvm60.execute-api.us-east-1.amazonaws.com/prod/', {
    //         method: 'POST',
    //         headers: {
    //             'Accept':   'application/json',
    //             'Content-Type': 'application/json'
            
    //         },
    //         body:   JSON.stringify({ goal: item })
    //     });
    //     this.setState({
    //         item: '',
    //         goals: [...goals, item] 
    //   });
    //   e.target.reset();
    // }

    render() {
        const { goals } = this.state;
        const goalList = goals.map((value, index) => <li key={ index}> { value }</li>)
        return (
            <div>    
                <ul>{ goalList }</ul>
                <form>
                {/* <form onSubmit={ this.handleSubmit }> */}
                    <label>Goal</label>
                    <input type='text' onChange={ this.handleChange }></input>
                   
                    {/* <button className="btn btn-primary my-2 my-sm-0" type="submit">Enter a Task</button> */}
                    <a href="/createTask" className="btn btn-primary">Create a Task</a>
                </form>
            </div>
        );
    }
}

export default APIGateway