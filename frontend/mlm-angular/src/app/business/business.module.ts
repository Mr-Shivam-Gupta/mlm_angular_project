import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { TopupsComponent } from './topups/topups.component';
import { CommissionsComponent } from './commissions/commissions.component';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { ComponentsModule } from "../shared/components/components.module";


@NgModule({
    declarations: [
        TopupsComponent,
        CommissionsComponent
    ],
    imports: [
        CommonModule,
        BusinessRoutingModule,
        MatPaginatorModule,
        MatTableModule,
        FormsModule,
        MatSelectModule,
        ComponentsModule
    ]
})
export class BusinessModule { }
