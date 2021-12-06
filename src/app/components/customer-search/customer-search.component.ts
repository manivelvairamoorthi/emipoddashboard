import { Component, OnInit } from '@angular/core';
import {KpiService} from '../../services/kpi.service';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.css']
})
export class CustomerSearchComponent implements OnInit {
  public kpiObject:any;
  public keys:any;
  public model: any = {};

  constructor(private service: KpiService) { }

  ngOnInit(): void {

      
  }
  submit(){
    this.service.fetchKpiData(this.model).
      subscribe((data: any)=>{
        this.kpiObject=data.kpiItemList;
        this.keys = Object.keys(this.kpiObject[0]);
      });
  }
  
}
