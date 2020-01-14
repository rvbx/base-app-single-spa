import { Component, OnInit } from '@angular/core';
// Single SPA
import * as singleSpa from 'single-spa';
import { MICRO_APPS } from 'src/environments/environment';

@Component({
  selector: 'rod-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'base';



ngAfterViewInit() {
    /**
     * Registra os micro apps
     */

    MICRO_APPS.forEach(MICRO_APP => {
      console.log(MICRO_APP)
      singleSpa.registerApplication(
        MICRO_APP.appName,
        // @ts-ignore
        () => System.import(MICRO_APP.main).then(appModule => {
          console.log('app module: single-spa', appModule);
          return appModule.default;
        }),
        location => location.pathname.startsWith(MICRO_APP.path)
      );
    });

    singleSpa.start();
  }


  ngOnInit() {

  }


}
