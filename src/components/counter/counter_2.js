import pkg from 'rxjs';
const { Observable } = pkg;

const source = Observable.create((observer) => {
  let count = 0;
  console.log('Observable created');

  const timer = setInterval(() => {
    if (count > 2) {
      observer.complete();
    }
    observer.next(count++);
  }, 1000);

  return () => {
    console.log('Observer destroyed');
    clearInterval(timer);
  }
});

const subscription = source.subscribe(
  value => console.log('Next: ' + value),
  error => console.error('Error: ' + error),
  () => console.log('Completed!!')
);

setTimeout(() => subscription.unsubscribe(), 5000);