import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  pageName = '';
  btnName ='';
  selbookName = '';
  editbookData;
  bookData;
  bookNameVal= '';
  AuthorNameVal = '';
  returnDateVal = '';
  borrowDateVal = ''; 
  constructor( private router: Router, private route: ActivatedRoute,) { }

  ngOnInit() {
    this.bookData = JSON.parse(localStorage.getItem('libraryData'));
    var currentRouteName = window.location.pathname;
    if (currentRouteName.indexOf("add") != -1) {
      this.pageName = 'Add';
      this.btnName = 'Add';
    } else if (currentRouteName.indexOf("edit") != -1) {
      this.pageName = 'Edit';
      this.btnName = 'Update';
      this.selbookName = this.route.snapshot.paramMap.get('bookName');
      this.editbookData = this.bookData.filter(
        book => book.name == this.selbookName);
        this.bookNameVal= this.editbookData[0].name;
        this.AuthorNameVal = this.editbookData[0].Author;
        this.returnDateVal = this.editbookData[0].returnDate;
        this.borrowDateVal = this.editbookData[0].borrowDate; 
    }
  }

  redirectHome(){
    this.router.navigate(['home']);
  }

  edit(bookNameVal, AuthorNameVal, returnDateVal, borrowDateVal){
    if(bookNameVal != "" && AuthorNameVal != "" && returnDateVal != "" && borrowDateVal != ""){
        if(this.pageName == 'Edit'){
          this.bookData = this.bookData.filter(
            book => book.name != this.selbookName);
        }
        this.bookData.push({'name': bookNameVal, 'Author': AuthorNameVal, 'returnDate': returnDateVal, 'borrowDate': borrowDateVal});
        localStorage.setItem('libraryData', JSON.stringify(this.bookData));
        this.router.navigate(['home']);
      }else{
        alert("Please enter all data");
      }
  }

}
