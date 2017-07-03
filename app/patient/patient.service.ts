import { Injectable } from '@angular/core';
import {Http, Response, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {MemoryService} from "../memory.service";

@Injectable()
export class PatientService {
    book_pat_id:string;
    book_dt:string;
    book_doc_id:string;
    book_day_id:string;
    book_spec:string;
    book_doc_name:string;
    book_begin:string;
    book_end:string;
    constructor(private http: Http, private memory:MemoryService) { }

    delete(pwd){

       let params: URLSearchParams=new URLSearchParams();
        params.set('id', this.memory.current_patient);
        params.set("pwd",pwd);
        let body=params;
        return this.http.post('http://localhost:9090/patient-delete', body)
            .map(
                (res:Response) => res.text()
            )

    }

    searchDoctor(dt,spec,pat_id){
        let params:URLSearchParams=new URLSearchParams();
        params.set("dt",dt);
        params.set("spec",spec);
        params.set("id",pat_id);
        let body=params;
        return this.http.post('http://localhost:9090/appointment-browse', body)
            .map(
                (res:Response)=>res.json()
            )

    }

    book(bdt, bpat_id, bdoc_id, bday_id){
        let params:URLSearchParams=new URLSearchParams();
        params.set("dt",bdt);
        params.set("pat_id",bpat_id);
        params.set("doc_id",bdoc_id);
        params.set("day_id",bday_id);
        let body=params;
        return this.http.post('http://localhost:9090/appointment-save', body)
            .map(
                (res:Response)=>res.json()
            )
    }

    view(pat_id){
        let params:URLSearchParams=new URLSearchParams();
        params.set("pat_id",pat_id);
        console.log("params pat_id"+pat_id);
        let body=params;
        return this.http.post('http://localhost:9090/appointment-view-patient', body)
            .map(
                (res:Response)=>res.json()
            )
    }

    profileChange(pwd){
        let params:URLSearchParams=new URLSearchParams();
        params.set("pat_id", this.memory.current_patient);
        params.set("pwd",pwd);
        let body=params;
        return this.http.post('http://localhost:9090/patient-update',body)
            .map(
                (res:Response)=>
                {
                    return res.text()
                }
            )

    }
}
