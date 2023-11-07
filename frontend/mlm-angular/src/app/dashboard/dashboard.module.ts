import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgChartsModule } from 'ng2-charts';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from '@shared';
import { ComponentsModule } from '@shared/components/components.module';
import { TranslateModule } from '@ngx-translate/core';
import { TopupModalComponent } from './modals/topup-modal/topup-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ClipboardModule} from '@angular/cdk/clipboard'
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { InviteModalComponent } from './modals/invite-modal/invite-modal.component';


@NgModule({
  declarations: [Dashboard1Component, Dashboard2Component,TopupModalComponent, InviteModalComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgChartsModule,
    NgApexchartsModule,
    NgScrollbarModule,
    DragDropModule,
    ComponentsModule,
    SharedModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule,
    ShareButtonsModule,
    ShareIconsModule,
  ]
})
export class DashboardModule {}
