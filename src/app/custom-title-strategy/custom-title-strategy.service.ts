import { Injectable } from '@angular/core';
import {RouterStateSnapshot, TitleStrategy} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Injectable()
export class CustomTitleStrategyService extends TitleStrategy{
  updateTitle(snapshot: RouterStateSnapshot) {
    const title = this.buildTitle(snapshot);

    if (title) {
      this.title.setTitle(`My app - ${title}`);
    }
  }

  constructor(private title: Title) {
    super();
  }
}
