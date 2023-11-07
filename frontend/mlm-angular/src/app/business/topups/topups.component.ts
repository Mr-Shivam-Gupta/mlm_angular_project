import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { AccountsService } from '@core/service/accounts.service';

@Component({
  selector: 'app-topups',
  templateUrl: './topups.component.html',
  styleUrls: ['./topups.component.scss']
})
export class TopupsComponent {
  dtitle:string="Investments";
  dataSource:any[]=[]
  totalRows:number=0
  displayedColumns: string[] = ['side','userid', 'topupdate','amount'];
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


