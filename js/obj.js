var obj={name:"Anu",age:12,display:function(){
    console.log(this.name)
console.log(this.age)
}}
let employee=Object.create(obj)
employee.eid=123
employee.salary=100000
employee.viewData=function(){
    console.log(this.eid)
    console.log(this.salary)
}
for(props in employee){
//if(employee.hasOwnProperty(props)){
  //  console.log(props)
//}
console.log(props)
//console.log(employee.props)
console.log(employee[props.toString()])
}
console.log("******************")
Object.keys(employee).forEach((x)=>console.log(x))
function volume(l,b,h){
return l*b*h
}
let result=volume(100,50,75)
//console.log(result)
function volume1(l){
return function(b){
    return function(h){
        console.log(l*b*h)
    }
}
}
var s=volume1(180);
var f=s(50)
f(75)
function greet (gender, age, name) {
    var salutation = gender === "male" ? "Mr. " : "Ms. ";
             if (age > 25) { return "Hello, " + salutation + name + ".";  
             } else {
                 return "Hey, " + name + ".";
             }        	
 }
 let grretAnAdultMale=greet.bind(null,"male",30)
 console.log(grretAnAdultMale("Thomas"));
 console.log(grretAnAdultMale("Raju"));
 console.log(Math.min(10,20,30,40,50))
 console.log(Math.random())
 console.log(Math.floor(18.28))
