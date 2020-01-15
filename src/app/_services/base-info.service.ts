import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseInfoService {

  private static foo: BehaviorSubject<string> = new BehaviorSubject('foo value!');
  public foo$: Observable<string> = BaseInfoService.foo.asObservable();

  public setFoo(value: string) {
    if (value) { BaseInfoService.foo.next(value); }
  }

}
