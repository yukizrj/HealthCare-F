import { Component, OnInit } from '@angular/core';
import {AdminService} from "../admin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-deletedoctor',
  templateUrl: './deletedoctor.component.html',
  moduleId: module.id,
})
export class DeletedoctorComponent implements OnInit {
  editdata:string;
  li:string;
  liname:string;
  liemail:string;
  result: [
  {
    "id": number,
    "license_no": string,
    "name": string,
    "email": string,
    "password": string,
    "speciality": {
      "id": number,
      "name": string,
    },
    "day": {
      "id":number,
      "begin_time":string,
      "day":number,
      "end_time":string,
    }
    }
  ]
  editresult:string;
  constructor(private adminservice:AdminService, private route:Router) { }

  ngOnInit() {
  }
  searchDoctor(name:string) {
    this.adminservice.searchDoctor(name).subscribe((data) => {
      this.result = data;

    });
  }

  geteditDoctor(slicense:string){

    this.adminservice.geteditDoctor(slicense).subscribe((data)=>
    {
      console.log('Doctor details '+data);
      /*this.adminservice.editdata=data;
      this.adminservice.li=this.editdata.charAt(0);
      this.adminservice.liname=this.editdata.charAt(2);
      this.adminservice.liemail=this.editdata.charAt(1);
      this.route.navigate(["/admin./edit"]);*/
      this.route.navigate(["./admin/edit"]);
    })
  }

  /*editDoctor(elicense:string,eemail:string, ename:string, espe_id:string){
    this.adminservice.editDoctor(elicense,eemail,ename,espe_id).subscribe((data)=>
    {
      this.editresult=data;
      this.li=this.editdata.charAt(0);
      this.liname=this.editdata.charAt(2);
      this.liemail=this.editdata.charAt(1);
    })
  }*/


}

