import { Component, OnInit } from '@angular/core';
import * as moment from 'moment-timezone';

import { GraphService } from '../graph.service';
import { Event, DateTimeTimeZone } from '../event';
import { AlertsService } from '../alerts.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  public events: Event[];

  constructor(
    public graphService: GraphService,
    public alertsService: AlertsService) { }

  ngOnInit() {
    this.graphService.getEvents()
      .then((events) => {
        this.events = events;
      });
  }

  formatDateTimeTimeZone(dateTime: DateTimeTimeZone): string {
    try {
      return moment.tz(dateTime.dateTime, dateTime.timeZone).format();
    }
    catch(error) {
      this.alertsService.add('DateTimeTimeZone conversion error', JSON.stringify(error));
    }
  }
}
