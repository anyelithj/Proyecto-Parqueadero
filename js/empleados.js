const app = new Vue({
    el: '#app',
    data: {
        errors: {
            name: false,
            lastName: false,
            identity: false,
            age: false,
            sex: false,
            position: false,
            error: false
            

        },
        errorMsg: "Los campos de",
        customErrors: {
            name: `Los campos de nombres no son correctos.`,
            lastName: `Los campos de apellidos no son correctos.`,
            identity: `Los campos de cédula no son correctos.`,
            age: `Los campos de edad no son correctos.`,
            sex: `Los campos de sexo no son correctos.`,
            position: `Los campos de cargo no son correctos.`

        },
        employeeName:"",
        employeeLastName: "",
        employeeIdentityCard: "",
        employeePosition: "",
        age: "",
        defaultemployeeSex: 0,
        employeeSex: ['Hombre', 'Mujer', 'Binario'],
        dataEmployees: [],  
        STORAGE_KEY: "setDataStorage"
    },

    created(){
      this.dataEmployees = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]')
    },
    methods: { 
        addEmployeesData() {
            
            this.validateInputs() ? this.error : this.createRegister()
        },
        createRegister(){
            this.dataEmployees.push({
                name: this.employeeName,
                lastName: this.employeeLastName,
                cc: this.employeeIdentityCard,
                age: this.age,
                sex: this.defaultemployeeSex,
                position: this.employeePosition,
            })

            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.dataEmployees))
            
            this.cleanInputs()
            this.message('Se guardó correctamente',1600,'center','')
        },
        cleanInputs() {
            this.employeeName=""
            this.employeeLastName= ""
            this.employeeIdentityCard= ""
            this.employeePosition= ""
            this.age= ""
            this.defaultemployeeSex = 0
            this.positionEmployee= ""
        },
        validateInputs() {
            error = false;
          if (this.employeeName === "") {
            this.errors.name = true;
            error = true;
          } else {
            this.errors.name = false;
          }
          if (this.employeeLastName === "") {
            this.errors.lastName = true;
            error = true;
          } else {
            this.errors.lastName = false;
          }
          if (this.employeeIdentityCard === "") {
            this.errors.identity = true;
            error = true;
          } else {
            this.errors.identity = false;
          }
          if (this.employeePosition === "") {
            this.errors.position = true;
            error = true;
          } else {
            this.errors.position = false;
          }
          if (this.age === "") {
            this.errors.age = true;
            error = true;
          } else {
            this.errors.age = false;
          }
          if (this.defaultemployeeSex == "") {
            this.errors.sex = true;
            error = true;
          } else {
            this.errors.sex = false;
          }
          return error;
        },
        
        message(title,timer,position,text){
            Swal.fire({
              position,
              text,
              icon: "success",
              title,
              showConfirmButton: false,
              timer
            })
    },
        alert(i,msg) {
            Swal.fire({
                title: "¿Está seguro de eliminar?",
                text: "¡Este proceso es irreversible!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "SI",
                cancelButtonText: "NO",
              }).then((result) => {
                if (result.isConfirmed) {
                  this.dataEmployees.splice(i, 1)
                  this.message(
                    "Se eliminó correctamente",
                    1600,
                    "center",
                    "¡Este proceso es irreversible!"
                  )
                  localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.dataEmployees))
                }
              })
        }
    }
  })