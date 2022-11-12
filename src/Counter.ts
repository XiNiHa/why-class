export const wrapped = (parent, initialCount = 0) => {
  const wrapper = document.createElement("div");
  wrapper.className = "wrapper";
  parent.append(wrapper);
  return new Counter(wrapper, initialCount);
};

export class Counter {
  #parent;
  #previousEl = null;
  #count;

  constructor(parent, initialCount = 0) {
    this.#parent = parent;
    this.#count = initialCount;
  }

  count() {
    return this.#count;
  }

  action(command) {
    switch (command.type) {
      case "increment": {
        this.#count++;
        this.render();
        break;
      }
    }
  }

  render() {
    if (this.#previousEl) {
      this.#parent.removeChild(this.#previousEl);
    }

    const el = document.createElement("div");
    el.className = "counter";
    el.append(`Count: ${this.#count}`);

    const button = document.createElement("button");
    button.append("+");
    button.addEventListener("click", () => {
      this.action({ type: "increment" });
    });

    el.append(button);
    this.#parent.append(el);
    this.#previousEl = el;
  }
}
