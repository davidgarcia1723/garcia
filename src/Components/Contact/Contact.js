
import React from 'react';
import '../Contact/Contact.css';


const initialState = {
    Name: '',
    Email: '',
    Message: '',
    errorName: '',
    errorEmail: '',
    errorMessage: ''
};

class Contact extends React.Component {
    state = initialState;

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
        });
    };

    validate = (event) => {
        let errorName = '';
        let errorEmail = '';
        let errorMessage = '';

        if (this.state.Name.length < 3) {
            errorName = "Please Enter Name";
        }
        if (errorName) {
            this.setState({ errorName });
            return false
        }
        if (this.state.Email.indexOf('@') === -1 || this.state.Email.length < 6) {
            errorEmail = "Please Enter Valid Email Address";
        }
        if (errorEmail) {
            this.setState({ errorEmail });
            return false
        }

        if (this.state.subject.length <= 30) {
            errorMessage = "Please Enter More Than 30 Characters";
        }
        if (errorMessage) {
            this.setState({ errorMessage });

            return false

        }

        return true;

        ;

    };

    handleSubmit = event => {
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
            alert("Form Submitted Successfully!")
        }
        else if (!isValid) {
            event.preventDefault();

        }
    };

    render() {

        return (<div>
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
            <form className="container-form" onSubmit={this.handleSubmit} action="https://formsubmit.co/davidgarcia1723@gmail.com" method='POST'>
                <div className="formGroup">

                    <label htmlFor="Name">Name</label>
                    <br />
                    <input type="text" id="Name" name="Name" value={this.state.Name} onChange={this.handleChange} placeholder="Your name.." />
                    <div style={{ fontSize: 15, color: "red" }}>
                        {this.state.errorName}
                    </div>


                    <label for="Email">E-mail</label>
                    <br />
                    <input type="text" id="Email" name="Email" value={this.state.Email} onChange={this.handleChange} placeholder="Your E-mail.." />
                    <div style={{ fontSize: 15, color: "red" }}>
                        {this.state.errorEmail}
                    </div>


                    <label for="Message">Message</label>
                    <br />
                    <textarea id="Message" name="Message" value={this.state.subject} onChange={this.handleChange} placeholder="Write message.." style={{ height: '200px' }}></textarea>
                    <div style={{ fontSize: 15, color: "red" }}>
                        {this.state.errorMessage}
                    </div>

                    <button className="btn-submit" type="submit">Submit</button>
                    
                </div>

            </form>
            </div>

        )
    }
}

export default Contact