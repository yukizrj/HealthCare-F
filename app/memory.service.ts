import { Injectable } from '@angular/core';

@Injectable()
export class MemoryService {
    current_admin:string;  //username
    current_patient:string;  //email
    current_doctor:string;
    current_doctor2:string;
    //licenseno
   /* constructor(current_admin, current_patient, current_doctor) {
        this.current_admin=current_admin;
        this.current_doctor=current_doctor;
        this.current_patient=current_patient;
    }*/
   constructor(){}


}
