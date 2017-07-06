
import { Component, OnInit } from '@angular/core';
import {MemoryService} from "../../memory.service";
import {DoctorService} from "../doctor.service";


@Component({
    selector: 'app-doctor-view-profile',
    templateUrl: './doctor-view-profile.component.html',
    moduleId: module.id,
})
export class DoctorViewProfileComponent implements OnInit {
    doc_id2:string;
doctor_detail:any;
    constructor(private memory:MemoryService,private doctor:DoctorService) { }

    ngOnInit() {

       this.doc_id2= this.memory.current_doctor2;
        console.log(this.doc_id2);
        }
    getDetail()
    {
        this.doctor.getDetail(this.doc_id2)
            .subscribe(
                (data)=>
                {
                    this.doctor_detail=data;
                    console.log(this.doctor_detail);
                }
            )
    }


}
