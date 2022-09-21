var app = new Vue({
  el: "#app01",
  data: {
    model: "",
    name: "",
    brand: "",
    color: "",
    licensePlate: "",
    displacement: "",
    vehicles: [],
    index: 0,
    error1: false,
    error2: false,
    error3: false,
    error4: false,
    error5: false,
    error6: false,
  },
  methods: {
    getErrorModel() {
      if (this.model == "") {
        this.error1 = true;
      } else {
        this.error1 = false;
      }
    },
    getErrorName() {
      if (this.name == "") {
        this.error2 = true;
      } else {
        this.error2 = false;
      }
    },
    getErrorBrand() {
      if (this.brand == "") {
        this.error3 = true;
      } else {
        this.error3 = false;
      }
    },
    getErrorColor() {
      if (this.color == "") {
        this.error4 = true;
      } else {
        this.error4 = false;
      }
    },
    getErrorLicensePlate() {
      if (this.licensePlate == "") {
        this.error5 = true;
      } else {
        this.error5 = false;
      }
    },
    getErrorDisplacement() {
      if (this.displacement == "") {
        this.error6 = true;
      } else {
        this.error6 = false;
      }
    },
    clearBoxes() {
      (this.model = ""),
        (this.name = ""),
        (this.brand = ""),
        (this.color = ""),
        (this.licensePlate = ""),
        (this.displacement = "");
    },
    addVehicles() {
        if (this.model =="") {
        this.getErrorModel();
        } if (this.name =="") {
          this.getErrorName();
        } if(this.brand =="") {
            this.getErrorBrand();
        } if(this.color == "") {
              this.getErrorColor();
        }  if(this.licensePlate == "") {
                this.getErrorLicensePlate();
        }  if(this.displacement == "") {
                  this.getErrorDisplacement();
        } else {
                  this.vehicles.push({
                    model: this.model,
                    name: this.name,
                    brand: this.brand,
                    color: this.color,
                    licensePlate: this.licensePlate,
                    displacement: this.displacement,
                  });
        this.clearBoxes()
        }
    },
    getIndex(evt) {
      this.index = evt.target.selectedIndex;
    },
    deleteEmployee(index) {
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
            this.vehicles.splice(index, 1);
          this.mensaje(
            "Se elimino correctamente",
            3000,
            "center",
            "Este proceso es irreversible!"
          );
        }
      });
    },
  },
});
