import {Lista} from "./lista.js"

export class Aplikacija
{
    constructor(brojListi)
    {
        this.list=[];
        this.kontejner = null;
    }

    dodajUListu(el)
    {
        this.list.push(el);
    }

    crtaj(host)
    {
        if(!host)
            throw new Exception("Ne postoji roditeljski element.");
        this.kontejner = document.createElement("div");
        this.kontejner.classList.add("kontejner");
        //host.appendChild(this.kontejner);

        lista1 = new Lista("Read List", "To Read");
        lista2 = new Lista("Watch List", "To Watch");
        lista1.crtajListu(this.kontejner);
        //host.appendChild(this.kontejner);
        lista2.crtajListu(this.kontejner);
        host.appendChild(this.kontejner);

    }
}