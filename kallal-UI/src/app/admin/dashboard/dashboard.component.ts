import { Component, OnInit } from '@angular/core';
import { jqxChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  values: number[] = [102, 115];

  sampleData: any[] = [
    { Day: 'srilank', InTransit: 30, ProcessShipment: 0 },
    { Day: 'singapore', InTransit: 25, ProcessShipment: 25 },
    { Day: 'Malaysia', InTransit: 25, ProcessShipment: 25 },
  ];
  padding: any = { left: 5, top: 5, right: 5, bottom: 5 };
  titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };
  getWidth(): any {
    if (document.body.offsetWidth < 850) {
      return '90%';
    }

    return 850;
  }
  xAxis: any =
    {
      dataField: 'Day',
      unitInterval: 1,
      axisSize: 'auto',
      tickMarks: {
        visible: true,
        interval: 1,
        color: '#DF7426'
      },
      gridLines: {
        visible: true,
        interval: 1,
        color: '#6B7378'
      }
    };
  valueAxis: any =
    {
      unitInterval: 10,
      minValue: 0,
      maxValue: 120,
      title: { text: 'Time in minutes' },
      labels: { horizontalAlignment: 'right' },
      tickMarks: { color: '#6B7378' }
    };
  seriesGroups: any[] =
    [
      {
        type: 'stackedcolumn',
        columnsGapPercent: 50,
        seriesGapPercent: 0,
        series: [
          { dataField: 'InTransit', displayText: 'InTransit', color: "#DF7426" },
          { dataField: 'ProcessShipment', displayText: 'ProcessShipment', color: "#6B7378" },
        ]
      }
    ];


    

}
