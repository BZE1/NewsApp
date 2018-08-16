import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { UserService } from '../../services/user.service.client'
import { SharedService } from '../../services/shared.service.client'
import { ActivatedRoute, Router } from '@angular/router'
import { NewsServices } from '../../services/news.service.client';
// import { map } from "rxjs/operators";
import {Http, Response, RequestOptions} from '@angular/http';
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})




export class NewsComponent implements OnInit {

            // newsForm
    @ViewChild('f') newsForm: NgForm;

  constructor(private userService: UserService,
  			  private router: Router,
              private newsservice: NewsServices,
              private sharedservice: SharedService,
              private http: Http) { }

  ngOnInit() {
    this.getNewsSports();
    this.getNewsMoney();
    this.getNewsMTech();
  }


   logout() {
       
        this.userService.logout().subscribe(
          (data: any) => {
            
            this.router.navigate(['/login'])
          }
       );
        
  }


   codetest: any;

    testCode() {
   
      let codetest = 'button clicked';
    }



    newsItemCat : any;
    newsItem_1_Title: any;
    newsItem_1_Content: any;

    newsDataJson: any;
    parsedNewsData: any[] = [];

 getNewsSports(){
       
        this.http.get('https://api.rss2json.com/v1/api.json?rss_url=https://abcnews.go.com/abcnews/topstories' )
            .subscribe (
                (res:Response) => {

                this.newsDataJson = res.json();
                
                for(let i=0; i< 5; i++) {
                   
                        this.parsedNewsData.push(this.newsDataJson.items[i]);
                }


               })
        }

    newsMoneyDataJson;
    parsedNewsMoneyData: any[] = [];

 getNewsMoney(){
      
        this.http.get('https://api.rss2json.com/v1/api.json?rss_url=https://abcnews.go.com/abcnews/moneyheadlines' )
            .subscribe (
                (res:Response) => {

                this.newsMoneyDataJson = res.json();
                
                for(let i=0; i< 5; i++) {
                    
                        this.parsedNewsMoneyData.push(this. newsMoneyDataJson.items[i]);
                }


               })
        }

    newsTechDataJson: any;
    parsedNewsTechData: any[] = [];

 getNewsMTech(){
       
        this.http.get('https://api.rss2json.com/v1/api.json?rss_url=https://abcnews.go.com/abcnews/technologyheadlines' )
            .subscribe (
                (res:Response) => {

                this.newsTechDataJson = res.json();
               

                for(let i=0; i< 5; i++) {
                    
                        this.parsedNewsTechData.push(this. newsTechDataJson.items[i]);
                }


               })
        }


  







// } end Class
}

