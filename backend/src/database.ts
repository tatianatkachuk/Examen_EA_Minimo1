import { connect } from 'mongoose'

const MONGODB_URI = 'mongodb+srv://telematica:telematica@cluster0.twlws.mongodb.net/eventosdb?retryWrites=true&w=majority';


export async function startConnection() {
    const db = await connect(MONGODB_URI,{});

    console.log('Database is connected');
    
}