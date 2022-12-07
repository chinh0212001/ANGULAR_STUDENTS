export class Student{
    id:number;
    name:string;
    age:number;
    avatar:string;
    address:string;

    constructor(id: number, name: string, age: number, avatar: string, address: string) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.avatar = avatar;
        this.address = address;
    }
}
