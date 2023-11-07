import { Component, ViewChild } from '@angular/core';
import { AccountsService } from '@core/service/accounts.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { NgForm, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})

export class ChangePasswordComponent {
 
  old_password:string=""
  new_password:string=""
  retype_password:string=""
  hide:boolean=true
  register?: UntypedFormGroup;
  constructor(private accountService:AccountsService,private snackBar: MatSnackBar,private fb: UntypedFormBuilder) {
    this.initForm() 
  }
  @ViewChild('myForm') myForm: NgForm;
  initForm(): void {
    this.register = this.fb.group({
     
      old_password: ['', [Validators.required]],
      new_password: ['', [Validators.required]],
      retype_password: ['', [Validators.required]],
     
    });
  }
  
  
  changePassword()
  {
    this.accountService.changepassword(this.register?.controls['old_password'].value,this.register?.controls['new_password'].value).then(data=>{
      let datax:any=data;
      if(datax.result==1)
      {
        this.register?.reset()
        this.myForm.resetForm()
     
        this.snackBar.open('Password Changed Successfully', '', {
          duration: 2000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center',
          panelClass: 'snackbar-info',
        });
      }
    })
  }

}
