import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit {

  constructor(
    private searchService: SearchService
  ) { }

  handleClick(term: string) {
    if (term.length) {
      this.searchService.search(term);
    }
  }

  ngOnInit() {
  }

}
