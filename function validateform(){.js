function validateform(){
    var name=document.myform.name.value;
    var password=document.myform.password.value;
    
    var regexp=/\S+@\S+\.\S+/;
    if (name==null || name==""){
        alert("Name can't be blank");
        return false;
    }
    
    
    else if (password.length<6){
        alert("Password length must be at least 6 characters.");
    return false;
    }
            }
    