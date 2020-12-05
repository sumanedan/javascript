function Employee(id, name, salary) {
    this.Id = id;
    this.ename = name;
    this.salary = salary;
    this.incSalary = function (amount) {
        this.salary=this.salary+amount;

    }
}
    let obj = new Employee("E101", "Anna", "30000")
    let obj1 = new Employee("E102", "Anu", "30000")
    let obj2 = new Employee("E103", "Amal", "30000")

    console.log(obj)
    console.log(obj1)
    console.log(obj2)
obj2.incSalary(8000)
console.log(obj2.salary)
{
function Person(name,age,address){
    this.name=name;
    this.age=age;
    this.address=address;
    this.display=function(){
        console.log("Name",this.name)
        console.log("age",this.age)
        console.log("Address",this.address)
    }
}
let person1=new Person("Joe",22,"ghg")
person1.display();
}
var numarray=[10,20,30,40,50,60,70]
//array destruction/////////////////
var [a,b,c,d,e,f,g]=numarray
console.log(a)
console.log(b)
console.log(numarray.every((x)=>x%2==0));
///if every element of array satisfy this condition returns true
console.log(numarray.some((x)=>x%2==0));
//if only some elements need to satisfy
