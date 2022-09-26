var app = new Vue({
    el: '#app',
    data: {
        time: "",
        price: "",
        optionVehicle: "",
        rates: [],
        rateStorang: [],
        error: false,
        errorPrice: false,
        errorTime: false,
        errorVehicle: false,
        vehicle: ["Carro", "Moto", "Bicicleta"],
    },
    methods: {
        addRates(){
            this.getErrorTime();
            this.getErrorPrice();
            this.getErrorVehicle();
            if(this.time === "" || this.price === "" || this.optionVehicle === "" ) {
              
            } else {
                this.rates.push({
                    timeRates : this.time,
                    priceRates: this.price,
                    vehicleRates: this.optionVehicle
                })
                this.updateLocalStorage(this.rates)
                console.log(this.rates)
                this.clear()
                this.message("Se guardó correctamente", 3000, "center");
            }
        },
       updateLocalStorage() {
            localStorage.setItem("dataStorageRates", JSON.stringify(this.rates))
       },
        getErrorVehicle(){
            if(this.optionVehicle === "") {
                this.errorVehicle = true;
            } else {
                this.errorVehicle = false;
            }
        },
        getErrorPrice() {
            if(this.price === "") {
                this.errorPrice = true;
            } else {
                this.errorPrice = false;
            }
        },
        getErrorTime(){
            if(this.time === "") {
                this.errorTime = true;
            } else {
                this.errorTime = false;
            }
        },
        clear() {
            this.time = "",
            this.price = "",
            this.optionVehicle= ""
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
        deleteRates(index) {
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
                  this.rates.splice(index,1);
                  this.message(
                    "Se eliminó correctamente",
                    3000,
                    "center",
                    "¡Este proceso es irreversible!"
                  );
                }
              });
        },

    },
    created() {
        if(localStorage.getItem("dataStorageRates") !== null) {
            this.rateStorang = JSON.parse(localStorage.getItem("dataStorage"))
        } else {
            this.rateStorang = this.rates
        }
    }
})