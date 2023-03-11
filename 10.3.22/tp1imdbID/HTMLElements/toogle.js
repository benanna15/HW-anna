export class ToogleBtn extends HTMLDivElement{
    constructor(_id, _class, _text, _callback) {
        super();
        
        if (_id) this.id = _id;
        if (_class) this.className = _class;
        this.span= document.createElement("span")
        this.span.innerText = _text;
        this.append(this.span)
        this.addEventListener("click", _callback);
      }
    }
    customElements.define("toogle-btn", ToogleBtn, { extends: "div" });