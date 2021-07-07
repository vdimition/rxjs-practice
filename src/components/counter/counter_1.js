import pkg from 'rxjs';
const { Observable } = pkg;

const source = Observable.create((observer) => {
  let count = 0;
  console.log('Observable created');

  const timer = setInterval(() => {
    observer.next(count++);
  }, 1000);

  return () => {
    console.log('Observer destroyed');
    clearInterval(timer);
  }
});

const subscription = source.subscribe(
  value => console.log('next: ' + value),
  error => console.error('error: ' + error),
  () => console.log('completed')
);

setTimeout(() => subscription.unsubscribe(), 5000);