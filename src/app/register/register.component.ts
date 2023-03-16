import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MyApiServiceService } from '../services/my-api-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 
  show :boolean = false;
  constructor(private service: MyApiServiceService) { }
  registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
    //password: new FormControl(''),
    //checkbox: new FormControl('')
  });
  registerHotel(){
    console.log(this.registerForm.value);
    this.service.register(this.registerForm.value).subscribe((res)=>
    { 
      console.log(res);
      this.show = true;
    });
    this.registerForm.reset();
  }
  closeAlert()
  {
    this.show = false;
  }
}
