import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';
import {NavButtonComponent} from '../nav-button/nav-button.component';

@Component({
  selector: 'app-home-v1',
  standalone: true,
  imports: [CommonModule, RouterLink, NavButtonComponent],
  templateUrl: './home-v1.component.html',
  styleUrls: ['./home-v1.component.scss']
})
export class HomeV1Component {}
