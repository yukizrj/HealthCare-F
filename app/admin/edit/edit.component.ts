import { Component, OnInit } from '@angular/core';
import {AdminService} from "../admin.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  moduleId: module.id,
})
export class EditComponent implements OnInit {
  doc_name:string;
  doc_email:string;
  doc_id:string;
  doc_pwd:string;
  doc_license:string;
  editresult:string;
  constructor(private adminservice:AdminService) { }
  ngOnInit() {
    this.doc_id=this.adminservice.doctor_detail.doc_id;
    this.doc_name=this.adminservice.doctor_detail.doc_name;
    this.doc_email=this.adminservice.doctor_detail.doc_email;
    this.doc_license=this.adminservice.doctor_detail.doc_license;
    this.doc_pwd=this.adminservice.doctor_detail.doc_pwd;
  }
  editDoctor(elicense:string,eemail:string, ename:string, espe_id:string, eid:string, epwd:string){
    this.adminservice.editDoctor(elicense,eemail,ename,espe_id, eid, epwd).subscribe((data)=>
    {
     this.editresult=data;

    })
  }

}
