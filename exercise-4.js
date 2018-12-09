
//contoh output
// ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]  

// Buatlah sebuah function dengan nama dataHandling2 yang akan menerima input array seperti di atas.

// Gunakan fungsi splice untuk memodifikasi variabel tersebut agar menjadi seperti array dibawah. Lalu console.log array yang baru seperti di bawah.

// ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]  

// Berdasarkan elemen yang berisikan tanggal/bulan/tahun (elemen ke-4), ambil angka bulan dan console.log nama bulan sesuai dengan angka tersebut.

// Gunakan split untuk memisahkan antara tanggal, bulan, dan tahun.
// Format tanggal pada data adalah dd-mm-YYYY
// Misal angka bulan 01, tuliskan "Januari"
// Gunakan switch case untuk menuliskan bulan di atas.

// Pada array hasil split dari tanggal/bulan/tahun, lakukan sorting secara descending dan console.log array yang sudah di-sort.

// Masih pada array hasil split dari elemen tanggal/bulan/tahun, gabungkan semua elemen menggunakan join dan pisahkan dengan karakter strip (-) lalu console.log hasilnya.

// Nama (elemen ke-2), harus dibatasi sebanyak 15 karakter saja. Gunakan slice untuk menghapus kelebihan karakter dan console.log nama yang sudah di-slice, sebelum di-slice pastikan Nama (elemen ke-2) sudah dalam bentuk String agar bisa di-slice.

function dataHandling2(input) {
    // Soal Splice
    input.splice(1,2,'Roman Almansyah Elsharawy', 'Provinsi Bandar Lampung')
    console.log(input)
    // console.log(input[3])
    var angkaBln = input[3]
    // console.log(angkaBln)
    var arrayBln = angkaBln.split('/')
    var arrayBln2 = angkaBln.split('/')
    var arrayBln3 = angkaBln.split('/')
    // console.log(arrayBln[1])
    // Soal Switch-Case
    switch(Number(arrayBln[1])) {
        case 01: console.log(arrayBln[1] = 'Januari'); break;
        case 02: console.log(arrayBln[1] = 'Februari'); break;
        case 03: console.log(arrayBln[1] = 'Maret'); break;
        case 04: console.log(arrayBln[1] = 'April'); break;
        case 05: console.log(arrayBln[1] = 'Mei'); break;
        case 06: console.log(arrayBln[1] = 'Juni'); break;
        case 07: console.log(arrayBln[1] = 'Juli'); break;
        case 08: console.log(arrayBln[1] = 'Agustus'); break;
        case 09: console.log(arrayBln[1] = 'September'); break;
        case 10: console.log(arrayBln[1] = 'Oktober'); break;
        case 11: console.log(arrayBln[1] = 'November'); break;
        case 12: console.log(arrayBln[1] = 'Desember'); break;
    }

    // Soal Sorting Tanggla Bulan Tahun
    var angkaBulan = arrayBln2
    angkaBulan.sort(function(a, b){return b - a});
    console.log(angkaBulan)

    // Soal Join menggabungkan dan dipisahkan menggunakan - pada Tanggal Bulan dan Tahun
    console.log(arrayBln3.join('-'))

    //Soal Slice untuk membatasi karakter pada elemen Nama Lengkap
    console.log(input[1].slice(0,15))
}

// Test-case

// Untuk memastikan program kamu sudah bekerja dengan benar, gunakan test-case dibawah.
var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
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