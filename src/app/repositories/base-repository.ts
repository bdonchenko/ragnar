import { HttpClient } from '@angular/common/http';
import { IJsonResponse } from 'app/repositories/i-json-response';
import { Observable } from 'rxjs/Observable';

export abstract class BaseRepository {
  
  constructor(private httpClient: HttpClient) {}

  get<T>(url: string): Observable<T> {
    return this.httpClient.get<IJsonResponse<T>>(url).map(data => data.results);
  }
}
