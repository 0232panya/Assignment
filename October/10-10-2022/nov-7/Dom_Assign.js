

function validation(){

    var username = document.myform.username.value;
    var password = document.myform.password.value;

    if(username == null || username.length < 7){
        alert("username must not be less than 6 character");
        return false;
    }else if(password.length < 7){
        alert("password must bot be less than 6 character");
        return false;
    }


}