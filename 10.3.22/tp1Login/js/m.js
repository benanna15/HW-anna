
export function getRegInputData() {
  return [
    { name: "fName", type: "text", placeholder: "Enter your First Name" },
    { name: "lName", type: "text", placeholder: "Enter your Last Name" },
    { name: "email", type: "email", placeholder: "Enter your email" },
    {
      name: "password",
      type: "password",
      placeholder: "Enter a strong password",
    },
  ];
}
export function register(arr) {
  console.log(arr);
  enterUserDB()
    .then(getUserToken)
    .then(user => {
      localStorage.user = JSON.stringify(user)
    })
    .catch((err) => {
      console.error(err);
    });

  function enterUserDB() {
    return new Promise((resolve, reject) => {
      var FD = new FormData();
      var ptitObj = {}

      ptitObj.fName = arr.find((x) => x.name == "fName").input.value
      ptitObj.lName = arr.find((x) => x.name == "lName").input.value
      ptitObj.email = arr.find((x) => x.name == "email").input.value
      ptitObj.password = arr.find((x) => x.name == "password").input.value

      FD.append("fName", ptitObj.fName)
      FD.append("lName", ptitObj.lName)
      FD.append("email", ptitObj.email)
      FD.append("password", ptitObj.password)
      FD.append("dateLogged", Date.now())

      fetch("https://sabik-4c768e.appdrag.site/api/auth/register", {
        method: "POST",
        body: FD,

      }).then(response => {
        return response.json()

      }).then(data => {
        if (data && data.affectedRows && data.affectedRows == 1) {
          resolve(ptitObj)
        } else throw new Error("Could not add the user")
        ;
      }
      )
        .catch((err) => {
          reject(err);
        })
    })

  }

  function getUserToken(obj) {
    return new Promise((resolve, reject) => {

      var FD = new FormData();

      FD.append("email", obj.email)
      FD.append("password", obj.password)


      fetch("https://sabik-4c768e.appdrag.site/api/auth/getTokenByPassword", {
        method: "POST",
        body: FD,

      }).then(response => {
        return response.json()
      }).then(data => {
        if (data && data.Table && data.Table.length == 1) {
          resolve({ id: data.Table[0].id, token: data.Table[0].token })
        } else throw new Error("Something very weird happened here")
      }
      )
        .catch((err) => {
          reject(err);
        })
    })


  }

}
export function login(e, p) {

  checkLogin()
    .then(updateUserToken)
    .catch((err) => {
      console.error(err);
    });

  function checkLogin() {
    return new Promise((resolve, reject) => {

      var FD = new FormData();

      FD.append("email", e)
      FD.append("password", p)


      fetch("https://sabik-4c768e.appdrag.site/api/auth/login", {
        method: "POST",
        body: FD,

      }).then(response => {
        return response.json()
      }).then(data => {
        console.log(data);
        if (data && data.Table && data.Table.length == 1) {
          var user = { id: data.Table[0].id, token: data.Table[0].token }
          localStorage.user = JSON.stringify(user)
          resolve(user)
        } else throw new Error("Something very weird happened here")
      }
      )
        .catch((err) => {
          reject(err);
        })
    })
  }
}
export function updateUserToken(token) {
  console.log(token);
  var FD = new FormData();
  console.log(token);
  FD.append("token", token)

  return new Promise((resolve, reject) => {
    fetch(`https://sabik-4c768e.appdrag.site/api/auth/tokenLogin?oldToken=${token}`, {
      method: "POST",
      body: FD,
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data && data.token) {
          console.log(data);
          console.log(data);
          resolve(data)
        }
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
}
export function getTokenByID(id) {
  var FD = new FormData();
  console.log(id);
  FD.append("id", id)
  console.log(FD);
  return new Promise((resolve, reject) => {
    fetch("https://sabik-4c768e.appdrag.site/api/auth/getTokenByID", {
      method: "POST",
      body: FD,
    })
      .then(response => {
        console.log(response);
        return response.json()
      }).then(data => {
        console.log(data);
        if (data && data.Table && data.Table.length == 1) {
          console.log(data);
          resolve(data)
        } else throw new Error("Something very weird happened here")
      }
      )
      .catch((err) => {
        reject(err);
      })
  })


}






