import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import './polyfills';

if (process.env.STATIC) {
  //console.log("******************You are in Dev mode******************");
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then((): any => {});
} 

export function main() {
  return platformBrowserDynamic().bootstrapModule(AppModule);
}
