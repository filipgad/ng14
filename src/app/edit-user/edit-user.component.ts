import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormService} from '../form/form.service';
import {AsyncPipe} from '@angular/common';
import {Observable} from 'rxjs';
import {VersionService} from '../version/version.service';
import {NavButtonComponent} from '../nav-button/nav-button.component';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  templateUrl: './edit-user.component.html',
  imports: [
    RouterLink,
    AsyncPipe,
    NavButtonComponent
  ],
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {
  protected readonly numberOfChecks$: Observable<number> = inject(FormService).getNumberOfChecks();
  protected readonly version = inject(VersionService);

  setVersion(version: number): void {
    this.version.setVersion(version);
  }
}
