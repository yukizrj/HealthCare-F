import { Component, OnInit } from '@angular/core';
import {AdminService} from "../admin.service";
declare var $:any;
@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  moduleId: module.id,
})
export class AdddoctorComponent implements OnInit {

  result:string;
  constructor(private adminservice: AdminService) { }

  ngOnInit() {
    $.getScript('../../assets/js/demo.js');
  }

  addDoctor(email:string, license:string, name:string, pwd:string, spe_id:string){
    this.adminservice.addDoctor(email, license, name, pwd, spe_id).subscribe((data)=>{
      this.result=data;
    });

    console.log(this.result);


    //return "demo.showNotification('top','center')";
  }


  methodInsideYourComponent(value:string):void
  {
    alert('Submitted value: ' + value);
  }


}
