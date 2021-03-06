import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Http } from '@angular/http';
import { Router } from '@angular/router-deprecated';
import { AuthHttp, JwtHelper} from 'angular2-jwt';

let template = require('../static/home.html');
let style = require('../static/css/home.css');
//TODO: Basically rework this entire component

@Component({
  selector: 'home',
  directives: [CORE_DIRECTIVES],
  template: template,
  styles: [style]
})
export class HomeComponent {
  jwt: string;
  decodedJwt: string;
  response: string;
  api: string;
  jwtHelper: JwtHelper = new JwtHelper();
  constructor(public router: Router, public http: Http, public authHttp: AuthHttp) {

    this.jwt = localStorage.getItem('jwt');
    this.decodedJwt = this.jwt && this.jwtHelper.decodeToken(this.jwt);
  }

  // logout() {
  //   localStorage.removeItem('jwt');
  //   this.router.parent.navigateByUrl('/login');
  // }
  //
  // callAnonymousApi() {
  //   this._callApi('Anonymous', 'http://localhost:3001/api/random-quote');
  // }
  //
  // callSecuredApi() {
  //   this._callApi('Secured', 'http://localhost:3001/api/protected/random-quote');
  // }
  //
  // _callApi(type, url) {
  //   this.response = null;
  //   if (type === 'Anonymous') {
  //     // For non-protected routes, just use Http
  //     this.http.get(url)
  //       .subscribe(
  //         response => this.response = response.text(),
  //         error => this.response = error.text()
  //       );
  //   }
  //   if (type === 'Secured') {
  //     // For protected routes, use AuthHttp
  //     this.authHttp.get(url)
  //       .subscribe(
  //         response => this.response = response.text(),
  //         error => this.response = error.text()
  //       );
  //   }
  // }
}
