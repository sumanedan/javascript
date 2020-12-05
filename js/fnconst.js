function Product(Id,Name,Price){
    this.id=Id;
    this.name=Name;
    this.price=Price;
    this.display=function(){
        console.log("Product Id:",this.id)
        console.log("Product Name:",this.name)
        console.log("Product price:",this.price)
}
}
function create(){
let i=document.getElementById("pid").value;
let n=document.getElementById("pname").value;
let p=document.getElementById("pri").value;
product1=new Product(i,n,p);
product1.display();
console.log(product1);
var productarray=[i,n,p];
console.log(productarray);
console.log("Elements in ProductList Array is:"+productarray);
}