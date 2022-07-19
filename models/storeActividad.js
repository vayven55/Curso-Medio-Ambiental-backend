import mongoose from "mongoose";
const { Schema } = mongoose;

const actividadSchema = new mongoose.Schema({
    
        fase1: {},
            primera1: String,
            segunda1: String,
         
        
});
    /*fase2: {
        primera2: {type: String},
        segunda2: {type: String},
        tercera2: {type: String},
        cuarta2: {type: String},

    },
  
    fase3:{
        primera3: {type: String},
        segunda3: {type: String},
        tercera3: {type: String},

    },
    fase4: {
        primera4: {type: String},
        segunda4: {type: String},

    },
    fase5: {
        primera5: {type: String},
        segunda5: {type: String},
        tercera5: {type: String},

    }
  //aciertos: {type: Number}
});*/

export default mongoose.model("actividad", actividadSchema);