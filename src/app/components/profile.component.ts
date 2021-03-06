import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router-deprecated';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
import { contentHeaders } from '../common/headers';

let template = require('../static/login.html');

//TODO: Recheck and make this component useful. ( mostly sample code )

@Component({
  selector: 'profile',
  directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES ],
  template: template,
})
export class ProfileComponent {
  constructor(public router: Router, public http: Http) {
  }
  login(event, username, password) {
    event.preventDefault();
    let body = JSON.stringify({ username, password });
    this.http.post('http://localhost:3001/sessions/create', body, { headers: contentHeaders })
      .subscribe(
        response => {
          localStorage.setItem('jwt', response.json().id_token);
          this.router.parent.navigateByUrl('/home');
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }
  componentWillMount(){
    template = '<md-progress-bar mode="indeterminate" color="primary" ></md-progress-bar>';
  }
  signup(event) {
    event.preventDefault();
    this.router.parent.navigateByUrl('/signup');
  }
}

