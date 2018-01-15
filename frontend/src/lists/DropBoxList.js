import React, { Component } from 'react';
import {EventEmitter} from 'fbemitter'
import DataStore from '../stores/DataStore'
import * as drbox from '../Dropbox/dropbox';

const emitter=new EventEmitter()
const store=new DataStore(emitter)

class DropboxList extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }
   
  componentDidMount(){
    //  store.getDocByCateg(2);
     debugger;
      store.getDropBox()
      emitter.addListener('DROPBOX_LOAD',()=>{
          this.setState({
              data:store.content,
          })
      })
      console.log(this.state.data.length)
  }
 render(){
       return(
       
            <ul className="ulDropbox">
             {this.state.data.map((c)=><dl>
                      <dt className="dropBoxTitleDoc">{c.name}</dt>
                      <dd className="pathStyle">Path: - {c.path_display}</dd>
                      <dd className="modificatStyle">Modificat la- {c.server_modified}</dd>
                      <dd className="sizeStyle">Dimensiune  - {c.size}</dd>
                    </dl>
                )}
            </ul>
        );
    }
}
export default DropboxList;
