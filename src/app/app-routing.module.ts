import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/**
 * ng generate module app-routing --flat --module=app
 */

const routes: Routes = [
  {
    path: 'sales',
    loadChildren: () => import("./sales/sales.module").then((m) => m.SalesModule),
  },
  { path: '', redirectTo: '/sales', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
