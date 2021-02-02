import { Anime } from "./anime.js";
import {Manga} from "./manga.js";

export class Lista{
    constructor(naziv, tip){
        this.naziv = naziv;
        this.kontejner = null;
        this.tip = tip;
        this.lista=[];

        if(tip == "Watch")
            this.lista.push(new Anime("anime-zanr", "anime-ime", "Doing"));
        if(tip == "Read")
            this.lista.push(new Manga("manga-tip", "manga-ime", "Doing"));
    }

    dodajElementUListu(el)
    {
        this.lista.push(el);
    }

    crtaj(host)
    {
        if(!host)
            throw new Exception("Ne postoji roditeljski element.");
        this.kontejner = document.createElement("div");
        this.kontejner.classList.add("kontejner");
        host.appendChild(this.kontejner);

        this.crtajListu(this.kontejner);
        //this.crtajFormu(this.kontejner);
    }

    crtajListu(host)
    {
        const kontLista = document.createElement("div");
        kontLista.className = "kontListe";
        host.appendChild(kontLista);

        let labela = document.createElement("h4");
        labela.innerHTML = this.naziv;          
        kontLista.appendChild(labela);
        host.appendChild(kontLista);

        let tabela = document.createElement("table");
        tabela.className = "tabela";

        this.lista.forEach((X, index) =>
        {
            this.dodajNoviRed(X, index, tabela);
            // let row = document.createElement("tr");
            // let data = document.createElement("td");
            // let btn = document.createElement("button");
            // btn.innerHTML = String(index+1) + ".";
            // data.appendChild(btn);

            // /////mnogo ruzno ali definicija sta radi dugme
            // btn.onclick = (ev) =>
            // {

            // }
            // /////

            // data.className = "prvaKolona";
            // //data.innerHTML = String(index+1) + ".";
            // row.appendChild(data);

            // data = document.createElement("td");
            // data.className = "drugaKolona";
            // X.vratiIme(data);
            // row.appendChild(data);

            // data = document.createElement("td");
            // data.className = "trecaKolona";
            // X.vratiZanr(data);
            // row.appendChild(data);
            
            // data = document.createElement("td");
            // data.className = "cetvrtaKolona";
            // X.vratiStatus(data);
            // row.appendChild(data);
            
            // tabela.appendChild(row);
        }) 
        kontLista.appendChild(tabela);
        host.appendChild(kontLista);
    }

    dodajNoviRed(X, indeks, tabela)
    {
        let row = document.createElement("tr");
        let data = document.createElement("td");
        data.className = "prvaKolona";
        let btn = document.createElement("button");
        btn.innerHTML = String(indeks+1) + ".";
        data.appendChild(btn);

        /////mnogo ruzno ali definicija sta radi dugme
        btn.onclick = (ev) =>
        {

        }
        /////

        row.appendChild(data);

        data = document.createElement("td");
        data.className = "drugaKolona";
        X.vratiIme(data);
        row.appendChild(data);

        data = document.createElement("td");
        data.className = "trecaKolona";
        X.vratiZanr(data);
        row.appendChild(data);
            
        data = document.createElement("td");
        data.className = "cetvrtaKolona";
        X.vratiStatus(data);
        row.appendChild(data);
            
        tabela.appendChild(row);
    }

    azurirajListu()
    {
        let el = this.lista[this.lista.length-1];
        const T = this.kontejner.querySelector(".tabela");
        //const kL = this.kontLista.querySelector(".kontListe");
        this.dodajNoviRed(el, this.lista.length-1, T);
        //kL.appendChild(T);
        //this.kontejner.appendChild
        
    }
    // crtajFormu(host){
    //     let opcija = null;
    //     let labela = null;
    //     const kontForma = document.createElement("div");
    //     kontForma.className="kontForma";
    //     let divR = null;
    //     //divR.className = "divForma";
    //     host.appendChild(kontForma);

    //     var elLabela = document.createElement("h4");
    //     elLabela.innerHTML = "Add to list";
    //     kontForma.appendChild(elLabela);

    //     elLabela = document.createElement("label");
    //     elLabela.innerHTML = "Read or Watch list?";
    //     kontForma.appendChild(elLabela);


    //     let tipListe = ["Read", "Watch"];
    //     this.praviRadio(kontForma, tipListe, "tip");


    //     let Zanr = ["Shonen", "Shoujo", "Seinen", "Josei", "Ecchi", "Isekai", "Mecha", "Slice of Life"];
    //     divR = document.createElement("div");
    //     let zanr = document.createElement("select");
    //     zanr.className = "zanr";
    //     labela = document.createElement("label");
    //     labela.innerHTML = "Genre: ";
    //     divR.appendChild(labela);
    //     divR.appendChild(zanr);

    //     Zanr.forEach((X, index) =>
    //     {
    //         opcija = document.createElement("option");
    //         opcija.innerHTML = X;
    //         opcija.value = X;
    //         zanr.appendChild(opcija);
    //     })

    //     kontForma.appendChild(divR);

    //     divR = document.createElement("div");
    //     labela = document.createElement("label");
    //     labela.innerHTML = "Name: ";
    //     let polje = document.createElement("input");
    //     polje.className = "ime";
    //     divR.appendChild(labela);
    //     divR.appendChild(polje);
    //     kontForma.appendChild(divR);

    //     let Enum = ["Done", "Doing", "To Do"];
    //     this.praviRadio(kontForma, Enum, "status");


    //     divR = document.createElement("div");
    //     const dugme = document.createElement("button");
    //     dugme.innerHTML = "Add to list";
    //     divR.appendChild(dugme);
    //     kontForma.appendChild(divR);
    //     dugme.onclick = (ev) =>
    //     {
    //         const ime = this.kontejner.querySelector(".ime").value;
    //         const tip = this.kontejner.querySelector(`input[name ='${"tip"}']:checked`).value;
    //         const status = this.kontejner.querySelector(`input[name ='${"status"}']:checked`).value;
    //         const genre = this.kontejner.querySelector(".zanr").value;

    //         let element = null;
    //         if(tip == this.tip)
    //         {
    //             element = new Anime(genre, ime, status);
    //             this.dodajElementUListu(element);
    //         }
    //         console.log(element);


    //     }
    // }

    // praviRadio(host, lis, nekiString)
    // {
    //     let divR = null;
    //     let opcija = null;
    //     let labela = null;

    //     lis.forEach((X, index) =>
    //     {
    //         divR = document.createElement("div");
    //         opcija = document.createElement("input");
    //         opcija.type = "radio";
    //         opcija.name = nekiString;
    //         opcija.value = X;

    //         labela = document.createElement("label");
    //         labela.innerHTML = X;

    //         divR.appendChild(opcija);
    //         divR.appendChild(labela);
    //         host.appendChild(divR);
    //     })
    // }
}