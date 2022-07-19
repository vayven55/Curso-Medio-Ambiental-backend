import express from "express";
const app = express();
import 'dotenv/config';
import mongoose from 'mongoose';
import actividad from "./models/storeActividad.js";
const port = process.env.PORT || 4000;
const host = process.env.HOST;
const mongoURL = 'mongodb://localhost:27017/actividad';

mongoose.connect(mongoURL, (err) => {
    if(err){
        console.log('Error de conexión')
    }else{console.log('Base de datos "actividad" conectada')}
    
})

app.use(express.json())

app.post('/actividad', async (req, res) => {
    let actividadData = req.body;
    let mongoActividad = [];
    await actividadData.forEach(actividad => {
        mongoActividad.push({
            fase1: actividad,
            fase2: actividad,
            fase3: actividad,
            fase4: actividad,
            fase5: actividad,
            //aciertos: actividad
        });
               
    });
    console.log(actividadData)
    actividad.create(mongoActividad, (err, records) => {
        if(err) {
            res.status(500).send(err);
        }else{res.status(200).send(records);}
    }); 
    
});

app.get('/', (req, res) => {
    res.send('Hasta aquí hemos llegado')
});

app.listen(port, () => {
    console.log(`Servidor conectado en ${host}${port}`);
});
