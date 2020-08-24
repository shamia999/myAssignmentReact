
var count=0;
if(count===0)
{
document.getElementById('msg').innerHTML="Be the first to like this";
}

function likeit()
{ 
    
    
    document.getElementById('btn1').innerHTML="liked";
    count=count+1;
    if(count==1)
   
   
    {
        document.getElementById('msg').innerHTML="1person likes this";
        }
   
    else
    { 
        document.getElementById('msg').innerHTML=count+"person liked this";
    
    }


}
function addComments(id)
{
    var addEventName=id.value;
    var a=document.getElementById(id);
    document.getElementById('addEvent').innerHTML+=addEventName;
a.value=a.defaultValue;
}
