import {Component, OnInit, HostListener} from '@angular/core';
import {RouterLink, Router} from '@angular/router-deprecated';
import { UserService } from '../services/user.service';
import {AppState} from "../app.service";

let template = require('../static/ui/navbar.html');
@Component({
  selector: 'navbar',
  template: template,
  directives: [RouterLink],
  providers: [UserService]
})
//TODO: Make profile image and profile name change to user's info on the right side
export class NavbarComponent implements OnInit {
  localState = {
    isDropDownOpen: false,
    isContactFormOpen: false,
    isLoginFormOpen: false,
    navTitle: 'Home'
  };

  //name default values
  constructor( private userService: UserService, private appState: AppState){
    // this.isLoggedIn = userService.isLoggedIn();
  }
  setNavTitle(text: string){
    this.localState.navTitle = text;
  }
  toggleDropDown(){
    this.localState.isDropDownOpen = !(this.localState.isDropDownOpen);
    console.dir(this.localState.isDropDownOpen);
  }
  toggleContactForm(){
    this.localState.isContactFormOpen = !(this.localState.isContactFormOpen);
    console.dir(this.localState.isContactFormOpen);
  }
  //TODO: Find out why this function is here...
  toggleLoginForm(){
    this.localState.isLoginFormOpen = !(this.localState.isLoginFormOpen);
  }
  ngOnInit(){
  }

}
