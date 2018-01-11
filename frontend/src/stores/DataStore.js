import axios from 'axios'
const SERVER='https://proiect-ramonabotezatu.c9users.io:8080'

class DataStore{
    constructor(ee){
        this.emitter=ee;
        this.content=[];
    
    }
    
    getAll(){
        axios(SERVER+'/documente')
        .then((response)=>{
            for(var i =0;i<response.data.length;i++){
                debugger;
                if(response.data[i].idDoc == 1){
                    response.data[i].id="Adeverinta student";
                }else if(response.data[i].idDoc == 2){
                    response.data[i].id="Contract de munca";
                } else if(response.data[i].idDoc == 3){
                    response.data[i].id="Factura";
                } else if(response.data[i].idDoc == 4){
                    response.data[i].id="Chitanta";
                } else if(response.data[i].idDoc == 5){
                    response.data[i].id="Aviz insotire marfa";
                } else if(response.data[i].idDoc == 6){
                    response.data[i].id="Adeverinta salariat";
                } else if(response.data[i].idDoc == 7){
                    response.data[i].id="Cerere Concediu";
                } else{
                    response.data[i].id="Document necunoscut";
                }


        }
        
            this.content=response.data
        this.emitter.emit('DOC_LOAD')})
    }
    
    getAllCateg(){
         axios(SERVER+'/categorii')
        .then((response)=>{this.content=response.data
        this.emitter.emit('CATEGORII_LOAD')})
    }
    addOne(doc){
        
    }
    deleteOne(id){
        
    }
    getDocByCateg(categ){
        axios(SERVER + '/categorii/' + categ + '/documente').then((res) =>{
            this.content = res.data
            this.emitter.emit('CATEG_LOAD')
        })
    }
   
}

export default DataStore;