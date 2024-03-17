import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageSigninComponent } from './pages/page-signin/page-signin.component';
import { PageBarangListComponent } from './pages/barang/page-barang-list/page-barang-list.component';
import { AuthGuard } from './guards/auth.guard';
import { SalesMainComponent } from './pages/sales-main/sales-main.component';
import { PageBarangCreateComponent } from './pages/barang/page-barang-create/page-barang-create.component';
import { PageBarangDetailComponent } from './pages/barang/page-barang-detail/page-barang-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PageSigninComponent
  },
  {
    path: 'main',
    component: SalesMainComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'barang',
        component: PageBarangListComponent
      },
      {
        path: 'barang/new',
        component: PageBarangCreateComponent
      },
      {
        path: 'barang/detail/:id',
        component: PageBarangDetailComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
