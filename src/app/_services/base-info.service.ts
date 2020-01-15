import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseInfoService {

  private foo: BehaviorSubject<string> = new BehaviorSubject('foo value!');
  public foo$: Observable<string> = this.foo.asObservable();

}
