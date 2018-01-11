import React, { Component } from 'react';
import {EventEmitter} from 'fbemitter'
import DataStore from '../stores/DataStore'

const emitter=new EventEmitter()
const store=new DataStore(emitter)

class DataList extends Component{
    constructor(props){
        super(props)
        this.state = {
            data:[]
        }
    }
   
  componentDidMount(){
    //  store.getDocByCateg(2);
      store.getAllCateg()
      emitter.addListener('CATEGORII_LOAD',()=>{
          this.setState({
              data:store.content
          })
      })
      console.log(this.state.data.length)
  }
  accesCategorie(value) {
      store.getDocByCateg(value)
       emitter.addListener('CATEG_LOAD',()=>{
           debugger;
          this.setState({
              data:store.content
          })
          window.open(
          store.content[0].numeDocument,
          '_blank' // <- This is what makes it open in a new window.
        );
        window.location.reload();
     })
     
  }

 render(){
        return(
       <div>
            <ul>
             {this.state.data.map((c)=><li><button  onClick={() => this.accesCategorie(c.id)} class='btn'>{c.numeCategorie} </button></li>)}
            </ul>
        </div>
        );
    }
}
export default DataList;
