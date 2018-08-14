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
  }


   logout() {
        this.userService.logout().subscribe(
          (data: any) => {
            this.router.navigate(['/login'])
          }
       );

  }


    // rssURL = "https://api.rss2json.com/v1/api.json?rss_url="
    newsData: any[];
    parsedNewsData: any[] = [];
    newsDataAny: any;
    newsoutput1: any;
    newsoutput2:  any;

    getNewsSports(){
       
        this.http.get('https://api.rss2json.com/v1/api.json?rss_url=https://abcnews.go.com/abcnews/topstories' )
            .subscribe (
                (res:Response) => {
                console.log("Function = getNewsSports");
                
                 // this.newsDataAny = res.json();
                 this.newsData = res.json();
                 // console.log(res.json());
                 // console.log(this.newsDataAny.items);
                 console.log( this.parsedNewsData);

                 // console.log(rawJSON.items[3].title);
                 // this.newsoutput1 = rawJSON.items[3].title;
                 // this.newsoutput2 = rawJSON.items[3].description;

                     // LOOP
                for(let i=0; i< 10; i++) {
                        console.log("i = " +i);
                        this.parsedNewsData.push(this.newsData[i]);
                        console.log(this.newsData[i]);
                        // rawJSON.items.push(this.newsoutput1[i]);
                        // console.log(this.newsoutput1[i]);
                }



                 // LOOP
                // for(let i=0; i< 10; i++) {
                //     console.log(i);
                //         this.parsedNewsData.push(this.newsData[i]);
                // }
             }    
           )
    }



 // const rawJSON = res.json();
 //                 console.log (rawJSON);
 //                 this.output1 = rawJSON.people[0].name;
 //                 this.output2 = rawJSON.people[0].craft;
 //                 this.output3 = this.crap;












// } end Class
}

