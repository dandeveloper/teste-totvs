import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

  opened: boolean;

  constructor(
    private modalService: ModalService
  ) { }

  close() {
    this.modalService.opened$.next(false);
  }

  ngOnInit() {
    this.modalService.opened$.subscribe(
      res => {
        this.opened = res;
      }
    );
  }

  ngOnDestroy() {
    this.modalService.opened$.unsubscribe();
  }

}
