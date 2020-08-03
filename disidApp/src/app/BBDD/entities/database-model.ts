import {Long} from 'long';

export class Departament {
    public id?:Long;
    public name:string;
}

export class Employed {
    public id?:Long;
    public name:string;
    public lastName:string;
    public age:number;
    public entryDate:Date
}