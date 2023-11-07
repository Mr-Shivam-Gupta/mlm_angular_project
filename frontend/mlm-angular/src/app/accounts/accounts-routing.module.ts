import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TronAccountComponent } from './tron-account/tron-account.component';
import { SdxAccountComponent } from './sdx-account/sdx-account.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "tron-account",
    pathMatch: "full",
  },
  {
    path: "tron-account",
    component: TronAccountComponent,
  },
  {
    path: "sdx-account",
    component: SdxAccountComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
