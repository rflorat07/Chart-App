import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LineChartPage } from './line-chart';

@NgModule({
  declarations: [
    LineChartPage,
  ],
  imports: [
    IonicPageModule.forChild(LineChartPage),
  ],
  exports: [
    LineChartPage
  ]
})
export class LineChartPageModule {}
