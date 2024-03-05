import {Schema, model } from 'mongoose';


export interface IBook{
    idBook?: string;
    tittle: string;
    yearPublication: number;
    author: string;
    
}


const BookSchema: Schema= new Schema({
idBook:{type: String, required: true},
tittle:{type: String, required: true},
yearPublication: {type: Number, required: true},
author: {type: String, required: true},
});

export const Book = model<IBook>('Book', BookSchema);