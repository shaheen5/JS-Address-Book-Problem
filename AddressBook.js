class AddressBook {
   
    get firstName() { return this._firstName;}
    set firstName(firstName) {
        let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(firstNameRegex.test(firstName))
            this._firstName = firstName;
        else throw 'First Name Should contain one upper case and min 3 characters';    
    }

    get lastName() { return this._lastName;}
    set lastName(lastName) {
        let lastNAmeRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(lastNAmeRegex.test(lastName))
            this._lastName = lastName;
        else throw 'Last Name Should contain one upper case and min 3 characters';    
    }

    get address() { return this._address;}
    set address(address) {
        let addressRegex = RegExp('^[A-Za-z\\s\\-]{4,}$');
        if(addressRegex.test(address))
            this._address = address;
        else throw 'Address Should contain at least 4 characters';    
    }

    get city() { return this._city;}
    set city(city) {
        let cityRegex = RegExp('^[A-Za-z]{4,}$');
        if(cityRegex.test(city))
            this._city = city;
        else throw 'City Name Should contain at least 4 characters';    
    }

    get state() { return this._state;}
    set state(state) {
        let stateRegex = RegExp('^[A-Za-z]{4,}$');
        if(stateRegex.test(state))
            this._state = state;
        else throw 'State Name Should contain at least 4 characters';  
    }

    get zipCode() { return this._zipCode;}
    set zipCode(zipCode) {
        let zipRegex = RegExp('^[0-9]{6}$');
        if(zipRegex.test(zipCode))
            this._zipCode = zipCode;
        else throw 'Zip code Should contain exact 6 digits'; 
    }

    get phoneNumber() { return this._phoneNumber;}
    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp('^[6-9]{1}[0-9]{9}$');
        if(phoneNumberRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else throw 'Phone Number Should contain exact 10 digits'; 
    }

    get email() { return this._email;}
    set email(email) {
        let emailRegex = RegExp('^[a-z\\+\\-\\_\\.a-z0-9]{3,}\\@[a-z]*\\.[a-z]{1,3}$');
        if(emailRegex.test(email))
            this._email = email;
        else throw 'Email should be in the proper format'; 
    }


    toString(){
        return "[ First Name: "+this.firstName+", Last Name: "+this.lastName+", Address: "+this.address+
                ", City: "+this.city+", State: "+this.state+", Zip Code: "+this.zipCode+", Phone Number: "+
                this.phoneNumber+", Email: "+this.email+" ]";

    }
    //add contacts
    addContacts() {
        try{
            let firstName = prompt("Enter First Name : ");
            this.firstName = firstName;
            let lastName = prompt("Enter Last Name : ");
            this.lastName = lastName;
            let address = prompt("Enter Address : ");
            this.address = address;
            let city = prompt("Enter City : ");
            this.city = city;
            let state = prompt("Enter State : ");
            this.state = state;
            let zipcode = prompt("Enter Zip Code : ");
            this.zipCode = zipcode;
            let phoneNumber = prompt("Enter Phone Number : ");
            this.phoneNumber = phoneNumber;
            let email = prompt("Enter Email Id : ");
            this.email = email;
        }catch(e){
            console.log(e);
            return;
        }   
    }
}

//main
const prompt = require('prompt-sync')();
let addressBookArray = new Array();       //declare addressbook array
let choice;
do{
    console.log("\n************************OPTIONS***********************\n");
    console.log("1] Add Contacts\n2] View Contacts In AddressBook\n3] Exit");
    choice = parseInt(prompt("Enter Your Choice : "));
    switch(choice){
        case 1 : let addressbook = new AddressBook();      //declare addressbok object
                 addressbook.addContacts();
                 if(addressbook.firstName != undefined && addressbook.lastName != undefined && 
                    addressbook.address != undefined && addressbook.city != undefined && addressbook.state
                    != undefined && addressbook.zipCode != undefined && addressbook.phoneNumber
                    != undefined && addressbook.email != undefined){
                        addressBookArray.push(addressbook.toString());
                 }
                 break;
        case 2 :  console.log(addressBookArray);
                  break;
        case 3 : return;
        default : console.log("Invalid Input!");
    }
}while(choice != 3);


