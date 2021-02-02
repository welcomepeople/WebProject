//import {Lista} from "./lista,js";
import { Manga } from "./manga.js";
import {Anime} from "./anime.js";

export class Forma
{
    constructor(lista1, lista2)
    {
        this.kontejner = null;
        this.lista = [];
        this.lista.push(lista1);
        this.lista.push(lista2);
    }

    crtaj(host)
    {
        if(!host)
            throw new Exception("Ne postoji roditeljski element.");
        this.kontejner = document.createElement("div");
        this.kontejner.classList.add("kontejner");
        host.appendChild(this.kontejner);

        this.crtajFormu(this.kontejner);
    }
    crtajFormu(host)
    {
        let opcija = null;
        let labela = null;
        const kontForma = document.createElement("div");
        kontForma.className="kontForma";
        let divR = null;
        //divR.className = "divForma";
        host.appendChild(kontForma);

        var elLabela = document.createElement("h4");
        elLabela.innerHTML = "Add to list";
        kontForma.appendChild(elLabela);

        elLabela = document.createElement("label");
        elLabela.innerHTML = "Read or Watch list?";
        kontForma.appendChild(elLabela);


        let tipListe = ["Read", "Watch"];
        this.praviRadio(kontForma, tipListe, "tip");


        let Zanr = ["Shonen", "Shoujo", "Seinen", "Josei", "Ecchi", "Isekai", "Mecha", "Slice of Life"];
        divR = document.createElement("div");
        let zanr = document.createElement("select");
        zanr.className = "zanr";
        labela = document.createElement("label");
        labela.innerHTML = "Genre: ";
        divR.appendChild(labela);
        divR.appendChild(zanr);

        Zanr.forEach((X, index) =>
        {
            opcija = document.createElement("option");
            opcija.innerHTML = X;
            opcija.value = X;
            zanr.appendChild(opcija);
        })

        kontForma.appendChild(divR);

        divR = document.createElement("div");
        labela = document.createElement("label");
        labela.innerHTML = "Name: ";
        let polje = document.createElement("input");
        polje.className = "ime";
        divR.appendChild(labela);
        divR.appendChild(polje);
        kontForma.appendChild(divR);

        let Enum = ["Done", "Doing", "To Do"];
        this.praviRadio(kontForma, Enum, "status");


        divR = document.createElement("div");
        const dugme = document.createElement("button");
        dugme.innerHTML = "Add to list";
        divR.appendChild(dugme);
        kontForma.appendChild(divR);
        dugme.onclick = (ev) =>
        {
            const ime = this.kontejner.querySelector(".ime").value;
            const tip = this.kontejner.querySelector(`input[name ='${"tip"}']:checked`).value;
            const status = this.kontejner.querySelector(`input[name ='${"status"}']:checked`).value;
            const genre = this.kontejner.querySelector(".zanr").value;

            let element = null;
            this.lista.forEach((X, index)=>
            {
                if(tip == X.tip && tip == "Watch")
                {
                    element = new Anime(genre, ime, status);
                    X.dodajElementUListu(element);
                    X.azurirajListu();
                }
                else if(tip == X.tip && tip == "Read")
                {
                    element = new Manga(genre, ime, status);
                    X.dodajElementUListu(element);
                    X.azurirajListu();
                }
            })

            console.log("Read Lista");
            console.log(this.lista[0]);
            console.log("Watch lista");
            console.log(this.lista[1]);


        }
    }

    praviRadio(host, lis, nekiString)
    {
        let divR = null;
        let opcija = null;
        let labela = null;

        lis.forEach((X, index) =>
        {
            divR = document.createElement("div");
            opcija = document.createElement("input");
            opcija.type = "radio";
            opcija.name = nekiString;
            opcija.value = X;

            labela = document.createElement("label");
            labela.innerHTML = X;

            divR.appendChild(opcija);
            divR.appendChild(labela);
            host.appendChild(divR);
        })
    }
}