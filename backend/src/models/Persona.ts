import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
    nombre: {
        type: String,
        required:true},
    apellido:{
        type: String,
        required:true},
    id_evento: {
        type: String, 
        required:true},
    id_persona: {
        type: String, 
        required:true}    
},
{
    timestamps: true,
    versionKey: false
});

export default model('Persona', schema);