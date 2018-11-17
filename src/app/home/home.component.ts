import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bookData = JSON.parse(localStorage.getItem('libraryData'));
  constructor( private router: Router) { }

  ngOnInit() {
   
  }
  addBook(){
    this.router.navigate(['add']);
  }

  editBook(selData){
    this.router.navigate(['edit/'+selData.name]);
  }

  deleteBook(selData){
    this.bookData = this.bookData.filter(
      book => book.name != selData.name);
    localStorage.setItem('libraryData', JSON.stringify(this.bookData)); 
  }
}
