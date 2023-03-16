import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'form-array',
    loadChildren: () =>
      import('./form-array/form-array.module').then((m) => m.FormArrayModule),
  },
  { path: '**', redirectTo: '/form-array' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
