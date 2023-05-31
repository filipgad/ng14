import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class VersionService {
  private readonly version: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  getVersion(): number {
    return this.version.value;
  }

  setVersion(version: number): void {
    this.version.next(version);
  }
}
