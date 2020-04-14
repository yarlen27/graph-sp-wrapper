import { Injectable } from '@angular/core';
import { Client } from '@microsoft/microsoft-graph-client';

import { AuthService } from './auth.service';
import { Event } from './event';
import { AlertsService } from './alerts.service';


@Injectable({
  providedIn: 'root'
})
export class GraphService {

  private graphClient: Client;
  constructor(
    private authService: AuthService,
    private alertsService: AlertsService) {

    // Initialize the Graph client
    this.graphClient = Client.init({
      authProvider: async (done) => {
        // Get the token from the auth service
        let token = await this.authService.getAccessToken()
          .catch((reason) => {
            done(reason, null);
          });

        if (token)
        {
          debugger;
          done(null, token.accessToken);

          debugger;
        } else {
          done("Could not get an access token", null);
        }
      }
    });
  }

  async getEvents(): Promise<Event[]> {

    this.getListItems();
    try {
      let result =  await this.graphClient
        .api('/me/events')
        .select('subject,organizer,start,end')
        .orderby('createdDateTime DESC')
        .get();

      return result.value;
    } catch (error) {
      this.alertsService.add('Could not get events', JSON.stringify(error, null, 2));
    }
  }

  public getListItems(){
//https://graph.microsoft.com/v1.0/sites/27cobalto.sharepoint.com:/sites/CobaltoDemos:/lists/Lista001/items?expand=fields(select=Title)
    this.graphClient.api('/sites/27cobalto.sharepoint.com:/sites/CobaltoDemos:/lists/Lista001/items').get().then(res=>{

      console.log(res);
    });
  }
}
