import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopupModalComponent } from './topup-modal/topup-modal.component';
import { WithdrawModalComponent } from './withdraw-modal/withdraw-modal.component';
import { OtpModalComponent } from './otp-modal/otp-modal.component';
import { InviteModalComponent } from './invite-modal/invite-modal.component';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ComponentsModule } from '@shared/components/components.module';



@NgModule({
  declarations: [
   
    WithdrawModalComponent,
    OtpModalComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatCommonModule,
    ComponentsModule    
  ]
})
export class ModalsModule { }
