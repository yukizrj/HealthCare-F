import { Component, OnInit } from '@angular/core';
import {Route} from "./doctors-routes.config";
import {LocationStrategy, PlatformLocation, Location} from '@angular/common';

declare var $:any;
@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  moduleId: module.id,
})
export class DoctorsComponent implements OnInit {

  public menuItems: any[];
  ngOnInit() {
    $.getScript('../../assets/js/sidebar-moving-tab.js');
    $.getScript('../../assets/js/material-dashboard.js');
    $.getScript('../../assets/js/initMenu.js');
    this.menuItems = Route.filter(menuItem => menuItem);
    console.log(this.menuItems);
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
