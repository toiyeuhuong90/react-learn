import React, { Component } from "react";
import TaskItem from "./TaskItem";

class TaskList extends Component {
  render() {
      let {tasks}  = this.props;
      let elmTasks = tasks.map((task, index) =>{
        return <TaskItem key={task.id} index ={index} task={task} />
      });
    return (
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Name</th>
            <th className="text-center">Status</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td />
            <td>
              <input type="text" className="form-control" name="filterName" />
            </td>
            <td>
              <select
                name="filterStatus"
                className="form-control"
                required="required"
              >
                <option value={-1}>All</option>
                <option value={0}>Hide</option>
                <option value={1}>Active</option>
              </select>
            </td>
            <td />
          </tr>
          {elmTasks}
        </tbody>
      </table>
    );
  }
}

export default TaskList;
