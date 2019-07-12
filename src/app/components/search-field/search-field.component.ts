import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit {

  search = new FormControl('');
  constructor(
    private searchService: SearchService
  ) { }

  handleClick(search: string) {
    // console.log(search);
    this.searchService.setSearch(search);
    this.searchService.getSearch().subscribe(
      data => console.log('SearchFieldComponent', data)
    );
    // this.searchService.getTopics(search).subscribe(
    //   data => console.log('data', data)
    // );
  }

  ngOnInit() {
  }

}
