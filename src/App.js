import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      options : []
    };

  }

  componentWillMount(){
    this.setState({
        options: ['Home','Articles','Photo Gallery','Reading Lists','Contact Info']
          });
  }


  render() {
    return (
      <div className="App">
        <div>
        { /* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>Tarif Webpage</h2>
        </div>
        <div>
          <NavBar options={this.state.options} />
        </div>
      </div>
    );
  }
}

export default App;
