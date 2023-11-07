import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { AccountsService } from '@core/service/accounts.service';

@Component({
  selector: 'app-downline-list',
  templateUrl: './downline-list.component.html',
  styleUrls: ['./downline-list.component.scss']
})
export class DownlineListComponent {
  dtitle:string="Level Team";
  dataSource:any[]=[]
  totalRows:number=0
  level:number=0
  displayedColumns: string[] = ['side','userid', 'name', 'doj', 'investment','level'];
  levels:number[]=[1,2,3,4,5,6,7,8,9,10,11,12]
  constructor(
  
    public accountsService: AccountsService,
   
  ) {
    
  }
 
  ngOnInit() {
    this.loadData();
  }
  refresh() {
    this.loadData();
  }

  public loadData() {
    this.accountsService.downlinelist(this.level,this.pageIndex+1,this.pageSize).then(data=>{
      let datax:any=data
      this.dataSource=datax.result;
      this.totalRows=datax.totalcount;
    })
  }
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  
  handlePageEvent(e: PageEvent) {
   
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.loadData();
  }
}


