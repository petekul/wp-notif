import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { APP_BASE_HREF, Location } from '@angular/common';

import { AppState } from '../../app.service';
import { RecordService } from '../../services/record.service';
import { Title } from '../../services/title.service';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { getBaseHref } from '../../services/common-functions.service';
import { getGitHubHref } from '../../services/common-functions.service';

@Component({
  selector: 'home',
  providers: [
    Title,
    RecordService,
    {
      provide: APP_BASE_HREF,
      useFactory: getBaseHref
    }
  ],
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public records = [];
  public selected = [];
  public expanded: any = {};
  public temp = [];
  public columns = [];
  public mobileCheckout = true;
  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(
    public appState: AppState,
    public title: Title,
    public recordService: RecordService
  ) {}

  public ngOnInit() {
    console.log('`Home` component');

    this.get('records', getBaseHref());
  }

  public get(param, url) {
    if(this.appState.get(param).length > 1) {
      this.records = this.appState.get(param);
      this.temp = [...this.records];
    } else {
      this.recordService.load(url).then(() => {
        this.records = this.recordService.get();
        this.temp = [...this.records];
        console.log(this.records);
        this.appState.set(param, this.records);
      });
    }
  }

  public updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.records = temp;
    this.table.offset = 0;
  }

  public onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  public toggleExpandRow(row) {
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  public toggleStatus(status) {
    status = !status;
    return status;
  }

  public onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }
}