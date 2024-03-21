function auth(){
    var Uname = document.getElementById("username").value;
    var Pass = document.getElementById("password").value;
    if(Uname=="khushbugawhade" && Pass=="123456"){
        window.location.assign("index2.html");
        alert("success ful!");
    }
    else{
        alert("wrong entry");
        return;
    }

}

