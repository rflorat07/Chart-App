import { Component, ViewChild } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { ChartDataProvider } from './../../providers/chart-data/chart-data';


@IonicPage()
@Component({
  selector: 'page-line-chart',
  templateUrl: 'line-chart.html',
})
export class LineChartPage {

  @ViewChild('chart') lineChart;

  public lineChartEl: any;
  public options: object;

  constructor(private chartDataProvider: ChartDataProvider) { }

  ionViewDidLoad() {
    this.createLineChart();
  }

  createLineChart(): void {
    this.lineChartEl = this.chartDataProvider.createChart(
      this.lineChart.nativeElement,
      'line',
      'Daily Technology usage',
      this.optionsChart());
  }

  optionsChart() {
    return this.options = {
      maintainAspectRatio: false,
      legend: {
        display: true,
        boxWidth: 80,
        fontSize: 15,
        padding: 0
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            stepSize: 5,
            max: 100
          }
        }],
        xAxes: [{
          ticks: {
            autoSkip: false
          }
        }]
      }
    }
  }

  
}
