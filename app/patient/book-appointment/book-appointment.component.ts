import { Component, OnInit } from '@angular/core';
import {PatientService} from "../patient.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  moduleId: module.id,
})
export class BookAppointmentComponent implements OnInit {

  constructor(private patientservice:PatientService, private route:Router) { }
  dt:string;
  pat_id:string;
  doc_id:string;
  day_id:string;
  spec:string;
  doc_name:string;
  begin:string;
  end:string;
  result:string;
  ngOnInit() {
    this.dt=this.patientservice.book_dt;
    this.pat_id=this.patientservice.book_pat_id;
    this.doc_id=this.patientservice.book_doc_id;
    this.day_id=this.patientservice.book_day_id;
    this.spec=this.patientservice.book_spec;
    this.doc_name=this.patientservice.book_doc_name;
    this.begin=this.patientservice.book_begin;
    this.end=this.patientservice.book_end;

    console.log("book info"+this.dt+" "+this.doc_id+" "+this.pat_id+" "+this.doc_name);
  }

  book(bdt:string, bpat_id:string, bdoc_id:string, bday_id:string){
    this.patientservice.book(bdt, bpat_id, bdoc_id, bday_id).subscribe((data)=>{
      this.result=data;
      console.log("book result:"+this.result);
    })
  }

  back(){
    this.route.navigate(['./patient/new-appointment']);
  }

}
