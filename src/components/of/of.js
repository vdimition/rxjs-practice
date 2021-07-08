import pkg from 'rxjs';
import operators from 'rxjs/operators';

const { of } = pkg;
const { takeLast } = operators;

const stream$ = of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9).pipe(takeLast(5),);

stream$.subscribe(
  (val) => console.log(val),
  (err) => console.error('err: ', err),
  () => console.info('Complete!'),
);