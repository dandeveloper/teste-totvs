import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { ModalService } from '../../services/modal.service';
import Search from '../../services/search';

@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.scss']
})
export class TopicsListComponent implements OnInit, OnDestroy {

  topics: Search[] = [];
  opened: boolean;

  constructor(
    private searchService: SearchService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.searchService.topics$.subscribe( (res: Search[]) => this.topics = res );
  }

  openModal() {
    this.modalService.opened$.next(true);
  }

  activateClass(topic) {
    topic.active = !topic.active;
  }

  ngOnDestroy() {
    this.searchService.topics$.unsubscribe();
  }

}
