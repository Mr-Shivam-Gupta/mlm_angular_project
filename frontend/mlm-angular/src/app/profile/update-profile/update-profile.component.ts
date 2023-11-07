import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AccountsService } from '@core/service/accounts.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent  implements OnInit {
  name:string=""
  email:string=""
  mobile:string=""
  address:string=""
  addressError=false
  hide:boolean=true
  register?: UntypedFormGroup;
  constructor(private accountService:AccountsService,private snackBar: MatSnackBar,private fb: UntypedFormBuilder) {
    
  }
  ngOnInit(): void {
    this.accountService.personalinfo().then(data=>{
      let datax:any=data
      this.name=datax.result[0].name;
      this.address=datax.result[0].address;
      this.email=datax.result[0].email;
      this.mobile=datax.result[0].mobile
      if(this.address==''|| this.address==null)
        this.addressError=true 
    })
  }

 
  
  
  updateProfile()
  {
    this.accountService.updateprofile(this.address,"").then(data=>{
      let datax:any=data;
      if(datax.status==1)
      {
        this.addressError=false
        this.snackBar.open('Profile Updated Successfully', '', {
          duration: 2000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center',
          panelClass: 'snackbar-info',
        });
      }
    })
  }

}
