import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit {

  searchForm: FormGroup;

  constructor(
    private searchService: SearchService,
    private formBuilder: FormBuilder
  ) { }

  formSetup() {
    this.searchForm = this.formBuilder.group({
      search: [null, Validators.required]
    });
  }

  searchSbumit() {
    this.searchService.search(this.searchForm.value.search);
  }

  ngOnInit() {
    this.formSetup();
  }

}
