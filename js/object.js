let obj = {
    name: "anna",
    age: 22
}
console.log(obj, typeof obj);
let obj1 = {
    name: "Rose",
    age: 25
}
obj1.address = "h101"
console.log(obj1);
obj1.age = 23;
console.log(obj1)
//can give square bracket instead of . operator but use ''
obj1['city'] = "Ekm"
console.log(obj1)

let student = {
    rollno: 1,
    name: "Amal",
    Age: 20,
    marks: [80, 90, 70],
    display: function () {
        console.log(this.rollno)
    },
    average: function () {
        //let avg = ""
        return this.marks.reduce((x,y)=>x+y)/this.marks.length
        
    }
}
student.display();
console.log(student)
student.average();
console.log(student.average())

let person={
name:"joe",
age:22,
address:"H101"
}
let student2=Object.create(person)
console.log(student2)
console.log(person.isPrototypeOf(student2))
console.log(person.hasOwnProperty("name"))
console.log(student2.hasOwnProperty("name"))
student2.rollno=1
student2.batch="CSE"
console.log(student2)
//to update proto name we use __proto__ (inheritance)
student2.__proto__.name="Rose"
console.log(student2)
let student3=Object.assign(person)
console.log(student3)
//Object.freeze(student2)
//student.rollno=2//no change
//console.log(student2)
//console.log(Object.isFrozen(student2))
Object.seal(student2)
student2.branch="eee"
student2.rollno=2
console.log(student2)
console.log(Object.isSealed(student2))

