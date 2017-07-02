import { Injectable } from '@angular/core';
import {Http, Response, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {MemoryService} from "../memory.service";

@Injectable()
export class PatientService {

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

    searchDoctor(dt,spec,id){
        let params:URLSearchParams=new URLSearchParams();
        params.set("dt",dt);
        params.set("spec",spec);
        params.set("id",id);
        let body=params;
        return this.http.post('http://localhost:9090/appointment-browse', body)
            .map(
                (res:Response)=>res.json()
            )

    }
}
