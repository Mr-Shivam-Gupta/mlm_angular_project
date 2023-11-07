import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdvanceTableRoutingModule } from './advance-table-routing.module';
import { AdvanceTableComponent } from './advance-table.component';
import { DeleteDialogComponent } from './dialogs/delete/delete.component';
import { FormDialogComponent } from './dialogs/form-dialog/form-dialog.component';
import { AdvanceTableService } from './advance-table.service';
import { SharedModule } from '@shared';
import { ComponentsModule } from '@shared/components/components.module';

@NgModule({
  declarations: [
    AdvanceTableComponent,
    DeleteDialogComponent,
    FormDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdvanceTableRoutingModule,
    ComponentsModule,
    SharedModule,
  ],
  providers: [AdvanceTableService],
})
export class AdvanceTableModule {}
