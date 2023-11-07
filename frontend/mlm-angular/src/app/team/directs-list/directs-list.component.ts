import { Component, OnInit } from '@angular/core';
import { AccountsService } from '@core/service/accounts.service';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-directs-list',
  templateUrl: './directs-list.component.html',
  styleUrls: ['./directs-list.component.scss']
})
export class DirectsListComponent  implements OnInit {
  dtitle:string="Direct Members";
  dataSource:any[]=[]
  totalRows:number=0
  displayedColumns: string[] = ['side','userid', 'name', 'doj', 'mobile', 'investment','team'];
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
    this.accountsService.directdownlinelist(this.pageIndex+1,this.pageSize).then(data=>{
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


