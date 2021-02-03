export class Anime
{
    constructor(zanr, ime, status)//, tip)//, brEpizoda, premijera)
    {
        this.zanr = zanr;
        this.ime = ime;
        this.status = status;
        //this.tip = tip;
        // this.brEpizoda = brEpizoda;
        // this.premijera = premijera;
        this.miniKontejner = null;
    }

    // pisiPodatke(host)
    // {
    //     this.miniKontejner = document.createElement("table");
    //     var head = document.createElement("th");
    //     var data = document.createElement("td");
    //     data.innerHTML = this.zanr;
    //     head.appendChild(data);
    //     this.miniKontejner.appendChild(head);

    //     //this.miniKontejner = document.createElement("table");
    //     head = document.createElement("th");
    //     data = document.createElement("td");
    //     data.innerHTML = this.ime;
    //     head.appendChild(data);
    //     this.miniKontejner.appendChild(head);

    //     //this.miniKontejner = document.createElement("table");
    //     head = document.createElement("th");
    //     data = document.createElement("td");
    //     data.innerHTML = this.brEpizoda;
    //     head.appendChild(data);
    //     this.miniKontejner.appendChild(head);

    //     //this.miniKontejner = document.createElement("table");
    //     head = document.createElement("th");
    //     data = document.createElement("td");
    //     data.innerHTML = this.premijera;
    //     head.appendChild(data);
    //     this.miniKontejner.appendChild(head);

    //     host.appendChild(this.miniKontejner);
    // }
    vratiZanr(host)
    {
        this.miniKontejner = document.createElement("label");
        this.miniKontejner.innerHTML = this.zanr;
        host.appendChild(this.miniKontejner);
    }

    vratiIme(host)
    {
        this.miniKontejner = document.createElement("label");
        this.miniKontejner.innerHTML = this.ime;
        host.appendChild(this.miniKontejner);
    }

    vratiStatus(host)
    {
        this.miniKontejner = document.createElement("label");
        this.miniKontejner.innerHTML = this.status;
        host.appendChild(this.miniKontejner);
    }

    azurirajStatus(vr)
    {
        this.status = vr;
    }

    // vratiTip(host)
    // {
    //     this.miniKontejner = document.createElement("label");
    //     this.miniKontejner.innerHTML = this.tip;
    //     host.appendChild(this.miniKontejner);
    // }
}