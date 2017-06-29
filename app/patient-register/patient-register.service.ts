import { Injectable } from '@angular/core';
import {Http, Response, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class PatientRegisterService {

    constructor(private http: Http) { }

    register(dob,email,gender,name,pwd){
        let params:URLSearchParams=new URLSearchParams();
        params.set("dob",dob);
        params.set("email",email);
        params.set("gender",gender);
        params.set("name", name);
        params.set("pwd",pwd);
        console.log("service dob"+dob);
        let body=params;
        return this.http.post('http://localhost:9090/patient-save',body)
            .map(
                (res:Response) => res.text()
            )
            .catch(
                (error:Response)=>
                {
                    console.log('Somthing went wrong with the request');
                    return Observable.throw(error);
                }

            )
    }
}
