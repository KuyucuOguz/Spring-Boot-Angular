import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookGetComponent } from './book-get/book-get.component';
import { BookComponent } from './book/book.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';


const routes: Routes = [
  {path: 'books', component: BookComponent},
  {path:'create-book',component:CreateBookComponent},
  {path: 'update-book', component: CreateBookComponent},
  {path: 'delete-book', component: DeleteBookComponent},
  {path: 'get-book', component:BookGetComponent},
  {path: '', redirectTo : 'books', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
