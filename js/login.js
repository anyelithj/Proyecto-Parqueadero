const app = new Vue({
    el: '#app',
    data: {
        username: "",
        password:"",
        userCredentials: [
            {name: "anyelithj", password: '43891v569'},
            {name: "drbobby27", password: '23a138'},
            {name: "chessbase24", password: '328y46910'},
        ]
    },
    methods: {
        validateCredentials(user, key){
            let loguedUser = []
            let res = this.userCredentials.filter(usr => usr.name === user.toLowerCase() && usr.password === key )
              loguedUser = [...res]
              return loguedUser.length === 0 ? this.message('Oops',2200,'center','Verifique que los datos sean correctos','error') : this.message('¡Enhorabuena!',2200,'center','Ingreso exitoso','success')
        },
        message(title,timer,position,text,icon){
            Swal.fire({
              position,
              text,
              icon,
              title,
              showConfirmButton: false,
              timer
            })
    },
    }
  })




