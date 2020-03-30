import React, { Component } from 'react';
import Header from './components/Header'
import Routes from './routes';
import './styles.css';

//Default sintax
class App extends Component {
  render(){
    return (
      <div className="App">
        <Header />
        <Routes />
      </div>
    )
  }
}


export default App;
