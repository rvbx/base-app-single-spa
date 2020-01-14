import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { MicroAppComponent } from './micro-app/micro-app.component';

const ROUTES_APP: Routes = [{
  path: 'app1',
  children: [{ path: '**', component: MicroAppComponent }]
},
{
  path: '',
  redirectTo: 'app1',
  pathMatch: 'full'
}
];


@NgModule({
  declarations: [
    AppComponent,
    MicroAppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES_APP)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
