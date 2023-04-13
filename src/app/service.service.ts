import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  DataList() {
    // let params = new HttpParams();
    // params = params.append('Group', Group);

    return this.http.get(environment.api ).pipe(
      catchError((error: any) => {
        let res: any = {
          msg: error.message,
          err: true
        }
        return of(res)
      })
    )
  }
}
