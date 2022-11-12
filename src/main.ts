import * as Counter from "./Counter";

const app = document.getElementById('app');

if (app) {
  for (let i = 0; i < 5; i++) {
    const counter = Counter.wrapped(app);
    counter.render();
    setInterval(() => console.log(`카운터 ${i}의 값은 ${counter.count()}`), 1000);
  }
}
