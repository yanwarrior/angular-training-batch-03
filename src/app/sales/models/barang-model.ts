import { IBarang } from "../interfaces/i-barang";

export class BarangModel implements IBarang {
  _id?: string | undefined;
  nomor: string;
  nama: string;
  satuan: string;
  hargaJual: number;
  stok: number;

  constructor() {
    this._id = "";
    this.nomor = "";
    this.nama = "";
    this.satuan = "";
    this.hargaJual = 0;
    this.stok = 0;
  }
}
