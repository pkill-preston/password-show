AOS.init();

var labelChecker = document.getElementsByClassName("labelChecker")[0];
var imageChecker = document.getElementsByClassName("imageChecker")[0];



function checking()
{
    let password = document.getElementById("password");

    if(password.type === 'password')
    {
        password.type = 'text';
        imageChecker.style.display = "none";
    }else
    {
        password.type = 'password';
        labelChecker.style.display = "flex";
        imageChecker.style.display = "flex";
    }
}