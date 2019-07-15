import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  opened$ = new BehaviorSubject(false);

  openModal() {
    this.opened$.next(true);
  }

  closeModal() {
    this.opened$.next(false);
  }

}
