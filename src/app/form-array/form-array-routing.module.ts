import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HobbiesComponent } from './components/hobbies/hobbies.component';

const routes: Routes = [{ path: '', component: HobbiesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormArrayRoutingModule {}
