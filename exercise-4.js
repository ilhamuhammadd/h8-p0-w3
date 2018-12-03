//contoh output
// ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]  

//     Buatlah sebuah function dengan nama dataHandling2 yang akan menerima input array seperti di atas.

//     Gunakan fungsi splice untuk memodifikasi variabel tersebut agar menjadi seperti array dibawah. Lalu console.log array yang baru seperti di bawah.

// ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]  

//     Berdasarkan elemen yang berisikan tanggal/bulan/tahun (elemen ke-4), ambil angka bulan dan console.log nama bulan sesuai dengan angka tersebut.
//         Gunakan split untuk memisahkan antara tanggal, bulan, dan tahun.
//         Format tanggal pada data adalah dd-mm-YYYY
//         Misal angka bulan 01, tuliskan "Januari"
//         Gunakan switch case untuk menuliskan bulan di atas.

//     Pada array hasil split dari tanggal/bulan/tahun, lakukan sorting secara descending dan console.log array yang sudah di-sort.

//     Masih pada array hasil split dari elemen tanggal/bulan/tahun, gabungkan semua elemen menggunakan join dan pisahkan dengan karakter strip (-) lalu console.log hasilnya.

//     Nama (elemen ke-2), harus dibatasi sebanyak 15 karakter saja. Gunakan slice untuk menghapus kelebihan karakter dan console.log nama yang sudah di-slice, sebelum di-slice pastikan Nama (elemen ke-2) sudah dalam bentuk String agar bisa di-slice.
function dataHandling2(input) {
    // Soal Menambah/Menghapus Elemen pada Array Menggunakan splice
    input.splice(1,2,'Roman Alamsyah Elsharawy','Provinsi Bandar Lampung')
    console.log(input)
    var angka = input[3].split('/')
    // console.log(angka[1])
    // Soal Mengganti Angka Menjadi Bulan
    switch(angka[1]) {
        case '01': console.log(angka[1] = 'Januari'); break;
        case '02': console.log(angka[1] = 'Februari'); break;
        case '03': console.log(angka[1] = 'Maret'); break;
        case '03': console.log(angka[1] = 'April'); break;
        case '05': console.log(angka[1] = 'Mei'); break;
        case '06': console.log(angka[1] = 'Juni'); break;
        case '07': console.log(angka[1] = 'Juli'); break;
        case '08': console.log(angka[1] = 'Agustus'); break;
        case '09': console.log(angka[1] = 'September'); break;
        case '10': console.log(angka[1] = 'Oktober'); break;
        case '11': console.log(angka[1] = 'November'); break;
        case '12': console.log(angka[1] = 'Desember'); break;

    }
    // Soal Sorting Tanggal Menggunakan Sort
    var ttl = input[3].split('/')
    ttl.sort(function(value1, value2) { return Number(value1) < Number(value2) });
    console.log(ttl)
    // Soal Join dengan menambahkan string -
    var joinBulan = input[3].split('/')
    console.log(joinBulan.join('-'))
    // Soal Slicc, dengan memberi batas jumlah karakter pada data Nama
    var sliceNama = input[1].slice(0,15)
    console.log(sliceNama)


}



// Test-case

// Untuk memastikan program kamu sudah bekerja dengan benar, gunakan test-case dibawah.

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */