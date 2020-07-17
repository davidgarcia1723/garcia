import React from 'react';
import '../Contact/Contact.css';

const initialState = {
    name: "",
    email: "",
    message: "",
    nameError: "",
    emailError: "",
    messageError: ""
  };
  
  export default class Contact extends React.Component {
    state = initialState;
  
    handleChange = event => {
      const isCheckbox = event.target.type === "checkbox";
      this.setState({
        [event.target.name]: isCheckbox
          ? event.target.checked
          : event.target.value
      });
    };
  
    validate = () => {
      let nameError = "";
      let emailError = "";
      let messageError = "";
  
      if (!this.state.name) {
        nameError = "Name cannot be blank";
      }
  
      if (!this.state.email.includes("@")) {
        emailError = "Invalid email.";
      }

      if (!this.state.message) {
        messageError = "Message is required.";
      }
  
      if (emailError || nameError || messageError) {
        this.setState({ emailError, nameError, messageError });
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
          <div>
            <div>
            <div class="hero-image--contact">
                    <div class="hero-text--contact">
                        <h1>Contact Me</h1>
                        <p>Let's Connect.</p>
                        <br />
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                 </div>
        <form className="container-form" action="https://formsubmit.co/davidgarcia1723@gmail.com" method="POST" onSubmit={this.handleSubmit}> 
            <label for="name">Name:</label>
          <div>
            <input
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.nameError}
            </div>
          </div>
          <br />
          <label for="email">Email:</label>
          <div>
            <input
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.emailError}
            </div>
          </div>
          <br />
          <label for="message">Enter Message Here:</label>
          <div> 
            <textarea 
              cols="50" rows="10"  name="message"
              placeholder="Enter message here."
              value={this.state.message}
              onChange={this.handleChange}>
            </textarea>
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.messageError}
            </div>
          </div>
          <br />
          <button type="submit" className="btn-submit">Submit</button>
        </form>
        </div>
         );
        }
      }
