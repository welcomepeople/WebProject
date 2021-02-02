import {Forma} from "./form.js"
import {Lista} from "./lista.js"

const lista1 = new Lista("Read List", "Read");
const lista2 = new Lista("Watch List", "Watch");
const forma = new Forma(lista1, lista2);
forma.crtaj(document.body);
lista1.crtaj(document.body);
lista2.crtaj(document.body);
// const app = new Aplikacija();
// app.crtaj(document.body);
//lista1.crtajFormu(document.body);