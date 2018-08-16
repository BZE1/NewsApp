import { Component, OnInit } from '@angular/core';
//============================================================
import { Http, Response} from '@angular/http'
import { map } from "rxjs/operators";
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';

// import { NewsService } from '../../services.news.service.client';
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

  ex_1_header: string;
  ex_2_header: string;
  ex_3_header: string;

  ex_1_title: string;
  ex_2_title: string;
  ex_3_title: string;


  ngOnInit() {
  	$(function () {
  		$('[data-toggle="popover"]').popover()
	})

  	this.quickQuote();
  	this.divTest();


  	this.ex_1_header = "ex_1_header";
  	this.ex_2_header = "ex_2_header";
  	this.ex_3_header = "ex_3_header";
  	this.ex_1_title = "ex_1_title";
  	this.ex_2_title = 'ex_2_title';
  	this.ex_3_title = 'ex_3_title';

  	// console.log("Function = ngOnInit");

  }



// ====================working====================

	picdata: any[];
	parsedPicData: any[] = [];

	getPic(){
		this.http.get('https://jsonplaceholder.typicode.com/photos' )
			.subscribe (
				(res:Response) => {
				// console.log("Function = getPic");
				// console.log ('[In Function]');
				 this.picdata = res.json();
				 // console.log(res.json());
				for(let i=0; i< 10; i++) {
					// console.log(i);
						this.parsedPicData.push(this.picdata[i]);
				}
				}	
				)
	}

	


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
				// console.log("Function = loopArticle");
				 this.testdata = res.json();
				 // console.log(this.testdata);
			
				})
	}




  AlertMessage (){
  	// console.log("Function = AlertMessage");
  	// console.log ( 'alert');
  }


  quoteBody : 	any;
  quotedata:	any;

  	randomQuote(){

  		this.http.get ('https://talaikis.com/api/quotes/random/' )
			.subscribe (
				(res:Response) => {
				// console.log("Function = randomQuote");
				 const quotedata = res.json();
				 this.quoteBody = quotedata.quote;
				})


  		
  		// {{ breakingNews}}
  		// https://talaikis.com/api/quotes/random/
  	}


  	quick1Body : 	any;
  	quick1data:		any;
  	quick2Body : 	any;
  	quick2data:		any;

  	quickQuote(){

  		this.http.get ('https://talaikis.com/api/quotes/random/' )
			.subscribe (
				(res:Response) => {
				// console.log ('[HERE]');
				// console.log("Function = quickQuote 1");
				 const quick1data = res.json();
				 this.quick1Body = quick1data.quote;
				 // console.log (this.quick1Body);
				})
  		
		this.http.get ('https://talaikis.com/api/quotes/random/' )
			.subscribe (
				(res:Response) => {
				// console.log ('[HERE-2]');
				// console.log("Function = quickQuote 2");
				 const quick2data = res.json();
				 this.quick2Body = quick2data.quote;
				 // console.log (this.quick2Body);
				})


  		// {{ quickBody}}
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
		// console.log("Function = clickEvent");
		this.inputString = this.registerForm.value.inputString;
		// console.log("[1]" + this.inputString);

		this.output = 'You Entered : ' + this.inputString;


		this.http.get ('http://api.open-notify.org/astros.json' )
			.subscribe (
				(res:Response) => {

				 const rawJSON = res.json();
				 // console.log (rawJSON);
				 this.output1 = rawJSON.people[0].name;
				 this.output2 = rawJSON.people[0].craft;
				 this.output3 = this.crap;
				})
	}



	outputH1tag: any;
	outputPtag:	any;
	outputDiv:	any;
	testVar: any;

	injectionTest1: string;
	injectionTest2: string;

	divTest(){

		this.outputH1tag = "My name is : ";
		this.outputPtag	= "Chris   !!!";

		this.outputDiv = this.outputH1tag + this.outputPtag;
	 
	 	this.testVar = ``;

	 	this.injectionTest1 = " [[ Insert text 1 ]] sint! Culpa in aliquam ut consectetur nam illum eaque iste doloremque, aliquid, deleniti nemo dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, expedita, vero.";
	 	this.injectionTest2 = " [[ Insert text 2 ]] aliquam ut consectetur nam illum eaque iste doloremque, aliquid, deleniti nemo dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, expedita, vero. Illo, soluta  ";

	 	// this.outputDiv: 	`
	  //   <h1>{{outputH1tag}}</h1>
	  //   <p>{{outputPtag}}</p>
	 	// 	 `;
	}






	weather : 		string;
  	weather1 : 		any;
  	weather2 : 		any;
  	weather3 : 		any;
  	inputString2 : 	string;
   	weatherJSON:	any;
	// crapyWeather: 	string;
	weather_conditions: string;


	inputCity: any;
	inputState: any;
	outputCity: any;
	outputState: any;

	GetWeather(){
		// console.log("Function = GetWeather");
		// console.log("[city :]" + this.inputCity);
		// console.log("[state :]" + this.inputState);

		this.outputCity = 'City: ' + this.inputCity;
		this.outputState = 'State: ' + this.inputState;

		this.http.get ('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22'+this.inputCity+'%2C'+this.inputState+'%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys' )
			.subscribe (
				(res:Response) => {
				 const weatherJSON = res.json();
				 // console.log (weatherJSON);
				 // this.weather1 = weatherJSON.query.created;
				 // this.weather2 = weatherJSON.query.results.channel.description;
				 // this.weather3 = this.crapyWeather;
				 this.weather_conditions = weatherJSON.query.results.channel.item.title;
				 // console.log (this.weather_conditions);
				})
	}
	












} /* END CLASS */
