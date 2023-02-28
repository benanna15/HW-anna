
import * as Model from "./model.js"


export function checkToken(token, users) {
 return Model.cToken(token,users)
}

export function updateToken(email, users) {
  Model.uToken(email,users)
}

