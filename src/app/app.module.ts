import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ButtonComponent } from './page/button/button.component';
import { SlidercComponent } from './page/sliderc/sliderc.component';

const routes: Routes = [
  { path: '', redirectTo: 'buttons', pathMatch: 'full' },
  { path: 'buttons', component: ButtonComponent },
  { path: 'sliders', component: SlidercComponent }
]

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true }),
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    AppComponent,
    ButtonComponent,
    SlidercComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
