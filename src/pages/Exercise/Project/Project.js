import React, { Component } from "react";
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm: false
    };
  }

  
  componentWillMount() {
      if(localStorage && localStorage.getItem('tasks')){
          let tasks = JSON.parse(localStorage.getItem('tasks'));
          this.setState({
              tasks: tasks
          })
      }
  }
  
  onGenerateData = () => {
    const tasks = [
      {
        id: this.generateID(),
        name: "Learn Code",
        status: true
      },
      {
        id: this.generateID(),
        name: "Learn Code1",
        status: false
      },
      {
        id: this.generateID(),
        name: "Learn Code2",
        status: false
      }
    ];
    this.setState({
      tasks: tasks
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(tasks);
  };

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  generateID() {
    return (
      this.s4() +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4()
    );
  }

  onToggleForm = () =>{
      this.setState({
          isDisplayForm : !this.state.isDisplayForm
      })
  }

  onCloseForm =() =>{
    this.setState({
        isDisplayForm : false
    })
  };

  onSubmit = (value) =>{
      console.log(value);
  };
  render() {

    const { tasks, isDisplayForm} = this.state; // var tasks = this.state.tasks
    const elmTaskForm = isDisplayForm ? 
    <TaskForm onSubmit = {this.onSubmit} onCloseForm = {this.onCloseForm}/> : '';
    return (
      <div className="container">
        <div className="text-center">
          <h1>Manage Project</h1>
        </div>

        <div className="row">
          <div className={isDisplayForm? 'col-lg-4 col-md-12 col-sm-12 col-12': ''}>
            { elmTaskForm}
          </div>

          <div className={isDisplayForm? "col-lg-8 col-md-12 col-sm-12 col-12" : '"col-lg-12 col-md-12 col-sm-12 col-12"'}>
            <button type="button" 
            className="btn btn-primary"
            onClick = {this.onToggleForm}
            >
              <span className="fa fa-plus" />Add new project
            </button>

            <button
              type="button"
              className="btn btn-danger"
              onClick={this.onGenerateData}
            >
              <span className="fa fa-plus" />Generate Data
            </button>
            <Control />

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList tasks = {tasks}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
