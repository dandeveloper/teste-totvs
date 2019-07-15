import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
// import { Search } from '../../services/search';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.scss']
})
export class TopicsListComponent implements OnInit {

  topics = [];
  topicState: boolean[];

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchService.topics$
    .subscribe(
      res => this.topics = res
    );
  }

  activateClass(topic) {
    topic.active = !topic.active;
  }

}
