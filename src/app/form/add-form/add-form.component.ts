import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';

export class Form {
    _id: any;
    f_name: any;
    l_name: any;
    email: any;
    mobile: any;
    address: any;
    constructor() {
  }
}
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

AppleStock: any;
GoogleStock: any;
MicrosoftStock: any;
AmazonStock: any;
FacebookStock: any;
env = environment.apiBase;
Stocks: Array<any> = [];
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
AddApple() {
   const apple = {
    productName:"Apple",
    productLow : this.AppleStock.lowPrice,
    productHigh: this.AppleStock.highPrice,
    prodImg: 'apple.png',
   }
   const url = this.env + 'stocks';
   this.http.post(url, apple).subscribe( (res: any) => {
  this.getStocksWatch();

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
AddGoogle() {
   const Google = {
    productName :"Google",
    productLow :this.GoogleStock.lowPrice,
    productHigh: this.GoogleStock.highPrice,
    prodImg: 'google.png',
   }
   const url = this.env + 'stocks';
   this.http.post(url, Google).subscribe( (res: any) => {
  this.getStocksWatch();

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
AddMicrosoft() {
   const micro = {
    productName: "Microsoft",
    productLow: this.MicrosoftStock.lowPrice,
    productHigh: this.MicrosoftStock.highPrice,
    prodImg: 'microsoft.png',
   }
   const url = this.env + 'stocks';
   this.http.post(url, micro).subscribe( (res: any) => {
  this.getStocksWatch();

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
AddAmazon() {
   const amazon = {
    productName:"Amazon",
    productLow: this.AmazonStock.lowPrice,
    productHigh: this.AmazonStock.highPrice,
    prodImg: 'amazon.png',
   }
   const url = this.env + 'stocks';
   this.http.post(url, amazon).subscribe( (res: any) => {
  this.getStocksWatch();

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
AddFacebook() {
   const fb = {
    productName: "Facebook",
    productLow: this.FacebookStock.lowPrice,
    productHigh: this.FacebookStock.highPrice,
    prodImg: 'fb.png',
   }
   const url = this.env + 'stocks';
   this.http.post(url, fb).subscribe( (res: any) => {
   this.getStocksWatch();

  }, error => {
    console.log(error);
  });
}
getStocksWatch() {
  const url = this.env + 'stocks';
   this.http.get(url).subscribe( (res: any) => {
   this.Stocks.push(JSON.parse(res._body));
   console.log( this.Stocks);
  }, error => {
    console.log(error);
  });
}
ngOnInit() {
setTimeout( () => {
  this.getStocksWatch();
  this.getApple();
  this.getGoogle();
  this.getMicrosoft();
  this.getAmazon();
  this.getFacebook();
  },1000)
  
}
}
