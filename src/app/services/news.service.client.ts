// import { map } from "rxjs/operators";
import { Http, Response, RequestOptions} from '@angular/http';
import {Injectable} from '@angular/core';
// import {environment} from '../../environments/environment';
import { ModuleWithProviders} from '@angular/core';
// import {User} from '../models/user.models.client'
import { SharedService } from './shared.service.client';
import { Router} from '@angular/router';



@Injectable()

export class NewsServices 
	{

		// baseUrl = environment.baseUrl;
		// rssUrl  = 
		// options: RequestOptions = new RequestOptions();

		constructor(private http: Http,
					private sharedService: SharedService,
					private router: Router	){}
		







	}  // END NEWS SERVICES FUNCTION




// Export the routes as module providers
// export const Services: ModuleWithProviders = ServicesModule.forRoot(NewsServices);
