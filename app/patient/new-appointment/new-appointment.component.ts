import { Component, OnInit } from '@angular/core';
import {PatientService} from "../patient.service";
import {MemoryService} from "../../memory.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  moduleId: module.id,
})
export class NewAppointmentComponent implements OnInit {

 result:Array<any>;
 exist:string;
  constructor(private patientservice:PatientService, private memory:MemoryService, private route:Router) { }

  ngOnInit() {
  }

  searchDoctor(dt:string,spec:string){
    this.patientservice.book_pat_id=this.memory.current_patient;
    this.patientservice.searchDoctor(dt,spec,this.patientservice.book_pat_id).subscribe((data)=>{
          this.result=data;
          this.patientservice.book_dt=dt;
          this.patientservice.book_spec=spec;
          if(this.result==null){
              this.exist="1";
          }else{
              this.exist="0";
              /*this.result=null;*/
          }
          console.log("result"+this.result);

    })
  }

  bookselect(doc_id:string,day_id:string,doc_name:string, begin:string, end:string){
      this.patientservice.book_doc_id=doc_id;
      this.patientservice.book_day_id=day_id;
      this.patientservice.book_doc_name=doc_name;
      this.patientservice.book_begin=begin;
      this.patientservice.book_end=end;
      this.route.navigate(['./patient/book-appointment']);
  }



}
