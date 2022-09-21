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


    },
    methods: {

        getIndex(evt){
            
            this.index = evt.target.selectedIndex;
        },
        clearInputs(){
            this.age=""
            this.id=""
            this.name=""
            this.email=""
            this.phone=""

        },
        deleteRegister(index){
            this.people.splice(index,1)
        },

        calculate(){
           
      
            this.people.push({
                id: this.id,
                age:this.age,
                name: this.name,
                phone:this.phone,
                email:this.email,
                gender:this.gender
                
            })
            this.clearInputs()
            },


        },
        

        
        

        
        
        
       
      
    })