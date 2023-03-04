import * as M  from "./model.js";
import * as V  from "./view.js";


export function init () {
    M.start().then(M.orderEngine).then(result=>{
            V.imgURL.src=result[0].URL
            return M.orderWheels(result)
        }
    )
  .then(result=>{
            V.imgURL.src=result[1].URL
            return M.orderSeats(result)
        }
    )
 .then(result=>{
        V.imgURL.src=result[2].URL
        return M.orderChassis(result)
    }
)
    .then(result=>{
        V.imgURL.src=result[3].URL
        return M.orderCar(result)
    }
)
   .then(result=>{
        V.imgURL.src=result[4].URL
    }
)
  
}
