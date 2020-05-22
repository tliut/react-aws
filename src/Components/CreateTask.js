import React from 'react'

function CreateTask() {
    return (
        // <div className="container">
        //     <div className='row'>
        //         <div className='col-8'>
           
        //     {/* <h3> Create Task</h3> */}
        //     <form>
        //         <div className="form-group">
        //             <label for="taskName">Task Name</label>
        //             <input type="taskName" class="form-control" id="exampleInputEmail1" aria-describedby="taskName" placeholder="Enter Task Name"/>
        //         </div>
        //         <div className="form-group">
        //             <label for="taskDesciption">Task Description</label>
        //             <input type="taskDesciption" class="form-control" id="taskDescription" placeholder="Task Description"/>
        //         </div>

        //         <div className="form-group">
        //             <label for="taskDueDate">Task Due Date</label>
        //             <input type="taskDueDate" class="form-control" id="taskDueDate" placeholder="Task Due Date"/>
        //         </div>

        //         <div className="form-group">
        //             <label for="taskStatus">Task Status</label>
        //             <input type="taskStatus" class="form-control" id="taskStatus" placeholder="Task Status"/>
        //         </div>

        //         <button type="submit" className="btn btn-primary">Save Task</button>
        //     </form>

        //     </div>
        //     </div>
            
        // </div>
        
        <div className='container ' >

        
            <div className="card card-light bg-light" >
            
                <div className="card-body">
                    <h5 className="card-title">Create Task</h5>
                    <p className="card-text">Enter Your Task Details and then click the Create Task button below.</p>
                    <form>
                        <div className="form-group">
                            <label for="taskName">Task Name</label>
                            <input type="taskName" class="form-control" id="exampleInputEmail1" aria-describedby="taskName" placeholder="Enter Task Name"/>
                        </div>
                        <div className="form-group">
                            <label for="taskDesciption">Task Description</label>
                            <input type="taskDesciption" class="form-control" id="taskDescription" placeholder="Task Description"/>
                        </div>

                        <div className="form-group">
                            <label for="taskDueDate">Task Due Date</label>
                            <input type="taskDueDate" class="form-control" id="taskDueDate" placeholder="Task Due Date"/>
                        </div>

                        <div className="form-group">
                            <label for="taskStatus">Task Status</label>
                            <input type="taskStatus" class="form-control" id="taskStatus" placeholder="Task Status"/>
                        </div>

                        <button type="submit" className="btn btn-primary">Save Task</button>
                    </form>
                    
                </div>
            </div>
                
            </div>

    
        
    )
}

export default CreateTask
