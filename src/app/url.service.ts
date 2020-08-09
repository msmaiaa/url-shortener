import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  url: string = "http://localhost:3001/url"

  constructor(private http:HttpClient) { }

  addUrl(urlInfo):Observable<any>{
    return this.http.post<any>(`${this.url}/new`, urlInfo);
  }

  getUrl(slug):Observable<any>{
    return this.http.get<any>(`${this.url}/${slug}`);
  }
}
