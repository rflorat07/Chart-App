import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarChartPage } from './bar-chart';

@NgModule({
  declarations: [
    BarChartPage,
  ],
  imports: [
    IonicPageModule.forChild(BarChartPage),
  ],
  exports: [
    BarChartPage
  ]
})
export class BarChartPageModule {}
