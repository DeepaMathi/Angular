import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public data:any;
  ngOnInit(): void {
    this.data = localStorage.getItem('libraryData');
    if(this.data === null) {
      let myData = [{ name: 'Wings of Fire', Author: 'A.P.J. Abdul Kalam', returnDate: '2018-11-11', borrowDate: '2018-09-10' },
                    { name: 'Fasting', Author: 'Anita Desai', returnDate: '2018-11-16', borrowDate: '2018-09-10' },
                    { name: 'The God of Small Things', Author: 'Arundhati Roy', returnDate: '2018-11-16', borrowDate: '2018-09-10' },
                    { name: 'The Future of India', Author: 'Bimal Jalan', returnDate: '2018-11-16', borrowDate: '2018-09-10' },
                    { name: 'What Young India Wants', Author: 'Chetan Bhagat', returnDate: '2018-11-16', borrowDate: '2018-09-10' }];
      localStorage.setItem('libraryData', JSON.stringify(myData));
      }
  }
}
