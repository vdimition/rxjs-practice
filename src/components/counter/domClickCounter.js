import { fromEvent } from "rxjs";

const element = document.getElementById('click');

fromEvent(document, 'click').subscribe((v) => element.innerText = +element.innerText + 1);