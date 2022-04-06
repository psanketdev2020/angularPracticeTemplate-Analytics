import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { ChartDataSets, ChartOptions, ChartType, RadialChartOptions } from 'chart.js';

// import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-main-features',
  templateUrl: './main-features.component.html',
  styleUrls: ['./main-features.component.css']
})
export class MainFeaturesComponent implements OnInit {
 
  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  
    scales: {
        
      xAxes: [{
            stacked: false,
              ticks: {
              display: false,
                
            },
                                
        }],
        yAxes: [{
      
          ticks: {
            minRotation: 0,
          },
          gridLines: {
            drawOnChartArea: false
        },
        }],
     
    },
         
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      
      },
            
    },
       
  };
  
  public barChartLabels: Label[] = ['54-65', '45-55', '45-55', '45-55', '45-55'];
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = false;
  

  public barChartData: ChartDataSets[] = [
    { data: [54, 59, 80, 81, 56] },
    { data: [65, 48, 40, 19, 86] },
    
  ];
  
  // radar chart
  public radarChartOptions: RadialChartOptions = {
    
    responsive: true,
    legend: {
      display: true,
      position: "right",
      labels: {
        usePointStyle: true
      }
    },
    scale: {

      ticks: {
        display: false,
        maxTicksLimit: 5
        
      },
      gridLines: {
        display: true,
        
      },
      angleLines: {
        display: false
      },
      
    },
    elements: {
      point: {
          radius: 0
      }
  }
  };


  public radarChartLabels: Label[] = ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'];

  public radarChartData: ChartDataSets[] = [
    { data: [120, 78, 80, 20, 27, 100], label: 'option 2' },
    { data: [120, 130, 90, 81, 56, 55], label: 'option 1' },
  ];
  public radarChartType: ChartType = 'radar';
  

  // bootstrap calendor
  bsInlineValue = new Date();
  bsInlineRangeValue: Date[];
  maxDate = new Date();
  constructor() {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
   
  }
   

  ngOnInit(): void {
  }
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40 ];
  }

}
