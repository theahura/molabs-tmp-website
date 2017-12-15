import React from 'react'
import { Form } from 'semantic-ui-react'
import axios from 'axios';

export default class MailingList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      submitted: false,
    }
  }

  handleChange(e){
    var email = e.target.value;
    this.setState({email: email});
  }

  handleSubmit(e) {
    axios.post('/emails', {
      email: this.state.email

    }).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    })

    this.setState({
      submitted: true
    })
  }

  render() {
    var content = {};
    var email = this.state.email;
    if (!this.state.submitted) {
      content = 
          <div>
            <h1>Welcome to MoLabs</h1>
            <h2>Subscribe to our mailing list to see what we are working on!</h2>
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <Form.Input label="Enter email" type="email" value={this.state.email} onChange={this.handleChange.bind(this)} name="email" placeholder="myemail@gmail.com" required />
              <Form.Button type="submit">Subscribe</Form.Button>
            </Form>
          </div>
    }
    else {
      content = 
        <div>
          <h1> Thank you for submitting! </h1>
          <h3>{email} added to mailing list</h3>
        </div>
    }
    return (
      <div className="mailing-list-signup-container" style={{textAlign: "center"}}>
        {content}
      </div>
    )
  }
}