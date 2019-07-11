import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.scss']
})
export class TopicsListComponent implements OnInit {

  topics: any;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

}
