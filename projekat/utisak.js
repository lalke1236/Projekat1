function pokupiPodatke() {
    let imeInput = document.getElementById('ime');
    let prezimeInput = document.getElementById('prezime');
    let komentarInput = document.getElementById('komentar');

    let ime = imeInput.value;
    let prezime = prezimeInput.value;
    let komentar = komentarInput.value;

    let podaci = "Ime i prezime:" + ime + " " + prezime + "<br>" + "Komentar:" + komentar + ".";
return podaci;
}

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    let podaci = pokupiPodatke();
    document.getElementById('podaci').innerHTML = podaci;
})
