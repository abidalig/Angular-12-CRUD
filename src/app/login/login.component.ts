import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MyApiServiceService } from '../services/my-api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 dbData:any;
 show:any;
  constructor(private service: MyApiServiceService,private route: Router) { }
  loginForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
  });

  login() {
    //console.log(this.loginForm.value);
    this.service.userLogin(this.loginForm.value);
    
   }
   
    

}
