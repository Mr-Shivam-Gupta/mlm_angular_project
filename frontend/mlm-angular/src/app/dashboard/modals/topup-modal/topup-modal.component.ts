import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AccountsService } from '@core/service/accounts.service';
import Swal from 'sweetalert2';
import {Clipboard} from '@angular/cdk/clipboard';


@Component({
  selector: 'app-topup-modal',
  templateUrl: './topup-modal.component.html',
  styleUrls: ['./topup-modal.component.scss']
})
export class TopupModalComponent implements OnInit {
  topupamt:number=100
  address:string=""
  tronamt:string=""
  plans:any[]=[]
  generated:boolean=false
  topupbalance:number=0
  constructor(private accountService:AccountsService, 
    public dialogRef: MatDialogRef<TopupModalComponent>, private clipboard:Clipboard
   ) {

  }
  ngOnInit(): void {
    this.accountService.planlist().then(data=>{
      let datax:any=data
      this.plans=datax.plans; 
      this.topupamt=this.plans[0].planvalue
    })
    this.accountService.topupbalance().then(data=>{
      let datax:any=data 
      this.topupbalance=datax.balance;
    })
  }

  onNoClick(){
    this.dialogRef.close()
  }
  copyAddress() {
    this.clipboard.copy(this.address)
    Swal.fire({
      icon: 'info',
      title: 'Congrates',
      text: 'Address copied to clipboard!',
      footer: '',
    });
  }
  topup(event:any)
  {
    event.stopPropagation();
    if(this.topupamt < 100)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Amount Should Be 100 or Above!',
      footer: '<a href>Hint : Please check amount</a>',
    });
    else
    {
      this.accountService.topup(this.topupamt,"").then(data=>{
        let datax:any=data 
        if(datax.result==1)
        {
            this.address=datax.paymenturl;
            this.tronamt=datax.payamount;
            this.generated=true
        }
        else
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please Contact to Admin!',
          footer: '<a href>Hint : Unknown Error</a>',
        });
      })
    }
  }

}
