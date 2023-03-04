function r() {
    return Math.floor( Math.random() * 500) + 3000
}

export function start() {
    return new Promise((resolve, reject) => {
        fetch("https://s3-eu-west-1.amazonaws.com/dev.appdrag.com/car-parts-99db31/car.json")
            .then((result) => {
                if (result.ok) {
                    return result.json()
                }
                throw new Error(result.status);
            })
            .then((response) => {
             
                resolve(response)
            })


            .catch((err) => {
                console.log("error");
                reject(err)
            })
    })

}

export function orderChassis(response) {
    return new Promise((resolve, reject) => {
        console.log("chassis");
        setTimeout(() => {
            var obj = {};

            if (response[0].part == "chassis") {
                resolve(response);
            }
            else {
                obj.error = "Wrong part in orderChassis"
                obj.status = 401;
                reject(obj)
            }



        }, r())
    })

}

export function orderEngine(response) {
    console.log(response);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var obj = {};

            if (response[1].part == "engine") {
                console.log(response);
                resolve(response);
            }
            else {
                obj.error = "Wrong part in orderEngine"
                obj.status = 401;
                reject(obj)
            }
        }, r())
    })
}

export function orderWheels(response) {
    return new Promise((resolve, reject) => {
     
        setTimeout(() => {
            var obj = {};

            if (response[2].part == "wheels") {

                resolve(response);
            }
            else {
                obj.error = "Wrong part in orderWheels "
                obj.status = 401;
                reject(obj)
            }



        }, r())
    })
}



export function orderSeats(response) {
    return new Promise((resolve, reject) => {
      
        setTimeout(() => {
            var obj = {};

            if (response[3].part == "seats") {

                resolve(response);
            }
            else {
                obj.error = "Wrong part in orderSeats "
                obj.status = 401;
                reject(obj)
            }



        }, r())
    })

}


export function orderCar(response) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var obj = {};

            if (response[4].part == "car") {
                resolve(response);
            }

            else {
                obj.error = "Wrong part in orderCar"
                obj.status = 401;
                reject(obj)
            }

        }

            , r())
    })
}
