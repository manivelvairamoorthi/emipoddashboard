import { Component, OnInit } from '@angular/core';
import {KpiService} from '../../services/kpi.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.css']
})
export class CustomerSearchComponent implements OnInit {
  public kpiObject:any;
  public keys:any;
  public model: any = {};
  today:Date= new Date();
  fileName :string = "EmiPodCustomerSearchData.xlsx"

  constructor(private service: KpiService) { }

  ngOnInit(): void {
    // this.model.mobileNumber = "8789246572";
    // this.model.podRequestId = "12345";
    this.today.setMinutes(this.today.getMinutes()+330);
    this.model.endTime = this.today.toISOString().slice(0, 16);
    this.today.setDate(this.today.getDate()-1);
    this.model.startTime = this.today.toISOString().slice(0, 16);
    console.log("date -"+this.model.startTime);
      
  }
  submit(){
    this.service.fetchKpiData(this.model).
      subscribe((data: any)=>{
        this.kpiObject=data.kpiItemList;
        this.keys = Object.keys(this.kpiObject[0]);
      });
  }
  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }
  
}
