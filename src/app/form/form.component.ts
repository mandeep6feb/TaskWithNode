import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http } from '@angular/http';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
form: any;
AppleStock: any;
GoogleStock: any;
MicrosoftStock: any;
AmazonStock: any;
FacebookStock: any;
env = environment.apiBase;
constructor(private http: Http) {
}
getApple() {
	 const url = this.env + 'api' + '/Apple';
	 this.http.get(url).subscribe( (res: any) => {
   this.AppleStock = JSON.parse(res._body).results[0];
  }, error => {
    console.log(error);
  });
}
getGoogle() {
   const url = this.env + 'api' + '/Google';
   this.http.get(url).subscribe( (res: any) => {
   this.GoogleStock = JSON.parse(res._body).results[0];
  }, error => {
    console.log(error);
  });
}
getMicrosoft() {
   const url = this.env + 'api' + '/Microsoft';
   this.http.get(url).subscribe( (res: any) => {
   this.MicrosoftStock = JSON.parse(res._body).results[0];
  }, error => {
    console.log(error);
  });
}
getAmazon() {
   const url = this.env + 'api' + '/Amazon';
   this.http.get(url).subscribe( (res: any) => {
   this.AmazonStock = JSON.parse(res._body).results[0];
  }, error => {
    console.log(error);
  });
}
getFacebook() {
   const url = this.env + 'api' + '/Facebook';
   this.http.get(url).subscribe( (res: any) => {
   this.FacebookStock = JSON.parse(res._body).results[0];
  }, error => {
    console.log(error);
  });
}
ngOnInit() {
  this.getApple();
  this.getGoogle();
  this.getMicrosoft();
  this.getAmazon();
  this.getFacebook();
}
}
