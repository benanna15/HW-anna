export class MySection extends HTMLDivElement {
    constructor(_id, _class) {
      super();
      if (_id) this.id = _id;
      if (_class) this.className = _class;
    }
  }
  customElements.define("my-section", MySection, { extends: "div" });