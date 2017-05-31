import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PieChartPage } from './pie-chart';

@NgModule({
  declarations: [
    PieChartPage,
  ],
  imports: [
    IonicPageModule.forChild(PieChartPage),
  ],
  exports: [
    PieChartPage
  ]
})
export class PieChartPageModule {}
