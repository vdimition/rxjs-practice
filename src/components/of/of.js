import pkg from 'rxjs';
import operators from 'rxjs/operators';

const { of } = pkg;
const { filter } = operators;

const stream$ = of(0,1,2,3,4,5,6,7,8,9)
  .pipe(
    filter(v => v > 4),
  );

stream$.subscribe((val) => console.log(val))