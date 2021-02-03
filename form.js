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
        const BIGFORM = document.createElement("div");
        const smallForm = document.createElement("div");
        BIGFORM.className = "bigform";
        let opcija = null;
        let labela = null;
        const kontForma = document.createElement("div");
        kontForma.className="kontForma";
        smallForm.className= "kontForma";
        let divR = null;
        //divR.className = "divForma";
        //host.appendChild(kontForma);

        //var elLabela = null;
        this.praviLabel(kontForma, "h4", "Add to list");
        // document.createElement("h4");
        // elLabela.innerHTML = "Add to list";
        // kontForma.appendChild(elLabela);


        this.praviLabel(kontForma, "label", "Read or Watch list?");
        // document.createElement("label");
        // elLabela.innerHTML = "Read or Watch list?";
        // kontForma.appendChild(elLabela);


        let tipListe = ["Read", "Watch"];
        this.praviRadio(kontForma, tipListe, "tip");


        let Zanr = ["Shonen", "Shoujo", "Seinen", "Josei", "Ecchi", "Isekai", "Mecha", "Slice of Life"];
        divR = document.createElement("div");
        let zanr = document.createElement("select");
        zanr.className = "zanr";
        this.praviLabel(divR, "label", "Genre: ");
        // document.createElement("label");
        // labela.innerHTML = "Genre: ";
        // divR.appendChild(labela);
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
        this.praviLabel(divR, "label", "Name: ");
        // document.createElement("label");
        // labela.innerHTML = "Name: ";
        let polje = document.createElement("input");
        polje.className = "ime";
        //divR.appendChild(labela);
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
            //let daLiPostoji;
            this.lista.forEach((X, index)=>
            {
                if(tip == X.tip && tip == "Watch")
                {
                    //if(!X.lista.find(el => el.ime == ime))
                    //{
                        element = new Anime(genre, ime, status);
                        X.dodajElementUListu(element);
                        X.azurirajListu();
                    //}
                }
                else if(tip == X.tip && tip == "Read")
                {
                    //if(X.Lista.find(el => el.ime == ime))
                    //{
                        element = new Manga(genre, ime, status);
                        X.dodajElementUListu(element);
                        X.azurirajListu();
                    //}
                }
            })

            // console.log("Read Lista");
            // console.log(this.lista[0]);
            // console.log("Watch lista");
            // console.log(this.lista[1]);

        }

        BIGFORM.appendChild(kontForma);


        divR = document.createElement("div");
        this.praviLabel(smallForm, "h4", "Update in list");

        this.praviLabel(divR, "label", "Read or Watch list?");
        this.praviRadio(divR, tipListe, "tip1");
        smallForm.appendChild(divR);

        divR = document.createElement("div");
        this.praviLabel(divR, "label", "Index of the selected item: ");
        polje = document.createElement("input");
        polje.className = "indeks";
        divR.appendChild(polje);
        smallForm.appendChild(divR);

        divR = document.createElement("div");
        this.praviLabel(divR, "label", "How did status change?");
        this.praviRadio(divR, Enum, "status1");
        smallForm.appendChild(divR);
        
        divR = document.createElement("div");
        const Dugme = document.createElement("button");
        Dugme.innerHTML = "Update list";
        divR.appendChild(Dugme);
        smallForm.appendChild(divR);

        Dugme.onclick = (ev) =>
        {
            const tip = this.kontejner.querySelector(`input[name ='${"tip1"}']:checked`).value;
            const status = this.kontejner.querySelector(`input[name ='${"status1"}']:checked`).value;
            const IND = parseInt(this.kontejner.querySelector(".indeks").value);
            // console.log("tip");
            // console.log(tip);
            // console.log("status");
            // console.log(status);
            // console.log(IND);
            this.lista.forEach((X, index)=>
            {
                if(X.tip == tip)
                {
                    X.lista[IND-1].azurirajStatus(status);
                    X.azuriranjeListe(IND-1);
                }
            })
        }

        BIGFORM.appendChild(smallForm);
        host.appendChild(BIGFORM);
    }

    praviLabel(host, tip, STRING)
    {
        var labela = document.createElement(tip);
        labela.innerHTML = STRING;
        host.appendChild(labela);
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