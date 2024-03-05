require('./connections')

import { IUser, User } from "./user"
import { IBook, Book } from "./book"

const userone: IUser={
    name:"Juan",
    age:21,
    password:"12345",
    email:"juan@gmail.com",
    readBook:[],
    }

    const bookone: IBook={
        idBook:"",
        tittle:"La vuelta al mundo en ochenta dias",
        yearPublication:1872,
        author:"Julio Verne",

    }

    const booktwo: IBook={
        idBook:"",
        tittle:"Viaje al centro de la tierra",
        yearPublication:1864,
        author:"Julio Verne",

    }

    const bookthree: IBook={
        idBook:"",
        tittle:"Miguel Strogoff",
        yearPublication:1876,
        author:"Julio Verne",

    }

    async function getBook (book: IBook){
        const newBook= new Book(book);
        await newBook.save();
        console.log(book);

    }
    getBook(bookone);
    getBook(booktwo);
    getBook(bookthree);

    async function deleteBook(tittle: string){
        const result = await Book.findOneAndDelete({tittle}); 
    console.log(result)
    }
    
    async function findAllBook(){
        const books = await Book.find({});
    
    console.log(books)
    }


    async function getUser (user: IUser){
        const newUser= new Book(user);
        await newUser.save();
        console.log(user);

    }
    getUser(userone);

    async function updateUser(name: string, tittle: string): Promise<void> {
        try {
            const user = await User.findOne({ name });
    
            if (!user) {
                throw new Error('Usuario no encontrado.');
            }
    
            user.readBook = [tittle];
            const updatedUser = await user.save();
            console.log(updatedUser);
        } catch (error) {
            console.error(error.message);
        }
    }
    