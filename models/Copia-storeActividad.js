import mongoose from "mongoose";
const { Schema } = mongoose;

const actividadSchema = mongoose.Schema({
  primera1: String,
  segunda1: String,

  primera2: String,
  segunda2: String,
  tercera2: String,
  cuarta2: String,

  primera3: String,
  segunda3: String,
  tercera3: String,

  primera4: String,
  segunda4: String,

  primera5: String,
  segunda5: String,
  tercera5: String,

  aciertos: Number,
});

export default mongoose.model("actividad", actividadSchema);
