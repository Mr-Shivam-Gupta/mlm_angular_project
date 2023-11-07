import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { TronAccountComponent } from './tron-account/tron-account.component';
import { SdxAccountComponent } from './sdx-account/sdx-account.component';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { ComponentsModule } from "../shared/components/components.module";


@NgModule({
    declarations: [
        TronAccountComponent,
        SdxAccountComponent
    ],
    imports: [
        CommonModule,
        AccountsRoutingModule,
        MatPaginatorModule,
        MatTableModule,
        FormsModule,
        MatSelectModule,
        ComponentsModule
    ]
})
export class AccountsModule { }
