import { Injectable } from '@angular/core';
import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";


export interface  CanComponentDeactivate
{
  canDeactivate:()=> Observable<boolean> |Promise<boolean> |boolean;
}
export class CanDeactivateService  implements  CanDeactivate<CanComponentDeactivate>{
  canDeactivate(component: CanComponentDeactivate,
                route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot,
                nextState?:RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    return component.canDeactivate();
  }

  constructor() { }

}
