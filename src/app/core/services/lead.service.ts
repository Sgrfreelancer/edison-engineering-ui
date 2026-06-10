import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { LeadPayload } from '../model/lead.model';

@Injectable({
  providedIn: 'root'
})
export class LeadService {

  private http = inject(HttpClient);

  private leadUrl = `${environment.apiUrl}/leads`;

  createLead(payload: LeadPayload) {

    console.log('API URL:', this.leadUrl);

    return this.http.post(
      this.leadUrl,
      payload
    );
  }
}