function validate(){
    var name=document.getElementById("name");
    var em=document.getElementById("email");
    var pass=document.getElementById("password");
    var mob=document.getElementById("mobile");

    if(name.value==""){
        alert("name cant be empty");
        name.focus();
        return false;
    }
    if(em.value==""){
        alert("email cant be empty");
        name.focus();
        return false;
    }
    if(pass.value==""){
        alert("password cant be empty");
        pass.focus();
        return false;
    }
    if(mob.value==""){
        alert("mobile cant be empty");
        mob.focus();
        return false;
    }
    if(pass.value.length<3 || password.value.length>5){
        alert("password length should be between 3 and 5")
        mob.focus();
        return false;
    }
    if (isNaN(mob.value)){
        alert("invalid number");
        mob.focus();
        return false;
    }
    
}