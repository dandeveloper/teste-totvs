import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
// import { Search } from './search';
// import { debounceTime, distinctUntilChanged, switchMap, tap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  httpOptions: any;
  topics$ = new BehaviorSubject([]);

  constructor(
    private http: HttpClient,
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/vnd.github.mercy-preview+json'
      })
    };
  }

  search(term: string) {
    return this.http.get(`${environment.GithubAPI}search/topics?q=${term}+is:featured`, this.httpOptions)
    .subscribe(data => {
      this.topics$.next(data['items']);
    });
  }
}
