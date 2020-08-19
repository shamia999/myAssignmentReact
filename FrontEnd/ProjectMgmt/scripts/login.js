
var xhr=new XMLHttpRequest();
function login(email,password)
{
    var dataa=window.btoa(email.value+":"+password.value);
    xhr.open('POST',"http://localhost:8080/api/v1/auth/login");
    xhr.setRequestHeader('Content-Type','application/json;charset=UTF-8');
    xhr.setRequestHeader('Authorization',"Basic"+dataa);
    xhr.send();
    xhr.onreadystatechange= sendRequest;
}
function sendRequest()
{
if(xhr.readyState===4)
{

sessionStorage.setItem('user-details',xhr.responseText);
sessionStorage.setItem('access-token',xhr.getResponseHeader('acess-token'));

window.location.href="./index.html";

}
}  