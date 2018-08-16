import { Component, OnInit } from '@angular/core';



import { NgForm } from '@angular/forms'
import { UserService } from '../../services/user.service.client'
import { SharedService } from '../../services/shared.service.client'
import { ActivatedRoute, Router } from '@angular/router'
import { NewsServices } from '../../services/news.service.client';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

   constructor(private userService: UserService,
  			  private router: Router,
              private newsservice: NewsServices,
              private sharedservice: SharedService,
              ) { }

  ngOnInit() {
  }


   logout() {
       
        this.userService.logout().subscribe(
          (data: any) => {
            
            this.router.navigate(['/login'])
          }
       );
        
  }

}
