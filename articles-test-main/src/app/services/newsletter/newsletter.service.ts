import { environment } from './../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INewsletter } from '../interfaces/newsletter.interface';

@Injectable({
  providedIn: 'root',
})
export class NewsletterService {
  constructor(private readonly http: HttpClient) {}

  send<T>(data: INewsletter): Observable<T> {
    return this.http.post<T>(environment.api.newsletter, data);
  }
}
