import * as M  from "./model.js";
import * as V  from "./view.js";


var pass= prompt("Password")

export function init() {
    M.start(pass).then(M.getProducts).then(products =>{
        V.makeBoxesForProducts(products)
    })

}