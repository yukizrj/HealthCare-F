import { Injectable } from '@angular/core';
import {Http, Response, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class PatientloginService {

    constructor(private http: Http) { }

    login(email, pwd){
        let params: URLSearchParams=new URLSearchParams();
        params.set('email',email);
        params.set('pwd',pwd);
        let body=params;
        return this.http.post('http://localhost:9090/patient-login', body)
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
