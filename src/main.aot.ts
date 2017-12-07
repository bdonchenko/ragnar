import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from 'app/app.module.ngfactory';
import './polyfills';

// tslint:disable-next-line:no-console
console.log('******************You are in prod mode******************');

enableProdMode();
platformBrowser()
  .bootstrapModuleFactory(<any>AppModuleNgFactory)
  // tslint:disable-next-line:no-console
  .catch(error => console.log(error));
