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
        row.className = "uf" + indeks;
        let data = document.createElement("td");
        data.className = "prvaKolona";
        data.innerHTML = String(indeks+1) + ".";

        row.appendChild(data);

        data = document.createElement("td");
        data.className = "drugaKolona" + indeks;
        X.vratiIme(data);
        row.appendChild(data);

        data = document.createElement("td");
        data.className = "trecaKolona" + indeks;
        X.vratiZanr(data);
        row.appendChild(data);
            
        data = document.createElement("td");
        //data.className = "cetvrtaKolona";
        data.className = "cetvrtaKolona" + indeks;
        X.vratiStatus(data);
        row.appendChild(data);
            
        tabela.appendChild(row);
    }

    azurirajListu()
    {
            let el = this.lista[this.lista.length-1];
            const T = this.kontejner.querySelector(".tabela");
            this.dodajNoviRed(el, this.lista.length-1, T);
        // this.lista.forEach((x, indeks)=>
        // {
        //     console.log(this.kontejner);
        //     this.azuriranjeListe(indeks);
        // })
    }

    azuriranjeListe(indeks)
    {
        let el = this.lista[indeks];
        const S = this.kontejner.querySelector(".drugaKolona" + indeks);
        const D = this.kontejner.querySelector(".trecaKolona" + indeks);
        const F = this.kontejner.querySelector(".cetvrtaKolona" + indeks);
        const R = this.kontejner.querySelector(".uf"+indeks);

        R.removeChild(F);
        R.removeChild(D);
        R.removeChild(S);

        let s = document.createElement("td");
        s.className = "drugaKolona" + indeks;
        let d = document.createElement("td")
        d.className = "trecaKolona" + indeks;
        let f = document.createElement("td");
        f.classList = "cetvrtaKolona" + indeks;

        el.vratiIme(s);
        el.vratiZanr(d);
        el.vratiStatus(f);
        R.appendChild(s);
        R.appendChild(d);
        R.appendChild(f);
    }

    //azuriranjeListe(element, indeks)
    // {
    //     console.log(parseInt(indeks));
    //     var S = this.kontejner.querySelector(".drugaKolona" + indeks);
    //     var D = this.kontejner.querySelector(".trecaKolona" + indeks);
    //     var F = this.kontejner.querySelector(".cetvrtaKolona" + indeks);
    //     var R = this.kontejner.querySelector(".uf"+indeks);

    //     console.log(this.kontejner);
    //     console.log(F);
    //     console.log(D);
    //     console.log(S);

    //     R.removeChild(S);
    //     R.removeChild(D);
    //     R.removeChild(F);

    //     S = document.createElement("td");
    //     S.className = "drugaKolona" + indeks;
    //     D = document.createElement("td")
    //     D.className = "trecaKolona" + indeks;
    //     F = document.createElement("td");
    //     F.classList = "cetvrtaKolona" + indeks;
    //     // console.log(this.kontejner);
    //     // console.log(S);
    //     element.vratiIme(S);
    //     element.vratiZanr(D);
    //     element.vratiStatus(F);
    //     R.appendChild(S);
    //     R.appendChild(D);
    //     R.appendChild(F);
    // }
}