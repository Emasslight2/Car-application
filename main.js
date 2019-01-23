function car(name, model, year, owner, phone, image){
    return{
        name, model, year, owner, phone, image
    }
}

let cars=[
    car('Ford','Mustang','2018','Alexander','+996 0555 432455','./images/Ford-mustang.jpg'),
    car('Toyota','Land-Cruiser','2014','Max','+996 0700 413465','./images/toyota_landCruiser.jpg'),
    car('Mercedez-benz','G-wagen','2011','Aziret','+996 0552 321455','./images/mercedes-benz_G-wagen.jpg')
]

new Vue({
    el:'main',
    data: {
        cars:cars,
        car:cars[0],
        selectedCarIndex:0,
        phoneVisibility:false,
        search:''
    },
    methods:{
        selectCar:function(car,index){
            this.car = car;
            this.selectedCarIndex = index;
        }
    },
    computed:{
        phoneBtnText(){
            return this.phoneVisibility ? 'Hide phone' : 'Show phone';
        },
        filteredCars(){
            return this.cars.filter(car => {
                return car.name.indexOf(this.search)>-1 || car.model.indexOf(this.search)>-1;
            })
        }
    }
})