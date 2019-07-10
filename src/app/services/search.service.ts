import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    Accept: 'application/vnd.github.mercy-preview+json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient
  ) { }

  getTopics(search: string) {
    return this.http.get(`https://api.github.com/search/topics?q=${search}+is:featured`, httpOptions);
  }
}
