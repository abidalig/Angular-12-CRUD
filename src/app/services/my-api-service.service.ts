import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class MyApiServiceService {

  constructor(private http: HttpClient, private router: Router, private route:ActivatedRoute) { }
 
  url = "http://localhost:3000/restaurants";
  urls = "http://localhost:3000/users";
  getApiData() {
    console.log("service call happened");

    return this.http.get(this.url);

  }
  postApiData(data: any) {
    return this.http.post(this.url, data);
  }
  deleteApiData(id: any) {
    //console.log("delete api called ");
    return this.http.delete(this.url + "/" + id);

  }
  getHotelData(id: any) {
    //console.log("hotel details auto filled by this method");
    return this.http.get(this.url + "/" + id);

  }
  updateApiData(id: any, data: any) {

    return this.http.put(`${this.url}/${id}`, data);

  }
  register(data:any){
   return this.http.post(this.urls, data);
  }
 userLogin(data:any){
  return this.http.get(`${this.urls}?name=${data.name}&password=${data.password}`)
  .subscribe(res=>{
   //console.log(res);
   if(res!=''){
    
    
    console.log("exist ");
    
    this.router.navigate(['/'] );
   
    
   }
   else{

     console.log("doesn't exist, please register");
     
   }
  
  });
 }
}
