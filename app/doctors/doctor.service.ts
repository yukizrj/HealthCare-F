import { Injectable } from '@angular/core';
import {Http, Response, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {MemoryService} from "../memory.service";

@Injectable()
export class DoctorService {

    constructor(private http: Http, private memory:MemoryService) { }



    view(doc_id){
        let params:URLSearchParams=new URLSearchParams();
        params.set("doc_id",doc_id);
        console.log("params pat_id"+doc_id);
        let body=params;
        return this.http.post('http://localhost:9090/appointment-view-doctor', body)
            .map(
                (res:Response)=>res.json()
            )
    }

    viewSchedule(doc_id){
        let params:URLSearchParams=new URLSearchParams();
        params.set("doc_id",doc_id);
        console.log("params pat_id"+doc_id);
        let body=params;
        return this.http.post('http://localhost:9090/doctor-view-schedule', body)
            .map(
                (res:Response)=>res.json()
            )
    }

    profileChange(pwd){
        let params:URLSearchParams=new URLSearchParams();
        params.set("doc_id", this.memory.current_doctor);
        params.set("pwd",pwd);
        let body=params;
        return this.http.post('http://localhost:9090/doctor-update',body)
            .map(
                (res:Response)=>
                {
                    return res.text()
                }
            )

    }

    getDetail(doc_id2){
        /*console.log("doctor detail id"+doc_id2)*/
        let params:URLSearchParams=new URLSearchParams();
        params.set("doc_id2",doc_id2);
        let body=params;
        return this.http.post('http://localhost:9090/doctor-search',body)
            .map(
                    (res:Response)=>
                    {console.log("Doctor detail response "+res.text());
                        return res.json()
                    }

            )
    }

}

