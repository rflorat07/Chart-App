import { Component, ViewChild } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { ChartDataProvider } from './../../providers/chart-data/chart-data';

@IonicPage()
@Component({
  selector: 'page-pie-chart',
  templateUrl: 'pie-chart.html',
})
export class PieChartPage {

  @ViewChild('chart') pieChart;

  public pieChartEl: any;
  public options: object;
  public chartLoading: any;

  constructor(private chartDataProvider: ChartDataProvider) {
  }

  ionViewDidLoad() {
    this.createPieChart();
  }

  createPieChart(): void {
    this.pieChartEl = this.chartDataProvider.createChart(
      this.pieChart.nativeElement,
      'pie',
      'Daily Technology usage',
      this.optionsChart());

    this.chartLoading = this.pieChartEl.generateLegend();
  }

  optionsChart() {
    return this.options = {
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      },
      animation: {
        duration: 5000
      },
      legend: {
        position: 'bottom',
      }
    }
  }

}