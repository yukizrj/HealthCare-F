import { Component, OnInit } from '@angular/core';
import {MemoryService} from "../memory.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  moduleId: module.id,
})
export class HomeComponent implements OnInit {
  result:string;
  constructor(private memory:MemoryService) { }

  ngOnInit() {
    this.result=this.memory.current_patient;

  }

}
