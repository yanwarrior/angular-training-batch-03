import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { PageSigninComponent } from './pages/page-signin/page-signin.component';
import { MessageValidatorComponent } from './components/message-validator/message-validator.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PageBarangListComponent } from './pages/barang/page-barang-list/page-barang-list.component';
import { PageBarangCreateComponent } from './pages/barang/page-barang-create/page-barang-create.component';
import { PageBarangDetailComponent } from './pages/barang/page-barang-detail/page-barang-detail.component';
import { SalesMainComponent } from './pages/sales-main/sales-main.component';
import { NavigationComponent } from './components/navigation/navigation.component';


@NgModule({
  declarations: [
    PageSigninComponent,
    MessageValidatorComponent,
    PageBarangListComponent,
    PageBarangCreateComponent,
    PageBarangDetailComponent,
    SalesMainComponent,
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class SalesModule { }
