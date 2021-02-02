export class Manga
{
    constructor(zanr, ime, status)
    {
        this.zanr = zanr;
        this.ime = ime;
        this.status = status;
        this.miniKontejner = null;
    }

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
}