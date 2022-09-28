const app = new Vue({
  el: "#app",
  data: {
    username: "",
    password: "",
    userCredentials: [
      { name: "anyelithj", password: "43899569" },
      { name: "drbobby27", password: "23a138" },
      { name: "chessbase24", password: "328y46910" },
    ],
    error: false,
    error2: false,
  },
  methods: {
    getError() {
      if (this.username == "") {
        this.error = true;
      } else {
        this.error = false;
      }
    },
    getError2() {
      if (this.password == "") {
        this.error2 = true;
      } else {
        this.error2 = false;
      }
    },
    login() {
      this.getError();
      this.getError2();
      if (this.error == true || this.error2 == true) {
      } else {
      }
    },
    validateCredentials(user, key) {
      this.login();
      let loguedUser = [];
      let res = this.userCredentials.filter(
        (usr) => usr.name === user.toLowerCase() && usr.password === key
      );
      loguedUser = [...res];
      return loguedUser.length === 0
        ? this.message(
            "Oops",
            2200,
            "center",
            "Verifique que los datos sean correctos",
            "error"
          )
        : this.Session();
    },
    Session(){
      this.message(
        "¡Datos correctos!",
        3200,
        "center",
        "Ingreso exito",
        "success"
      );
      window.location.href = '../view/menu.html'
},
    message(title, timer, position, text, icon) {
      Swal.fire({
        position,
        text,
        icon,
        title,
        showConfirmButton: false,
        timer,
      });
    },
  },
});