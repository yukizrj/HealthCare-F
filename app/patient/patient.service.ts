import { Injectable } from '@angular/core';
import {Http, Response, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {MemoryService} from "../memory.service";

@Injectable()
export class PatientService {

    constructor(private http: Http, private memory:MemoryService) { }

    delete(){

       let params: URLSearchParams=new URLSearchParams();
        params.set('email', this.memory.current_patient);
        let body=params;
        return this.http.post('http://localhost:9090/patient-delete', body)
            .map(
                (res:Response) => res.text()
            )

    }
}
