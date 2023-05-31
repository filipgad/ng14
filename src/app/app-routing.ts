import {Routes} from '@angular/router';
import {FormService} from './form/form.service';
import {AddUserComponent} from './add-user/add-user.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {inject} from '@angular/core';
import {VersionService} from './version/version.service';

export const routes: Routes = [
  {
    path: 'home',
    title: 'HOME V1',
    canMatch: [(): boolean => inject(VersionService).getVersion() === 1],
    loadComponent: () => import('./home-v1/home-v1.component').then(v => v.HomeV1Component),
  },
  {
    path: 'home',
    title: 'HOME V2',
    loadComponent: () => import('./home-v2/home-v2.component').then(v => v.HomeV2Component),
  },
  {
    path: '',
    providers: [
      FormService,
    ],
    children: [
      {
        path: 'add-user',
        component: AddUserComponent,
        title: 'Add user'
      },
      {
        path: 'edit-user',
        component: EditUserComponent,
        title: 'Edit user'
      },
    ],
  },
];
