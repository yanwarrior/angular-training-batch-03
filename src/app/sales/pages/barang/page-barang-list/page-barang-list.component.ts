import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { IBarang } from 'src/app/sales/interfaces/i-barang';
import { IError } from 'src/app/sales/interfaces/i-error';
import { BarangService } from 'src/app/sales/services/barang.service';

@Component({
  selector: 'app-page-barang-list',
  templateUrl: './page-barang-list.component.html',
  styleUrls: ['./page-barang-list.component.css']
})
export class PageBarangListComponent implements OnInit {
  error: IError =  {detail: ""};
  daftarBarang: IBarang[] = [];

  constructor(private barangService: BarangService) {}

  ngOnInit(): void {
    this.onList()
  }

  onList() {
    this.barangService.list()
      .pipe(catchError((error: HttpErrorResponse) => {
        this.error.detail = error.error.detail;
        return throwError(() => new Error(`Something bad happened; please try again later.`))
      }))
      .subscribe((response: IBarang[]) => {
        this.daftarBarang = response;
      })
  }

  
}
