import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

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

  getTopics() {
    console.log(this.http.get(`https://api.github.com/search/topics?q=${this.search}+is:featured`, this.httpOptions));
    return this.http.get(`https://api.github.com/search/topics?q=${this.search}+is:featured`, this.httpOptions);
  }
}
