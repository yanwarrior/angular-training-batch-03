import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { IBarang } from 'src/app/sales/interfaces/i-barang';
import { BarangModel } from 'src/app/sales/models/barang-model';
import { BarangService } from 'src/app/sales/services/barang.service';

@Component({
  selector: 'app-page-barang-detail',
  templateUrl: './page-barang-detail.component.html',
  styleUrls: ['./page-barang-detail.component.css']
})
export class PageBarangDetailComponent implements OnInit {
  barang: IBarang = new BarangModel();

  /**
   * constructor adalah method default kelas yang dijalankan ketika kelas dipakai dan memastikan inisialisasi properti (variabel) dalam kelas dan subkelasnya dengan tepat.
   * @param activateRoute 
   * @param barangService 
   */
  constructor(private activateRoute: ActivatedRoute, private barangService: BarangService) {}

  /**
   * ngOnInit dipanggil oleh Angular untuk menunjukkan bahwa Angular telah selesai membuat komponen.
   * Kita harus mengimpor OnInit seperti ini untuk menggunakannya (sebenarnya penerapan OnInit tidak wajib tetapi dianggap sebagai praktik yang baik):
   */
  ngOnInit(): void {
    /**
     * Jadi, Anda harus menggunakan constructor() untuk menyiapkan DI dan lainnya. ngOnInit() adalah tempat yang lebih baik untuk "memulai" - di sinilah/saat component binding diselesaikan.
     */
    let id = this.activateRoute.snapshot.params['id']
    this.onGet(id);

    // let x = this.activateRoute.snapshot.queryParams

    // console.log(id)
    // console.log(typeof id)

    // console.log(x)
    // console.log(typeof x)
  }

  onGet(id: string) {
    this.barangService.get(id)
      .pipe(catchError((error: HttpErrorResponse) => {
        return throwError(() => new Error('Something bad happened; please try again later.'))
      }))
      .subscribe((response: IBarang) => {
        this.barang = response;
      })
  }
}
