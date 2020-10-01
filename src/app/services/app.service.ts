import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilterID } from './../interfaces/ifilter';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor( private http : HttpClient) { 
  
  }


  getData(params){
    let endpoint = `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${params[FilterID.Successful_Launch]}&land_success=${params[FilterID.Successful_Landing]}&launch_year=${params[FilterID.Landing_Year]}`
    return this.http.get(endpoint)
  }



}
