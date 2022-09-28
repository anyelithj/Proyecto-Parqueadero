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
      index:0.,
      index2:1,

  
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
                this.updateLocalStorage()
                this.message("Se guardó correctamente", 3000, "center");
                this.clearBoxes();
            }
            
            
        },
        updateLocalStorage() {
        localStorage.setItem("intento100",JSON.stringify(this.vehicles));
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
      if (localStorage.getItem("intento100") !== null) {
        this.vehicles = JSON.parse(localStorage.getItem("intento100"));
      } else {
        this.vehicles = this.vehicles;
      }
    },
  });
  