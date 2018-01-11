import React, { Component } from 'react';
import {EventEmitter} from 'fbemitter'
import DataStore from '../stores/DataStore'

const emitter=new EventEmitter()
const store=new DataStore(emitter)

class DocList extends Component{
    constructor(props){
        super(props)
        this.state = {
            data:[]
        }
    }
  componentDidMount(){
      store.getAll()
      emitter.addListener('DOC_LOAD',()=>{
          this.setState({
              data:store.content
          })
      })
      console.log(this.state.data.length)
  }
  
  
 render(){
        return(
       <div className="linkuri">
             {this.state.data.map((c)=><a href={c.numeDocument}>{c.id}</a>)}
        </div>
        );
    }
}
export default DocList;
