import { fromEvent, timer } from 'rxjs';
import { debounce, filter, map } from 'rxjs/operators';

const input = document.getElementById('search-input');

const input$ = fromEvent(input, 'input')
  .pipe(
    map(e => e.target.value),
    filter(v => v.length > 2),
    debounce(() => timer(750))
  );

input$.subscribe(
  (value) => console.log('request: ', value),
  (error) => console.error(error),
  () => console.log('Complete!')
)