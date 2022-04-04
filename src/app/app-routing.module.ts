import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './root/root.component';
import { TestComponent } from './components/test/test.component';
import { Component1Component } from './components/component1/component1.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RootComponent,
  },
  { path: 'comp1', component: Component1Component },
  // {
  //   path: 'management',
  //   loadChildren: () =>
  //     import('./management/management.module').then((m) => m.ManagementModule),
  //   canActivate: [AuthGuard],
  // },
  // { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
