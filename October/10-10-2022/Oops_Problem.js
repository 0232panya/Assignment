

class customer {

    name = "name";
    age = "age";
    mobile = "mobile";
    user = "user";
    email = "email";

    constructor (_name, _age,_mobile,_user,_email){

        this.name = _name;
        this.age = _age;
        this.mobile = _mobile;
        this.user = _user;
        this.email = _email;
    }

    placeOrder(){
        this.trackOrder();
        console.log("this is information : " );
    }

    trackOrder(){

    }

}

let customer1 = new customer("Pranoti",22,8623029708,0232,"abcd@gmail.com");
customer1.placeOrder();

