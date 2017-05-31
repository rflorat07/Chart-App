import { Injectable } from '@angular/core';

import { Chart } from 'chart.js';

@Injectable()
export class ChartDataProvider {

  public technologies: any = {
    "technologies": [
      {
        'technology': 'Mobile: Ionic/Angular',
        'time': 50,
        'color': 'rgb(255,99,132)',
        'hover': 'rgba(255,99,132,0.8)'
      },
      {
        'technology': 'Front-end: Sass/CSS',
        'time': 15,
        'color': 'rgb(255,205,86)',
        'hover': 'rgba(255,205,86, 0.8)'
      },
      {
        'technology': 'Server: PHP/MySQL',
        'time': 10,
        'color': 'rgb(54,162,235)',
        'hover': 'rgba(54,162,235, 0.8)'
      },
      {
        'technology': 'Code Documentation',
        'time': 5,
        'color': 'rgb(139,113,220)',
        'hover': 'rgba(139,113,220, 0.8)'
      },
      {
        'technology': 'Knowledge: Blogging',
        'time': 10,
        'color': 'rgb(152, 54, 145)',
        'hover': 'rgba(152, 54, 145, 0.8)',
      },
      {
        'technology': 'SEO/Online Marketing',
        'time': 10,
        'color': 'rgb(222,217,177)',
        'hover': 'rgba(222,217,177, 0.8)'
      }
    ]
  };

  public chartEl: any;
  public chartLabels: any = [];
  public chartValues: any = [];
  public chartColours: any = [];
  public chartHoverColours: any = [];
  public chartLoading: any;

  constructor() {
    this.defineChartData();
  }

  /**
   *
   * Parse the JSON data, push specific keys into selected arrays for use with
   * each chart
   *
   */
  defineChartData(): void {
    let k: any;

    for (k in this.technologies.technologies) {
      var tech = this.technologies.technologies[k];

      this.chartLabels.push(tech.technology);
      this.chartValues.push(tech.time);
      this.chartColours.push(tech.color);
      this.chartHoverColours.push(tech.hover);
    }
  }


  createChart(context: any, chartTypes: string, label: string, options: object) {

    this.chartEl = new Chart(context,
      {
        type: chartTypes,
        data: {
          labels: this.chartLabels,
          datasets: [{
            label: label,
            data: this.chartValues,
            duration: 1000,
            easing: 'easeInQuart',
            backgroundColor: this.chartColours,
            hoverBackgroundColor: this.chartHoverColours,
            fill: false
          }]
        },
        options: options
      });

    return this.chartEl;
  }

}
