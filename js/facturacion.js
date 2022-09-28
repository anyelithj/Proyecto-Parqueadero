var app = new Vue({
    el: "#app01",
    data: {
      plate:"",
      departureTime:"",
      departureTime2:0,
      totalToPay:0,
      error1: false,
      error2: false,
      array1:[],
      index2:1,
      arrTaxes: [],
      arrVehicles: [],
      newArr: {},
      VEHICLES_KEY:"intento100",
      TARIFAS_KEY:"dataStorageRates",
    },
    methods: {
  
        getErrorTime() {
            if (this.plate == "") {
                this.error1 = true;
            } else {
                 this.error1 = false;
            }
        },
        getErrorPlate() {
            if (this.departureTime == "") {
                this.error2 = true;
            } else {
                this.error2 = false;
            }
        },
        
        clearBoxes() {
            (this.departureTime = "");
            (this.plate = "");
            
        },
      
        addVehicles() {
            if (this.plate  =="") {
                this.getErrorPlate();
            }else{
                this.getErrorPlate();
            } if (this.departureTime =="") {
                this. getErrorTime();
            } else{
                this. getErrorTime();

            }if(this.error1==false && this.error2==false ){
                this.array1.push({
                index:this.index2++,
                plate: this.plate,
                timeInitial: this.departureTime,
                timeFinal: this.departureTime2,
                total: this.totalToPay,
           
                });
                this.seeDataArr()
                this.updateLocalStorage()
                this.message("Se guardó correctamente", 3000, "center");
                this.clearBoxes();
            }
        },
        seeDataArr (){
            const [...data] = this.arrTaxes
            const [...data2] = this.arrVehicles
            this.newArr = [...data2, ...data]
            console.log(this.newArr)

        },
        updateLocalStorage() {
            
        this.arrTaxes = JSON.parse(localStorage.getItem(this.TARIFAS_KEY) || '[]')
        this.arrVehicles =  JSON.parse(localStorage.getItem(this.VEHICLES_KEY) || '[]') 
        },
        getIndex(evt) {
        this.index = evt.target.selectedIndex;
        },
        deleteEmployee(index) {
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
                    this.vehicles.splice(index, 1);
                    this.updateLocalStorage();
                    this.message(
                    "Se eliminó correctamente",
                    3000,
                    "center",
                    "¡Este proceso es irreversible!"
                    );
        }
  
        });
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
    created() {
      this.updateLocalStorage();
      console.log(this.arrTaxes )
      console.log(this.arrVehicles)
    }
  });
  