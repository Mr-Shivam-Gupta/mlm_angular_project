import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { AccountsService } from '@core/service/accounts.service';

@Component({
  selector: 'app-tron-account',
  templateUrl: './tron-account.component.html',
  styleUrls: ['./tron-account.component.scss']
})
export class TronAccountComponent {
  dtitle:string="Tron Account";
  dataSource:any[]=[]
  totalRows:number=0
  displayedColumns: string[] = ['side','transdate', 'amount', 'camount', 'narration'];
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
    this.accountsService.myaccounttron(this.pageIndex+1,this.pageSize).then(data=>{
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


