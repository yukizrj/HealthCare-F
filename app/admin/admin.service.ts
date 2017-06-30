import { Injectable } from '@angular/core';
import {Http, Response, URLSearchParams} from "@angular/http";
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';

import {MemoryService} from "../memory.service";

@Injectable()
export class AdminService {
    editdata:string;
    li:string;
    liname:string;
    liemail:string;
    doctor_detail:{
        "doc_id":string;
        "doc_email": string,
        "doc_name": string,
        "doc_spe": string,
        "doc_pwd": string,
        "doc_license":string
    };
    constructor(private http: Http, private memory:MemoryService) { }
    addDoctor(email, license, name, pwd, spe_id){
        let params: URLSearchParams=new URLSearchParams();
        params.set('email',email);
        params.set('license',license);
        params.set('name',name);
        params.set('pwd',pwd);
        params.set('spe_id',spe_id);
        console.log(spe_id);
        let body=params;

        return this.http.post('http://localhost:9090/doctor-save',body)
            .map(
                (res:Response) =>
                {
                    console.log("response "+res);
                   return  res.json()
                }

            )

    }
    searchDoctor(name){
        let params: URLSearchParams=new URLSearchParams();
            params.set("name",name);
        let body=params;
        return this.http.post('http://localhost:9090/doctor-search-name',body)
            .map(
                (res:Response) =>
                {
                    return res.json()
                }
            )

    }
    profileChange(pwd){
        let params:URLSearchParams=new URLSearchParams();
        params.set("username", this.memory.current_admin);
        params.set("pwd",pwd);
        let body=params;
        return this.http.post('http://localhost:9090/admin-update',body)
            .map(
                (res:Response)=>
                {
                    return res.text()
                }
            )

    }

    geteditDoctor(slicense){
        let params:URLSearchParams=new URLSearchParams();
        params.set("license",slicense);
        console.log(slicense);
      /*  let body=params;*/
        return this.http.get('http://localhost:9090/doctor-search-license', {search:params})
            .map(
                (res:Response)=>
                {
                      this.doctor_detail=res.json();
                      console.log(this.doctor_detail);
                    return this.doctor_detail;
                }
            )

    }
    editDoctor(elicense,eemail, ename, espe_id, eid, epwd){
        let params:URLSearchParams=new URLSearchParams();
        params.set("license",elicense);
        params.set("email",eemail);
        params.set("name",ename);
        params.set("spe_id",espe_id);
        params.set("id", eid);
        params.set("pwd",epwd);
        console.log("spe is"+espe_id);
        let body=params;
        return this.http.post('http://localhost:9090/doctor-edit', body)
            .map(
                (res:Response)=>
                {
                    console.log("ser run"+res);
                    return res.json();
                }
            )

    }
    schedule(license,totalstring){
        let params:URLSearchParams=new URLSearchParams();
        params.set("schedule",totalstring);
        let body=params;
        return this.http.post('http://localhost:9090/doctor-schedule-save/'+license, body)
            .map(
                (res:Response)=>
                {
                    return res.json();
                }
            )
    }
}
