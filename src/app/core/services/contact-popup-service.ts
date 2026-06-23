import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactPopupService {

  private popupState = new BehaviorSubject<boolean>(false);

  popupState$ = this.popupState.asObservable();

  open() {
    this.popupState.next(true);
  }

  close() {
    this.popupState.next(false);
  }

}