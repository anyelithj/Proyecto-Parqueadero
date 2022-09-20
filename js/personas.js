var app = new Vue({
    el: '#app',
    data: {
      genero:"",
      sexo:[{tipo:"Masculino",vHora:25000},
      {tipo:"Femenino",vHora:20000}],
      total:0,
      cedula:"",
      empleado:"",
      horas_Trabajadas:0,
      empleados:[],
      index:"",
      error: false,
      error2:false,
      error3:false,
      error4:false,

    },
    methods: {

        getErroresCedula(){
            if(this.cedula==''){
              this.error=true;
            }else{
              this.error=false;
            }
          },
          getErroresEmpleo(){
            if(this.empleo == ''){
              this.error2=true;
            }else{
              this.error2=false;
            }
          },

          getErroresEmpleado(){
            if(this.empleado=='' ){
              this.error3=true;
            }else{
              this.error3=false;
            }
          },

          getErroresHoras(){
            if(this.horas_Trabajadas==''){
              this.error4=true;
            }else{
              this.error4=false;
            }
          },

        getIndex(evt){
            
            this.index = evt.target.selectedIndex;
        },

        calcular(){
            this.getErroresCedula();
            this.getErroresEmpleado();
            this.getErroresEmpleo();
            this.getErroresHoras()
            if(this.horas_Trabajadas<10){
                alert("El valor de horas trabajadas debe ser mayor a 10")
                this.horas_Trabajadas=""
            }else if (this.horas_Trabajadas>100){
                alert("El valor de horas trabajadas debe ser menor o igual a 100")
                this.horas_Trabajadas=""
            }else if (this.cedula.length==0 || this.empleado.length == 0 || this.empleo.length==0 || this.horas_Trabajadas.length==0){
                
            }
            
            else{
                
            this.total = this.sexo[this.index].vHora * this.horas_Trabajadas
            this.empleados.push({
                cedula: this.cedula,
                empleado: this.empleado,
                horas: this.horas_Trabajadas,
                cargo: this.empleo,
                valor: this.total
            })
            this.limpiar()
            }


        },
        eliminar(index){
            this.empleados.splice(index,1)
        },

        limpiar(){
            this.empleo=""
            this.cedula=""
            this.empleado=""
            this.horas_Trabajadas=""

        }

        
        
        
       
      
    }
  })