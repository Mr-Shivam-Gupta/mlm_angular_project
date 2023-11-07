import { Component, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexYAxis,
  ApexPlotOptions,
  ApexStroke,
  ApexLegend,
  ApexFill,
  ApexMarkers,
  ApexGrid,
  ApexTitleSubtitle,
  ApexResponsive,
} from 'ng-apexcharts';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  responsive: ApexResponsive[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  colors: string[];
  labels: string[];
  markers: ApexMarkers;
  grid: ApexGrid;
  title: ApexTitleSubtitle;

};
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MemberService } from '@core/service/member.adbo.sbendervice';
import { AccountsService } from '@core/service/accounts.service';
import { MatDialog } from '@angular/material/dialog';
import { TopupModalComponent } from '../modals/topup-modal/topup-modal.component';
import { InviteModalComponent } from '../modals/invite-modal/invite-modal.component';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss'],
})
export class Dashboard1Component implements OnInit {
  public areaChartOptions!: Partial<ChartOptions>;
  public barChartOptions!: Partial<ChartOptions>;
  public earningOptions!: Partial<ChartOptions>;
  public performanceRateChartOptions!: Partial<ChartOptions>;

  dtitle:string="MENUITEMS.DASHBOARD.TEXT";
  downlineData:any={}
  constructor(private memService:AccountsService,  public dialog: MatDialog) {
    //constructor
  }
  ngOnInit() {
   
    this.memService.personalinfo().then(data=>{})
    this.memService.downlinestatus().then(data=>{
      let datax:any=data;
      this.downlineData=datax;

    })
  }
  topupaddress: string="";
  topupamt: number=0;
  newTopup() {
    const topupDialog = this.dialog.open(TopupModalComponent,{})
    // this.memService.topup(this.downlinedata.topupamt,this.shortby).then(
    //   data=>{
    //     var datax:any=data
    //     if(datax.result=="1")
    //     {
    //       this.topupaddress=datax.paymenturl         
    //       this.topupModal.hide()
    //       this.activateModal.hide()
    //       this.pwdsuccessModal.show()
    //     }
    //   }
    // )
  }
   invite(){
    this.dialog.open(InviteModalComponent)
   }
   withdraw() {}

}
