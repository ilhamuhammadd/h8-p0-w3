function dataHandling2(arr) {

    // console.log(arr)
    // Soal Splice
    arr.splice(1, 2, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung')
    arr.splice(4, 1, 'Pria', 'SMA Internasional Metro')
    console.log(arr)

    // Soal Case dan Splite
    // console.log(arr[3])
    // var arrSetrip = arr[3].split('/')
    var arrSplit = arr[3].split('/')
    var arrCase = arr[3].split('/')
    switch (arrCase[1]) {
        case '05': console.log(arrCase[1] = 'Mei'); break;
    }
    // console.log(parseInt(arrSplit[0]))
    // console.log(parseInt(arrSplit[1]))
    // console.log(parseInt(arrSplit[2]))
    // temp = []
    // for (var i = 0; i < arrSplit.length; i++) {
    //     temp += parseInt(arrSplit[i])
    // }
    // console.log(temp)

    // Soal Sort
    // console.log(arrSplit)
    // console.log(arrSplit.sort())

    var arrSort = arrSplit.sort(function(value1, value2) { return value1 < value2 });
    console.log(arrSort);

    // Soal memasukan setrip pada tanggal/bulan/tahun
    // console.log(arr)
    var arrSetrip = arr[3].split('/')
    console.log(arrSetrip.join('-'))

    //Soal Slice
    var arrSlice = arr[1].slice(0,15)
    console.log(arrSlice)



}
var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]
dataHandling2(input)

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */