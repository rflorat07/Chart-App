import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1: any = 'PieChartPage';
  tab2: any = 'BarChartPage';
  tab3: any = 'LineChartPage';

  constructor() { }

}
