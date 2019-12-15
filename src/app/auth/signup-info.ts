export class SignUpInfo {
    name: string;
    email: string;
    phoneNumber: string;
    age: number;
    city: string;
    role: string[];
    password: string;
 
    constructor(
        name: string, 
        email: string, 
        phoneNumber:string, 
        age:number, 
        city: string, 
        password: string) 
        {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.age = age;
        this.city = city;
        this.password = password;
        this.role = ['user'];
    }
}