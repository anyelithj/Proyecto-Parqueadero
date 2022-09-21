var app = new Vue({
    el: '#app01',
    data: {
        model:"",
        name:"",
        brand:"",
        color:"",
        licensePlate:"",
        displacement:"",
        vehicles:[],
        index:0,
      
    },
    methods: {
        clearBoxes(){
        this.model="",
        this.name="",
        this.brand="",
        this.color="",
        this.licensePlate="",
        this.displacement=""
        },
        addVehicles(){
            this.vehicles.push({
                model:this.model,
                name:this.name,
                brand:this.brand,
                color:this.color,
                licensePlate:this.licensePlate,
                displacement:this.displacement
            });
            this.clearBoxes();

        },
        getIndex(evt){
            this.index = evt.target.selectedIndex;
        },
        deleteEmployee(index){
            this.vehicles.splice(index,1);
        },

       
      
    }
  })
