import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class FormService {
  private numberOfChecks$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  getNumberOfChecks(): Observable<number> {
    return this.numberOfChecks$.asObservable();
  }

  addCheck(): void {
    this.numberOfChecks$.next(this.numberOfChecks$.value + 1);
  }
}
