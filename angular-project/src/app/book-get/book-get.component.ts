import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-get',
  templateUrl: './book-get.component.html',
  styleUrls: ['./book-get.component.css']
})
export class BookGetComponent implements OnInit {

  
  id!: number;

  public dateOfPublish!: String;
  public idnum !: number;
  public author!: String;
  public name !:string;

  constructor(private bookService: BookService) {

   }

  public book:Book = new Book();
  errorMassage:String = "";

  ngOnInit(): void {
  }
  onSubmit():void{
    this.getBook();
  }
  getBook(){
      this.bookService.getBook(this.id).subscribe(data =>{
      console.log(data);
      this.dateOfPublish = data.dateOfPublish;
      this.author = data.author;
      this.name = data.name;
      this.idnum = data.id;
      this.errorMassage = "";
    },
    error=>{
      this.errorMassage = "book with id " +  this.id + " does not exist";
      this.dateOfPublish = "";
      this.author = "";
      this.name = "";
      this.idnum = 404;
    });
    
  }

}
