import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { Book } from './book';
import {  throwError } from 'rxjs';
import { catchError,  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  book:Book = new Book();
  private baseUrl = "http://localhost:8081/api/v1/Book"
  constructor(private http: HttpClient) {
    
  }
  getBooks():Observable<Book[]>{
    //return this.http.get<Book[]>(`${this.baseUrl}`);
    return this.http.get<Book[]>(`http://localhost:8081/api/v1/Book/books`);
  }

  addBook(book: Book):Observable<Book>{
    return  this.http.post<Book>(`http://localhost:8081/api/v1/Book/post`, book).pipe(catchError(this.alreadyExist));
  }

  getBook(id:number): Observable<Book>{ 
    return this.http.get<Book>(`http://localhost:8081/api/v1/Book/book/` + id ).pipe(catchError(this.doesNotExist));
  }
  
  putBook( id: number, book: Book,): Observable<Book>{
    return this.http.put<Book>(`http://localhost:8081/api/v1/Book/put/`+ id, book).pipe(catchError(this.doesNotExist));
  }

  deleteBook(id: number):Observable<Book>{
    return this.http.delete<Book>(`http://localhost:8081/api/v1/Book/delete/` + id).pipe(catchError(this.doesNotExist));
  }

  //errors
  doesNotExist(error:HttpErrorResponse){
    return throwError(error.message || "book with that id does not exist");
  }

  alreadyExist(error: HttpErrorResponse){
    return throwError(error.message || "book with that id already exists");
    
  }
}
  