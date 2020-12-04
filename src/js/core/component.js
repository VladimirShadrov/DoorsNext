export class Component {
  constructor(className) {
    this.el = document.querySelector(className);
    
    this.init()
  }

  init() {};
}