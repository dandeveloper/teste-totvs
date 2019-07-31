import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import Search from './search';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private httpOptions: any;
  topics$ = new Subject();

  constructor(
    private http: HttpClient,
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/vnd.github.mercy-preview+json'
      })
    };
  }

  search(term: string): Subscription {
    return this.http.get<Search[]>(`${environment.GithubAPI}search/topics?q=${encodeURI(term)}+is:featured`, this.httpOptions)
    .pipe(
      map( (data: any) => {
        return data.items;
      })
    )
    .subscribe(data => {
      this.topics$.next(data);
    });
  }
}
