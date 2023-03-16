import { Component } from '@angular/core';
import { MyApiServiceService } from '../services/my-api-service.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent {
  newData:any=[];
  
  constructor(private service: MyApiServiceService) { }

 ngOnInit() {
    //console.log(this.service.getApiData());
    
   this.service.getApiData().subscribe((res) => {
      
      this.newData = res;
      //console.log(this.newData);
    });
  } 
  deleteData(id:any){
    console.log("hotel id : "+id);
    this.service.deleteApiData(id).subscribe();
    
  }
  
  

  //getData(){
  //this.service.getApiData().subscribe((res) =>
  // {
  //console.log("data ---"+res);
  // this.newData = res;
  //console.log(this.newData);

  //})
  //}


}
