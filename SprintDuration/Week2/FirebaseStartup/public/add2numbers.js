function kalkulator() {
    let angka = document.querySelectorAll('input');
    angka[2].value = parseInt(angka[0].value) + parseInt(angka[1].value);
}
let tombol = document.querySelector('#calculate').addEventListener('click', kalkulator);