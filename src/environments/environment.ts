// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const MICRO_APPS = [
  {
    appName: 'app1',
    main: 'http://localhost:4301/main.js',
    path: '/app1',
    codigo: 0
  },
  {
    appName: 'app2',
    main: 'http://localhost:4302/main.js',
    path: '/app2',
    codigo: 1
  }
];

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
