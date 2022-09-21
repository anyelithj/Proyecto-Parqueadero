var app = new Vue({
    el: '#app',
    data: {
        time: "",
        price: "",
        optionVehicle: null,
        rates: [],
        error: false,
        vehicle: ["carro", "moto", "bicicleta"],
    },
    methods: {
        addRates(){
          this.rates.push({
            timeRates : this.time,
            priceRates: this.price,
            vehicleRates: this.optionVehicle
          })
          this.clear()
        },
        deleteRates() {
            this.rates.splice(this.index,1);
        },
        clear() {
            this.time = "",
            this.price = "",
            this.vehicle = "",
            this.optionVehicle= ""
        }, 
    }
})