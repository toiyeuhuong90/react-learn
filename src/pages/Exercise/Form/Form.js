import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userPass: "",
      description: "",
      userGender: "1",
      lang: "vi",
      chkStatus: true
    };
  }
  onHandleChange = event => {
    let target = event.target;
    let name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };

  onHandleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Form</h3>
              </div>
              <div className="card-block">
                <form onSubmit={this.onHandleSubmit}>
                  <div className="form-group">
                    <label>Username: </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="userName"
                      placeholder="Input field name"
                      onChange={this.onHandleChange}
                      value={this.state.userName}
                    />
                  </div>
                  <div className="form-group">
                    <label>Password: </label>
                    <input
                      type="password"
                      className="form-control"
                      id="pass"
                      name="userPass"
                      placeholder="Input field password"
                      onChange={this.onHandleChange}
                      value={this.state.userPass}
                    />
                  </div>
                  <div className="form-group">
                    <label>Description:</label>
                    <div>
                      <textarea
                        name="description"
                        className="form-control"
                        rows="3"
                        required="required"
                        onChange={this.onHandleChange}
                        value={this.state.description}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Gender: </label>
                    <div className="col-sm-4">
                      <select
                        name="userGender"
                        className="form-control"
                        required="required"
                        onChange={this.onHandleChange}
                      >
                        <option value={1}>Male</option>
                        <option value={0}>Female</option>
                      </select>
                    </div>
                  </div>
                  <div className="radio">
                    <label>
                      <input
                        type="radio"
                        name="lang"
                        value="en"
                        onChange={this.onHandleChange}
                        checked={this.state.lang == "en"}
                      />
                      English
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="lang"
                        value="vi"
                        onChange={this.onHandleChange}
                        checked={this.state.lang == "vi"}
                      />
                      Vietnamese
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input
                        type="checkbox"
                        value={true}
                        name="chkStatus"
                        onChange={this.onHandleChange}
                        checked={this.state.chkStatus == true}
                      />
                      Status
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>&nbsp;
                  <button type="reset" className="btn btn-default">
                    Delete
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
