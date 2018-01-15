import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import DataList from './lists/DataList';
import DocList from './lists/DocList';
import DropBoxList from './lists/DropBoxList';
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
        <h1 className="titluCategorii">Categorii</h1>
           <DataList data={this.state.data}/>
        </div>
        <div>
        <h1 className="titluDoc">Tipuri de documente </h1>
        <DocList/>
        </div>
        <div>
          <h1 className="titluDoc">Fisierele din dropBox </h1>
        <DropBoxList/>
        </div>
      </div>
    );
  }
}

export default App;