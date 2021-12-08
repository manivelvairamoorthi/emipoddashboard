import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LiteralPrimitive } from '@angular/compiler';
import { stringify } from '@angular/compiler/src/util';
import { environment } from 'src/environments/environment';
// import 'rxjs/add/operator/map';

const apiUrl =environment.apiUrl;

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
    var resp= this.http.post(apiUrl+"customerSearch",model, options);
    return resp;
  }
}
