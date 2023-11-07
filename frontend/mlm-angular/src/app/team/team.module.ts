import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownlineListComponent } from './downline-list/downline-list.component';
import { TeamRoutingModule } from './team-routing.module';
import { DirectsListComponent } from './directs-list/directs-list.component';
import { ComponentsModule } from "../shared/components/components.module";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatLabel } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
    declarations: [
        DownlineListComponent,
        DirectsListComponent
    ],
    imports: [
        CommonModule,
        TeamRoutingModule,
        ComponentsModule,
        MatPaginatorModule,
        MatTableModule,
        FormsModule,
        MatSelectModule,
        
    ]
})
export class TeamModule { }
