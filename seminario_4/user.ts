import {Schema, model } from 'mongoose';
import { IBook } from './book';

export interface IUser {
    name: string;
    age: number;
    password: string;
    email: string;
    readBook: string[];
}


const UserSchema: Schema= new Schema({
name:{type: String, required: true},
age: {type: Number, required: true},
password: {type: String, required: true},
email: {type: String, required:true},
readBook:[{type: Schema.Types.ObjectId, required: false, ref: 'book'}]

});

export const User = model<IUser>('user', UserSchema);
