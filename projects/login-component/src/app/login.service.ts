import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ComponentState} from './app.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  componentState = ComponentState.LOGIN;

  constructor(private http: HttpClient) {
  }

  /**
   * dummy login against fakeapi.
   * we just check if use exists.
   *
   * @param username .
   * @param password .
   */
  login(username: string, password: string): Observable<any> {
    return new Observable((o) => {
      this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe((users) => {

        const userIndex = users.map((u) => u.username).indexOf(username);

        o.next(userIndex !== -1 ? users[userIndex] : null);
        o.complete();
      });
    });
  }
}
