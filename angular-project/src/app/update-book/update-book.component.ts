import { Component, OnInit, TRANSLATIONS } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  book:Book = new Book();
  id: number = 0;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }
  onSubmit():void{
    this.updateBook();
  }
  updateBook(){
    this.bookService.putBook(this.id, this.book);
  }
}
