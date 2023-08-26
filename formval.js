function validateform(){
    var name=document.myform.name.value;
    var password=document.myform.password.value;
    
    var regexp=/\S+@\S+\.\S+/;
    if (name==null || name==""){
        alert("Name can't be blank");
        return false;
    }
    else if (phone==null || phone==""){
        alert("Phone Number can't be blank");
    }else if (isNaN(phone)){
        alert("Enter Numeric Value Only");
    }
    else if (email==null || email==""){
        alert("Email Id can't be blank");
    }else if (regexp.test(String(email).toLowerCase())===false){
        alert("Enter valid email");
    }
    
    
    else if (password.length<6){
        alert("Password length must be at least 6 characters.");
    return false;
    }
            }
    