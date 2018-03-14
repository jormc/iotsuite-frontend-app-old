import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  constructor() { }

  now: string = '000000';

  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';
  dots: string = ':';

  ngOnInit() {
    let timeoutId = setInterval(() => {
      var time = new Date();
      this.hours = ('0' + time.getHours()).substr(-2);
      this.minutes = ('0' + time.getMinutes()).substr(-2);
      this.seconds = ('0' + time.getSeconds()).substr(-2);
    }, 1000);
  }

}
