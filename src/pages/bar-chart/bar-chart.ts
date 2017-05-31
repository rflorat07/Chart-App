import { Component, ViewChild } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { ChartDataProvider } from './../../providers/chart-data/chart-data';


@IonicPage()
@Component({
  selector: 'page-bar-chart',
  templateUrl: 'bar-chart.html',
})
export class BarChartPage {

  @ViewChild('chart') barChart;

  public barChartEl: any;
  public options: object;

  constructor(private chartDataProvider: ChartDataProvider) {
  }

  ionViewDidLoad() {
    this.createBarChart();
  }


  createBarChart(): void {
    this.barChartEl = this.chartDataProvider.createChart(
      this.barChart.nativeElement,
      'bar',
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
