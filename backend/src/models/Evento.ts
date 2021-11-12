import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
    nombre: {
        type: String,
        required:true},
    fecha:{
        type: String,
        required:true},
    descripcion:{
        type: String,
        required:true},
    lat: {
        type: Number,
        required:true},
    lng: {
        type: Number,
        required:true},
    id_evento: {
        type: String, 
        required:true},
    id_persona: {
        type: String, 
        required:true},
},
{
    timestamps: true,
    versionKey: false
});

export default model('Evento', schema);