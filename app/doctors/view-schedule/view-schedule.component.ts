import { Component, OnInit } from '@angular/core';
import {MemoryService} from "../../memory.service";
import {DoctorService} from "../doctor.service";

@Component({
    selector: 'app-view-schedule',
    templateUrl: './view-schedule.component.html',
    moduleId: module.id,
})
export class ViewScheduleComponent implements OnInit {

    doc_id:string;
    result:Array<any>;
    constructor(private memory:MemoryService, private doctorservice:DoctorService) { }

    ngOnInit() {
        this.doc_id=this.memory.current_doctor;
        console.log("doc_id "+this.doc_id);
    }

    viewSchedule(doc_id){
        this.doctorservice.viewSchedule(this.doc_id).subscribe((data)=>{
            this.result=data;
        })
    }

}
