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
  public emptyData : boolean = false;
  fileName :string = "EmiPodCustomerSearchData.xlsx"

  constructor(private service: KpiService) { }

  ngOnInit(): void {
    
      
  }
  submit(){
    this.service.fetchKpiData(this.model).
      subscribe((data: any)=>{
        this.kpiObject=data.kpiItemList;
        if(this.kpiObject === null || Object.keys(this.kpiObject).length ==0){
          this.emptyData = true;
          return;
        }
        this.emptyData = false;
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
