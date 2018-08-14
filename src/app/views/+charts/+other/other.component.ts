import {
    Component,
    OnInit,
  } from '@angular/core';
  import {BrowserModule} from '@angular/platform-browser';
  import {BrowserAnimationsModule} from '@angular/platform-browser-animations';
  import {NgxChartsModule} from '@swimlane/ngx-charts';
  import {single, multi} from './../data.ts';

  console.log('`Other` component loaded asynchronously');
  
  @Component({
    selector: 'other',
    styleUrls: [ './other.component.scss' ],
    templateUrl: './other.component.html'
  })
  export class OtherComponent implements OnInit {
    public single: any[];
    public multi: any[];
    public config = {
        showXAxis: true,
        showYAxis: true,
        gradient: false,
        showLegend: true,
        showXAxisLabel: true,
        barPadding: 2,
        xAxisLabel: 'Country',
        showYAxisLabel: true,
        yAxisLabel: 'Population',
        roundEdges: false,
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

    onChangeMulti(i, i2, event) {
        this.multi[i].series[i2].value = parseInt(event.target.value);
        this.multi = [...this.multi];
    }
    
    public ngOnInit() {
      console.log('`Other` component');
    }
  }