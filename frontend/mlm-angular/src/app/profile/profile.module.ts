import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ComponentsModule } from "../shared/components/components.module";
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
    declarations: [
        ChangePasswordComponent,
        UpdateProfileComponent
    ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        ComponentsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
       
        MatIconModule,
        MatButtonModule
    ]
})
export class ProfileModule { }
