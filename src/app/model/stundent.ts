export  class stundentcls{
    Rollno:number;
    Name:string;
    Class:string;
    Section:string;
    Age:number;
    cnt:number;

    constructor(id:number,Name:string,cls:string,section:string,age:number,contact:number){
        this.Rollno=id
        this.Name=Name;
        this.Class=cls;
        this.Section=section;
        this.Age=age;
        this.cnt=contact;
    }

}