import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SolarCalculatorPayload } from '../model/solar-calculator.model';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SolarCalculatorService {

 private http = inject(HttpClient);
 private calculatorurl = `${environment.apiUrl}/SolarCalculator`;
  calculate(payload: SolarCalculatorPayload): Observable<any> {
    return this.http.post(
      this.calculatorurl,
      payload
    );
  }
}