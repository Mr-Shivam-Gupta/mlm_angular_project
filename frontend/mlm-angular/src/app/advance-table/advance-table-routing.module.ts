import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdvanceTableComponent } from "./advance-table.component";

const routes: Routes = [
  {
    path: "",
    component: AdvanceTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvanceTableRoutingModule {}
