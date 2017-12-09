var express = require("express")
var Sequelize = require("sequelize")

var sequelize = new Sequelize('mydb','root','',{
    dialect:'mysql',
    host:'localhost',
    define: {
        freezeTableName: true,
        timestamps: false
    }
})

sequelize.authenticate().then(function(){
    console.log('Succes')
})

var app = express()
app.use(express.json())
app.use(express.urlencoded())

app.use(express.static('public'))

var Categorii = sequelize.define('Categorie',{
    numeCategorie: Sequelize.STRING,
})

var Documente = sequelize.define('Document',{
    numeDocument: Sequelize.STRING,
    numarInregistrare: Sequelize.INTEGER,
    idDoc: Sequelize.INTEGER
})

Documente.belongsTo(Categorii, {foreignKey: 'idDoc', targetKey: 'id'})

app.get('/categorii',function(request,response){
    Categorii.findAll().then(function(categ){
        response.status(200).send(categ)
    })
})

app.get('/categorii/:id',function(request,response){
    Categorii.findOne({where: {id:request.params.id}}).then(function(categ){
        if(categ){
            response.status(200).send(categ)
        }else{
            response.status(404).send("Not found")
        }
    })
})

app.post('/categorii',function(request,response){
    Categorii.create(request.body).then(function(categ){
        response.status(201).send(categ)
    })
})

app.put('/categorii/:id',function(request,response){
    Categorii.findById(request.params.id).then(function(categ){
        if(categ){
            categ.update(request.body).then(function(categ){
                response.status(201).send(categ)
            }).catch(function(error){
                response.send(200).send(error)
            })
        }else{
            response.status(404).send("Not found")
        }
    })
})

app.delete('/categorii/:id',function(request,response){
    Categorii.findById(request.params.id).then(function(categ){
        if(categ){
            categ.destroy().then(function(){
                response.status(204).send('Categoria a fost stearsa.')
            })
        }else{
            response.status(404).send("Not found")
        }
    })
})


app.get('/documente',function(request, response) {
    Documente.findAll().then(function(doc){
        response.status(200).send(doc)
    })
})

app.get('/documente/:id',function(request, response) {
    Documente.findOne({where: {id:request.params.id}}).then(function(doc){
        if(doc){
            response.status(200).send(doc)
        }else{
            response.status(404).send("Not found")
        }
    })
})

app.post('/documente',function(request,response){
    Documente.create(request.body).then(function(doc){
        response.status(201).send(doc)
    })
})

app.put('/documente/:id',function(request,response){
    Documente.findById(request.params.id).then(function(doc){
        if(doc){
            doc.update(request.body).then(function(document){
                response.status(201).send(document)
            }).catch(function(error){
                response.status(200).send(error)
            })
        }else{
            response.status(404).send("Not found")
        }
    })
})

app.delete('/documente/:id',function(request,response){
    Documente.findById(request.params.id).then(function(doc){
        if(doc){
            doc.destroy().then(function(){
                response.status(204).send('Categoria a fost stearsa.')
            })
        }else{
            response.status(404).send("Not found")
        }
    })
})


app.listen(8080)