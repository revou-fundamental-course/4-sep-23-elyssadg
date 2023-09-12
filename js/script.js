function hitungLuasPersegi() {
    const result = document.getElementById('luas-persegi');
    const sisi = document.getElementById('sisi-luas').value;

    if (parseInt(sisi) < 0 || sisi == "") {
        alert('Sisi harus > 0');
        return;
    }

    result.innerHTML = "L = S x S<br>L = " + sisi + " x " + sisi + "<br>L = " + (sisi * sisi);
    result.style.display = "block";
}

function resetLuasPersegi() {
    const result = document.getElementById('luas-persegi');
    const sisi = document.getElementById('sisi-luas');
    sisi.value = "";
    result.style.display = "none";
}

function hitungKelilingPersegi() {
    const result = document.getElementById('keliling-persegi');
    const sisi = document.getElementById('sisi-keliling').value;

    if (parseInt(sisi) || sisi == "") {
        alert('Sisi harus > 0');
        return;
    }

    result.innerHTML = "K = 4 x S<br>K = 4 x " + sisi + "<br>K = " + (4 * sisi);
    result.style.display = "block";
}

function resetKelilingPersegi() {
    const result = document.getElementById('keliling-persegi');
    const sisi = document.getElementById('sisi-keliling');
    sisi.value = "";
    result.style.display = "none";
}

function hitungLuasPersegiPanjang() {
    const result = document.getElementById('luas-persegi-panjang');
    const panjang = document.getElementById('panjang-luas').value;
    const lebar = document.getElementById('lebar-luas').value;

    if (parseInt(panjang) < 0 || parseInt(lebar) < 0 || panjang == "" || lebar == "") {
        alert('Panjang dan lebar harus > 0');
        return;
    }

    result.innerHTML = "L = P x l<br>L = " + panjang + " x " + lebar + "<br>L = " + (panjang * lebar);
    result.style.display = "block";
}

function resetLuasPersegiPanjang() {
    const result = document.getElementById('luas-persegi-panjang');
    const panjang = document.getElementById('panjang-luas');
    const lebar = document.getElementById('lebar-luas');
    panjang.value = "";
    lebar.value = "";
    result.style.display = "none";
}

function hitungKelilingPersegiPanjang() {
    const result = document.getElementById('keliling-persegi-panjang');
    const panjang = document.getElementById('panjang-keliling').value;
    const lebar = document.getElementById('lebar-keliling').value;

    if (parseInt(panjang) < 0 || parseInt(lebar) < 0 || panjang == "" || lebar == "") {
        alert('Panjang dan lebar harus > 0');
        return;
    }

    const keliling = 2 * (parseInt(panjang) + parseInt(lebar));
    result.innerHTML = "K = 2 x (P + l)<br>K = 2 x (" + panjang + " + " + lebar + ")<br>K = " + keliling;
    result.style.display = "block";
}

function resetKelilingPersegiPanjang() {
    const result = document.getElementById('keliling-persegi-panjang');
    const panjang = document.getElementById('panjang-keliling');
    const lebar = document.getElementById('lebar-keliling');
    panjang.value = "";
    lebar.value = "";
    result.style.display = "none";
}

function hitungPersegi() {
    const persegi = document.getElementById('persegi');
    const persegiPanjang = document.getElementById('persegi-panjang');
    persegi.style.display = "block";
    persegiPanjang.style.display = "none";
    
    const persegiBtn = document.getElementById('btn-persegi');
    const persegiPanjangBtn = document.getElementById('btn-persegi-panjang');
    persegiBtn.classList.add("active");
    persegiPanjangBtn.classList.remove("active");

    resetLuasPersegi();
    resetKelilingPersegi();
}

function hitungPersegiPanjang() {
    const persegi = document.getElementById('persegi');
    const persegiPanjang = document.getElementById('persegi-panjang');
    persegi.style.display = "none";
    persegiPanjang.style.display = "block";
    
    const persegiBtn = document.getElementById('btn-persegi');
    const persegiPanjangBtn = document.getElementById('btn-persegi-panjang');
    persegiBtn.classList.remove("active");
    persegiPanjangBtn.classList.add("active");

    resetLuasPersegiPanjang();
    resetKelilingPersegiPanjang();
}