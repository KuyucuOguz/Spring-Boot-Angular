import { Component, OnInit, TRANSLATIONS } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  book:Book = new Book();

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }
  onSubmit():void{
    this.saveBook();
  }
  saveBook(){
    this.bookService.addBook(this.book).subscribe(data =>{
      console.log(data);
    });
  }
}
