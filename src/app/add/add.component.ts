import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MyApiServiceService } from '../services/my-api-service.service';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  show :boolean = false;
  constructor(private service: MyApiServiceService) { }
  addHotelForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    //password: new FormControl(''),
    //checkbox: new FormControl('')
  });
  addHotel(){
    //console.log(this.addHotelForm.value);
    this.service.postApiData(this.addHotelForm.value).subscribe((res) => {
      this.show=true;
      console.log(res);
    });
    this.addHotelForm.reset();
  }

  closeAlert()
  {
    this.show = false;
  }
  
  //onsole.log(this.name);
  
  
}
