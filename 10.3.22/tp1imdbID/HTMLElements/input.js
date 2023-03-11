export class MyInput extends HTMLInputElement {
    constructor(_id, _class, _type, _placeholder) {
      super();
      if (_id) this.id = _id;
      if (_class) this.className = _class;
      this.type = _type;
      this.placeholder = _placeholder;
    }
  }
  customElements.define("my-input", MyInput, { extends: "input" });