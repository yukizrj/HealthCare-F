import { Component, OnInit } from '@angular/core';
import {Route} from "./patient-routes.config";
import {LocationStrategy, PlatformLocation, Location} from '@angular/common';

declare var $:any;
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  moduleId: module.id,
})
export class PatientComponent implements OnInit {

  public menuItems: any[];
  ngOnInit() {
    $.getScript('../../assets/js/sidebar-moving-tab.js');
    $.getScript('../../assets/js/material-dashboard.js');
    $.getScript('../../assets/js/initMenu.js');
    this.menuItems = Route.filter(menuItem => menuItem);
  }
  location: Location;
  constructor(location:Location) {
    this.location = location;
  }
  public isMaps(path){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice( 1 );
    if(path == titlee){
      return false;
    }
    else {
      return true;
    }
  }
}
