import React from 'react';
import './App.css';
import ApplicationForm from './ApplicationForm';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Application Form</h1>
        <ApplicationForm />
      </div>
    )
  }
}

export default App;
