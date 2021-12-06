import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LiteralPrimitive } from '@angular/compiler';
import { stringify } from '@angular/compiler/src/util';
// import 'rxjs/add/operator/map';

const baseUrl = "https://localhost:5001/DashBoard/CustomerSearch";

@Injectable({
  providedIn: 'root'
})
export class KpiService {


  constructor(private http:HttpClient) { 
    //console.log('constructor is initiated');
  }

  fetchKpiData(model:any): Observable<any>{
    const options = {
      headers: {
        'Content-Type':'application/json'
      }
    };
    var resp= this.http.post(baseUrl,model, options);
    return resp;
  }
}
