import { Component, OnInit } from '@angular/core';
import {AdminService} from "../admin.service";

@Component({
  selector: 'app-scheduledoctor',
  templateUrl: './scheduledoctor.component.html',
  moduleId: module.id,
})
export class ScheduledoctorComponent implements OnInit {

    mstring:string;
    tustring:string;
    wstring:string;
    tstring:string;
    fstring:string;
    sstring:string;
    sustring:string;
    totalstring=[];
    result:string;
  constructor(private adminservice:AdminService) { }

  ngOnInit() {
  }
scheduledata(license:string,mday:boolean,mbegin:string,mend:string,tuday:boolean,tubegin:string,tuend:string,wday:boolean,wbegin:string,wend:string,tday:boolean,tbegin:string,tend:string,fday:boolean,fbegin:string,fend:string,sday:boolean,sbegin:string,send:string,suday:boolean,subegin:string,suend:string)
{
   if(mday==true){
       this.mstring="1-"+mbegin+"-"+mend;
       this.totalstring.push(this.mstring);
   }
   if(tuday==true){
       this.tustring="2-"+tubegin+"-"+tuend;
       this.totalstring.push(this.tustring);
   }
   if(wday==true){
       this.wstring="3-"+wbegin+"-"+wend;
       this.totalstring.push(this.wstring);
   }
   if(tday==true){
       this.tstring="4-"+tbegin+"-"+tend;
       this.totalstring.push(this.tstring);
   }
   if(fday==true){
      this.fstring="5-"+fbegin+"-"+fend;
       this.totalstring.push(this.fstring);
   }
   if(sday==true){
       this.sstring="6-"+sbegin+"-"+send;
       this.totalstring.push(this.sstring);
   }
   if(suday==true){
       this.sustring="7-"+subegin+"-"+suend;
       this.totalstring.push(this.sustring);
   }
    console.log("total"+this.totalstring);
   this.schedule(license,this.totalstring);
   this.totalstring=[];
}

    schedule(license,totalstring){
        this.adminservice.schedule(license,totalstring).subscribe((data)=>{
            this.result=data;
            console.log(this.result);
        })
    }



}
