import {
    Component,
    OnInit,
  } from '@angular/core';
  import {BrowserModule} from '@angular/platform-browser';
  import {BrowserAnimationsModule} from '@angular/platform-browser-animations';
  import {NgxChartsModule} from '@swimlane/ngx-charts';
  import {single, multi} from './../data.ts';

  console.log('`Pie Charts` component loaded asynchronously');
  
  @Component({
    selector: 'pie-charts',
    styleUrls: [ './pie-charts.component.scss' ],
    templateUrl: './pie-charts.component.html'
  })
  export class PieChartsComponent implements OnInit {
    public single: any[];
    public multi: any[];
    public config = {
        gradient: false,
        showLegend: true,
        showLabels: true,
        explodeSlices: false,
        doughnut: false,
        colorScheme: {
            domain: ['#3a3a38', '#6ba3be', '#b6b9b0']
        }
    }

    constructor() {
        Object.assign(this, {single, multi})   
    }

    onSelect(event) {
        console.log(event);
    }

    onChangeSingle(i, event) {
      this.single[i].value = parseInt(event.target.value);
      this.single = [...this.single];
    }

    public ngOnInit() {
      console.log('`Pie Charts` component');
    }
  }