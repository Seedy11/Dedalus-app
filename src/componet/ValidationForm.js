import React from "react";


const initialState = {

  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: ""
};

export default class ValiationForm extends React.Component {
  state = initialState;

  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };
//the validate function should send a meesage if the user didnt fill all the form 
  validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";
//this is to check if the user has fill the form 
    if (!this.state.name) {
      nameError = "name cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (emailError || nameError) {
      this.setState({ emailError, nameError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
      this.setState(initialState);
    }
  };

  render() {
    return (
      <><form onSubmit={this.handleSubmit} id="form">
        <div className='input-form'>
        <h2>Form</h2>
          <label for="name">Name</label><br />
          <input
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange} />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.nameError}
          </div>
        </div>
        
        <div className='input-form'>
          
          <label for="email">Email</label><br />
          <input
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange} />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.emailError}
          </div>
        </div>
        <div className='input-form'>
          <label for="password">Password</label><br />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange} />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.state.passwordError}
          </div>
        </div>
        <button type="submit">submit</button>
      </form>
      <footer id="footer">copyright @ info or perhaps some author
info </footer></>
    );
  }
}