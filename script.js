$(document).ready(function(){

$("#loginBtn").click(function(){

var username = $("#username").val();
var password = $("#password").val();

if(username === "" || password === "")
{
    $("#errorPopup").popup("open");
}
else if(username === "iman" && password === "1234")
{
    $.mobile.changePage("#infoPage");
}
else
{
    $("#errorPopup").popup("open");
}

});

});