import { Component, AfterViewInit } from '@angular/core';
// Single SPA
import * as singleSpa from 'single-spa';
import { MICRO_APPS } from 'src/environments/environment';
import { BaseInfoService } from "./_services/base-info.service";


@Component({
  selector: 'rod-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {

  title = 'base';

  constructor(
    private baseInfo: BaseInfoService
  ) { }


  ngAfterViewInit() {
    /**
     * Registra os micro apps
     */
    MICRO_APPS.forEach(MICRO_APP => {
      console.log('MICRO_APP', MICRO_APP);
      singleSpa.registerApplication(
        MICRO_APP.appName,
        // @ts-ignore
        () => window.System.import(MICRO_APP.main).then(appModule => {
          console.log('app module: single-spa', appModule);
          return appModule.default;
        }),
        location => location.pathname.startsWith(MICRO_APP.path),
        {
          foo: this.baseInfo.foo$,
          setFoo: this.baseInfo.setFoo
        }
      );
    });

    singleSpa.start();
  }

}
