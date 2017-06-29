import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scheduledoctor',
  templateUrl: './scheduledoctor.component.html',
  moduleId: module.id,
})
export class ScheduledoctorComponent implements OnInit {
 weekday={
   "1":"Monday",
   "2":"Tuesday",
   "3":"Wednesday",
   "4":"Thursday",
   "5":"Friday",
 }
  constructor() { }

  ngOnInit() {
  }

}
