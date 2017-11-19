import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MailingList from './app/components/MailingList';
import { Modal } from 'semantic-ui-react';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Modal open={true} dimmer={false}>
          <Modal.Content>
            <MailingList></MailingList>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default App;
