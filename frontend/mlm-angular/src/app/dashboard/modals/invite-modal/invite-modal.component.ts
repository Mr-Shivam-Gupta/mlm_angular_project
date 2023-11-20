import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AccountsService } from '@core/service/accounts.service';
import Swal from 'sweetalert2';
import {Clipboard} from '@angular/cdk/clipboard';


@Component({
  selector: 'app-invite-modal',
  templateUrl: './invite-modal.component.html',
  styleUrls: ['./invite-modal.component.scss']
})
export class InviteModalComponent implements OnInit {
  topupamt:number=0
  address:string=""
  tronamt:string=""
  constructor(private accountService:AccountsService, 
    public dialogRef: MatDialogRef<InviteModalComponent>, private clipboard:Clipboard
   ) {

  }
  ngOnInit(): void {
    this.accountService.personalinfo().then(data=>{
      let datax:any=data 
      this.address="https://mlmcreatorsindia.com/outerapi/api.php?sid="+datax.userid
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
  shareAddress() {
    
  }
  topup()
  {
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
