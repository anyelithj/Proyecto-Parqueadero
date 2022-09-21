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
            error: true
            

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
    },
    methods: { 
        addEmployeesData() {
            this.validateInputs() 
            console.log('[error] '+this.errors.error)
            console.log('[Position]' + this.errors.position);

            if(!this.errors.error) {
                this.createRegister()
            }
            
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
            this.cleanInputs()
        },
        cleanInputs() {
            this.employeeName="",
            this.employeeLastName= "",
            this.employeeIdentityCard= "",
            this.employeePosition= "",
            this.age= "",
            this.defaultemployeeSex = 0
            this.positionEmployee= ""
        },
        validateInputs(){
        if(this.employeeName === "")  {
            this.errors.name = true;
            this.errors.error = true
        }else {
            this.errors.name = false;
            this.errors.error = false
        } if(this.employeeLastName === "" ){
            this.errors.lastName = true;
            this.errors.error = true
        }
        else {
            this.errors.lastName = false;
            this.errors.error = false
        }
        if(this.employeeIdentityCard === "" ){
            this.errors.identity = true;
            this.errors.error = true
        }
        else {
            this.errors.identity = false;
            this.errors.error = false
        }
        if(this.employeePosition === "" ) {
            this.errors.position = true;
            this.errors.error = true
        }
        else {
            this.errors.position = false;
            this.errors.error = false
        }
        if(this.age === "" ){
            this.errors.age = true;
            this.errors.error = true
        }
        else {
            this.errors.age = false;
            this.errors.error = false
        }
        if(this.defaultemployeeSex == 0 ){
            this.errors.sex = true;
            this.errors.error = true
        } 
        else {
            this.errors.sex = false;
            this.errors.error = false
        }
        return this.errors.error
        },
        deleteUser(i){
            this.dataEmployees.splice(i,1)
        },
        mensaje(msj,time,position,text){
            Swal.fire({
              position: position,
              text: text,
              icon: "success",
              title: msj,
              showConfirmButton: false,
              timer: time,
            })
    },
        alert(msg) {
            Swal.fire({
                title: "Esta seguro de eliminar?",
                text: "Este proceso es irreversible!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "SI",
                cancelButtonText: "NO",
              }).then((result) => {
                if (result.isConfirmed) {
                  this.dataEmployees.splice(index, 1)
                  this.mensaje(
                    "Se elimino correctamente",
                    3000,
                    "center",
                    "Este proceso es irreversible!"
                  )
                }
              })
        }
    }
  })