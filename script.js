// Program pembelian alat komputer
let jumlahBarang = prompt('Masukkan jumlah jenis barang:');
let namaBarang, hargaSatuan, potongan, total;
let kodeBarang = prompt('Masukkan kode barang :');
let jumlahBeli = prompt('Masukkan jumlah pembelian : ');
if (kodeBarang == 1) {
	namaBarang = 'Mouse';
	hargaSatuan = 75000;
} else if (kodeBarang == 2) {
	namaBarang = 'Keyboard';
	hargaSatuan = 150000;
} else {
	namaBarang = 'Monitor';
	hargaSatuan = 500000;
}

total = jumlahBeli * hargaSatuan;

if (total > 150000 && namaBarang == 'Keyboard') {
	potongan = 25000;
} else {
	potongan = 0;
}

total -= potongan;

alert(
	'Data Pembelian' +
		'\n===========================' +
		'\nNama Barang : ' +
		namaBarang +
		'\nHarga Satuan : ' +
		hargaSatuan +
		'\nJumlah Pembelian : ' +
		jumlahBeli +
		'\nPotongan : ' +
		potongan +
		'\nTotal Pembayaran : ' +
		total
);
