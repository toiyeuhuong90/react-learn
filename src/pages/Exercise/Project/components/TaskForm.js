import React, { Component } from "react";

class TaskForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            proName:'',
            proStatus: true
        }
    }
  onHideForm = () => {
      this.props.onCloseForm();
  };

  onChange =(event) =>{
      let target  = event.target;
      let name = target.name;
      let value = target.value;
      this.setState({
          [name] : value
      })
  };

  onSubmit = (event) =>{
    event.preventDefault();
   this.props.onSubmit(this.state);
  };
  render() {
    return (
      <div className="card card-warning">
        <div className="card-header">
          <h3 className="card-title">
            Add new project
            <span className="fa fa-times-circle" onClick={this.onHideForm}/>
          </h3>
        </div>
        <div className="card-block">
          <form onSubmit = {this.onSubmit}>
            <legend>Form title</legend>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                className="form-control"
                id=""
                placeholder="Input field"
                name="proName"
                value = {this.state.proName}
                onChange = {this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Status:</label>
              <select
                name="proStatus"
                className="form-control"
                required="required"
                value = {this.state.proStatus}
                onChange = {this.onChange}
              >
                <option value={true}>Active</option>
                <option value={false}>No Active</option>
              </select>
            </div>
            <button type="submit" className="btn btn-warning">
              <span className="fa fa-plus" />Save
            </button>&nbsp;
            <button type="button" className="btn btn-primary">
              <span className="fa fa-close" />Cancel
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;
