import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchService {

  constructor(
    private http: HttpClient
  ) {
  }

  getFeatureDemo(): Observable<any> {
    return this.http.get<any>(`localhost://9001/feature/1`);
  }
}
