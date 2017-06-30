import { Component, OnInit } from '@angular/core';
import {PatientService} from "../patient.service";
import {Router} from "@angular/router";
import {MemoryService} from "../../memory.service";

@Component({
  selector: 'app-delete-patient',
  templateUrl: './delete-patient.component.html',
  moduleId: module.id,
})
export class DeletePatientComponent implements OnInit {

  result:string;
  constructor(private patientservice:PatientService, private memory:MemoryService, private route: Router) { }

  ngOnInit() {
  }


  delete(){
    this.patientservice.delete().subscribe((data)=>{
      this.result=data;
      if(this.result=="1"){
        this.memory.current_patient="0";
        this.route.navigate(["../"])
      }
    })
  }

}
