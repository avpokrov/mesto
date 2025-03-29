export class Section {
  constructor(renderer, selector) {
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  renderItems(items) {
    items.forEach(item => {
      const element = this._renderer(item)
      this.addItem(element);
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }
}