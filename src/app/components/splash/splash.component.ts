import { Component, OnInit } from '@angular/core';
//============================================================
import { Http, Response} from '@angular/http'
import { map } from "rxjs/operators";
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';
//============================================================
declare var $: any;


@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {


@ViewChild('f') registerForm: NgForm;
// @ViewChild('b') loopTest;

  constructor(private http: Http) { }

  ngOnInit() {
  	$(function () {
  		$('[data-toggle="popover"]').popover()
	})
  }



// ====================working====================

	picdata: any:
	getPic(){
		this.http.get('https://jsonplaceholder.typicode.com/photos' )
			.subscribe (
				(res:Response) => {
				// console.log ('[In Function]');
				 this.picdata = res.json();
				 // console.log(this.picdata);
				
				})
	}

// ====================working====================






// https://jsonplaceholder.typicode.com/users
	testdata: any;
	test: any;
	test1: any;
	loop: any;
	i: any;

  	loopArticle(){
  		this.http.get('https://jsonplaceholder.typicode.com/users' )
			.subscribe (
				(res:Response) => {
				console.log ('[In Function]');
				 this.testdata = res.json();
				 console.log(this.testdata);
					 // this.test = testdata[3].name;
					 // this.test1 = testdata[4].name;

					 // this.loop = testdata[].name;

					 // console.log (testdata[3].name);
					 // console.log (testdata[4].name);

				 // this.output2 = rawJSON.people[0].craft;
				})
	}




  AlertMessage (){
  	
  	console.log ( 'alert');
  }


  quoteBody : 		any;
  quotedata:				any;

  	randomQuote(){

  		this.http.get ('https://talaikis.com/api/quotes/random/' )
			.subscribe (
				(res:Response) => {
				console.log ('[HERE]');
				 const quotedata = res.json();
				 this.quoteBody = quotedata.quote;
				})


  		
  		// {{ breakingNews}}
  		// https://talaikis.com/api/quotes/random/
  	}



	output : 		string;
  	output1 : 		any;
  	output2 : 		any;
  	output3 : 		any;
  	inputString : 	string;
  	username: 		string;
  	rawJSON:		any;
  	
  	// description = '';

  		crap = "skljfsdkljfsdlkjfdjkldjklsdgjksdfjklvklsdklfjklsdf"

	clickEvent(){
		// output = this.inputString.value;
		console.log("Space clicked");

		this.inputString = this.registerForm.value.inputString;

		console.log("[1]" + this.inputString);

		this.output = this.inputString;


		this.http.get ('http://api.open-notify.org/astros.json' )
			.subscribe (
				(res:Response) => {

				 const rawJSON = res.json();
				 console.log (rawJSON);
				 this.output1 = rawJSON.people[0].name;
				 this.output2 = rawJSON.people[0].craft;
				 this.output3 = this.crap;
				})
	}



	weather : 		string;
  	weather1 : 		any;
  	weather2 : 		any;
  	weather3 : 		any;
  	inputString2 : 	string;
   	weatherJSON:	any;
	// crapyWeather: 	string;
	weather_conditions: string;
  	

  	crapyWeather = "Here comes the rain again";


	GetWeather(){
		// output = this.inputString.value;
		console.log("Weather clicked");

		// this.inputString2 = this.weatherForm.value.inputString2;

		console.log("[1]" + this.inputString2);

		this.weather = this.inputString2;


		this.http.get ('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nashua%2Cnh%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys' )
			.subscribe (
				(res:Response) => {

				 const weatherJSON = res.json();
				 console.log (weatherJSON);
				 this.weather1 = weatherJSON.query.created;
				 this.weather2 = weatherJSON.query.results.channel.description;
				 this.weather3 = this.crapyWeather;
				 this.weather_conditions = weatherJSON.query.results.channel.item.title;
				})
	}

	






} /* END CLASS */
