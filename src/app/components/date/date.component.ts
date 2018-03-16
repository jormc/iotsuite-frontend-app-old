import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
  providers: [
    DatePipe
  ]
})
export class DateComponent implements OnInit {

  constructor(private datePipe: DatePipe) { }

  today: string;

  ngOnInit() {
    let timeoutId = setInterval(() => {
      this.today = this.datePipe.transform(new Date(), 'dd/MM/yyyy');
    }, 1000);
  }

}
