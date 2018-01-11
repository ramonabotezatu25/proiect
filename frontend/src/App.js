import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import DataList from './lists/DataList';
import DocList from './lists/DocList';
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      data:[{numeDocument:"doc1", idDoc:" "}]
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Clasificare documente electronice</h1>
        </header>
        <div className="dt">
           <DataList data={this.state.data}/>
        </div>
        <div>
        <DocList/>
        </div>
      </div>
    );
  }
}

export default App;