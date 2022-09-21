var app = new Vue({
    el: '#app',
    data: {
      gender:"",
      age:"",
      sexo:[{tipo:"Masculino"},
      {tipo:"Femenino"}],
      id:"",
      name:"",
      phone:"",
      people:[],
      email:"",
      index:"",
      error: false,
      error2: false,
      error3: false,
      error4: false,
      error5: false,
      error6: false,
      isActive:false,


    },

   
    methods: {

    
        getIndex(evt){
            
            this.index = evt.target.selectedIndex;
        },

        getError(){
            if(this.id==''){
              this.error=true;
            }else{
              this.error=false;
            }
          },
          getError2(){
            if(this.name == ''){
              this.error2=true;
            }else{
              this.error2=false;
            }
          },

          getError3(){
            if(this.gender=='' ){
              this.error3=true;
            }else{
              this.error3=false;
            }
          },

          getError4(){
            if(this.age==''){
              this.error4=true;
            }else{
              this.error4=false;
            }
          },
          getError5(){
            if(this.phone==''){
              this.error5=true;
            }else{
              this.error5=false;
            }
          },
          getError6(){
            if(this.email==''){
              this.error6=true;
            }else{
              this.error6=false;
            }
          },
        clearInputs(){
            this.age=""
            this.id=""
            this.name=""
            this.email=""
            this.phone=""

        },
        deleteRegister(data, index) {
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
                  this.people.splice(index,1);
                  this.message(
                    "Se eliminó correctamente",
                    3000,
                    "center",
                    "¡Este proceso es irreversible!"
                  );
              }
            });
    },

        calculate(){
            this.getError(),
            this.getError2(),
            this.getError3(),
            this.getError4(),
            this.getError5(),
            this.getError6()

            if(this.error == true || this.error2 == true || this.error3 == true || this.error4 == true || this.error5 == true || this.error6 == true){
               

            }else{
                this.people.push({
                    id: this.id,
                    age:this.age,
                    name: this.name,
                    phone:this.phone,
                    email:this.email,
                    gender:this.gender
                    
                });
                this.message("Se guardó correctamente", 3000, "center");
                this.clearInputs()
            }

            
           
            },
            message(msj,time,position,text){
                Swal.fire({
                  position: position,
                  text: text,
                  icon: "success",
                  title: msj,
                  showConfirmButton: false,
                  timer: time,
                });
                },

        },
        

        
        

        
        
        
       
      
    })