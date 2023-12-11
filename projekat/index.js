let dobrodoslica = document.getElementById('dobrodoslica');
dobrodoslica.style.fontStyle = "italic";
dobrodoslica.style.color = "white";

let linksDiv = document.getElementById('linksDiv');

if(linksDiv) {

    let navMenu = document.createElement('nav');
    linksDiv.appendChild(navMenu);
    
    let ul = document.createElement('ul');
    ul.style.display = "flex";
    navMenu.appendChild(ul);

    
    
    let ListElement = ['','','',''];
    
    let aText = ['Pocetna' , 'Automobili','Naruci','Ostavite utisak']
    
    let hrefs = ['pocetna.html','automobili.html','naruci.html','utisak.html'];
    
    
    for(i = 0; i< ListElement.length; i++) {
    
        let li = document.createElement('li');
        let a = document.createElement('a');
        li.appendChild(a);
        li.style.listStyleType = "none";
        li.style.margin = "6px";
        li.style.border = "1px solid black";
        
        a.innerHTML = aText[i];
        a.style.textDecoration = "none";
        a.setAttribute('href',hrefs[i]);
        a.style.color = "white";
        a.style.backgroundColor = "red";
        a.style.fontWeight = "bold";
        a.style.padding = "3px";
        
        ul.appendChild(li);
    
    }
}

let listaAutomobila = document.getElementById('listaAutomobila');

if(listaAutomobila) {

    function predjiPrekoSlike() {
        alert('Slika auta');
    }

let naziviAutomobila = ['Volkswagen Golf 7 E-Golf','Mercedes Benz EQE','Linzda M3', 'Peugeot iOn'];

let slikeAutomobila = ['Slike/golf.jpeg', 'Slike/mercedes.jpeg', 'Slike/linzda.jpeg', 'Slike/peugeot.jpeg'];

let ceneAutomobila = ['13.450 €','83.200 €','5.599 €','6.200 €'];

for(i = 0; i < naziviAutomobila.length; i++) {
    let naslov = document.createElement('h1');
    listaAutomobila.appendChild(naslov);
    naslov.innerHTML = naziviAutomobila[i];
    naslov.style.color = "white";
    
    let slika = document.createElement('img');
    slika.setAttribute(`src`, slikeAutomobila[i])
    listaAutomobila.appendChild(slika);

    let paragrafCena = document.createElement('p');
    paragrafCena.innerHTML = "Cena:";
    paragrafCena.style.color = "white";
    paragrafCena.style.fontSize = "25px";
    listaAutomobila.appendChild(paragrafCena);

    let cena = document.createElement('p');
    listaAutomobila.appendChild(cena);
    cena.innerHTML = ceneAutomobila[i];
    cena.style.color = "yellow";
    cena.style.fontSize = "30px";

    }
}
