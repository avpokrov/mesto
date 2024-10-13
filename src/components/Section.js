export class Section {
    constructor({items, renderer}, selector) {
        this._initialArray = items;
        this._renderer = renderer;
        this._container = document.querySelector(selector);
    }

    renderItems() {
      this._initialArray.forEach(item => {
        const element = this._renderer(item)        
        this.addItem(element);
      });
    }
    
    addItem(element) {
        this._container.append(element);
    }
}