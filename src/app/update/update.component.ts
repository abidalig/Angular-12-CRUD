import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MyApiServiceService } from '../services/my-api-service.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  show: boolean = false;
  routeId: number = 0;
  oldData: any;

  editHotelForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),

  });

  constructor(private service: MyApiServiceService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {  //this.route.snapshot.params.id
      this.routeId = params['id'];           // console.log(params) //log the entire params object
    });                                      // console.log(params['id']) //log the value of id

    this.service.getHotelData(this.routeId).subscribe((res) => {
      this.oldData = res;
      console.log(this.oldData);
      this.editHotelForm = new FormGroup({
        name: new FormControl(this.oldData.name),
        address: new FormControl(this.oldData.address),
        email: new FormControl(this.oldData.email),

      });
    });
  }

  updateHotel() {
    
    this.service.updateApiData(this.routeId, this.editHotelForm.value).subscribe((res)=>
    {
      //console.log(res); 
      this.show=true;
    });
    //console.log("updated data:",this.editHotelForm.value);
    this.editHotelForm.reset();
  }


  closeAlert() {
    this.show = false;
  }
}
