import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Search } from './search';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  httpOptions: any;
  search: string;

  constructor(
    private http: HttpClient,
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/vnd.github.mercy-preview+json'
      })
    };
  }

  setSearch(search: string) {
    this.search = search;
  }

  getSearch() {
    return this.http.get<Search>(`https://api.github.com/search/topics?q=javascript+is:featured`, this.httpOptions)
    .pipe(
      tap(console.log)
    );
  }
}
