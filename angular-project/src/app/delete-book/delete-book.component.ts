import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';



@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  id: number = 0;
  errorMassage:String = "";
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }
  onSubmit():void{
    this.deleteBook();
  }
  deleteBook(){
    this.bookService.deleteBook(this.id).subscribe(data =>{
      console.log(data);
      this.errorMassage = "";
    },
    error=>{
      this.errorMassage = "Error: book with id: " + this.id + " does not exist";
      console.log(error);
    });;
    
    
  }

}
