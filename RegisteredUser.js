class RegisteredUser{
    constructor(services = []) {
        this.services = services;
    }

    getTotal (){
        let total = 0;

        this.services.forEach(service, index => {
            total += service.getPrice()
        })
    }
}
