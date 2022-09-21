const app = new Vue({
    el: '#app',
    data: {
        error: false,
        employeeName:"",
        employeeLastName: "",
        employeeIdentityCard: "",
        employeePosition: "",
        age: "",
        defaultemployeeSex: null,
        employeeSex: ['Hombre', 'Mujer', 'Binario'],
        dataEmployees: []
    },
    methods: {
        addEmployeesData() {
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
            this.defaultemployeeSex = null
            this.positionEmployee= ""
        },
        deleteUser(i){
            this.dataEmployees.splice(i,1)
        }
    }
  })