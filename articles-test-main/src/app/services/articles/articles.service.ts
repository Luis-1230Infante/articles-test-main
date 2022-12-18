import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(private readonly http: HttpClient) {}

  findAll<T>(): Observable<T> {
    return this.http.get<T>(environment.api.articles);
  }
  filter<T>(param: string): Observable<T> {
    return this.http.get<T>(environment.api.articles, {
      params: { filter: param },
    });
  }
}
