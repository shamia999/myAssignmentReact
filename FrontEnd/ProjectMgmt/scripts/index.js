//populating home page with help of access token
var xhr= new XMLHttpRequest;
getBoards();


function getBoards()
{

xhr.open('GET',"http://localhost:8080/api/v1/boards");

xhr.setRequestHeader('Content-Type','application/json;charset=UTF-8');
var access=sessionStorage.getItem('access-token');
console.log(access);
xhr.setRequestHeader('Authorization','Bearer'+access);
xhr.send();
//adding board to the homepage from console by converting string into json
xhr.onreadystatechange=function(){
    if(xhr.readyState==4)
    {
        var boardList=xhr.responseText;
        //dubara server se jo response mila board list of a user usko hum dubara json format me bna re
        JSON.parse(boardList);

var boards=boardList.boards;

boards.forEach(function(value,index)
{
    var template="<div id="+value.id
    
    document.getElementById('boardBlockList').innerHTML+="<div id="+value.id+" onclick=showproject("+value.id+")>"+value.name+"</div>"

} 
);


    }

};
}
function addBoardAPI(element)//boardpost krry ha server pe
{ 
    
    var userDetails=JSON.parse(sessionStorage.getItem('user-details'));
    
    var params={
"description":"string",
"name":element.value,
"owner_id":userDetails.id
};
    xhr.open('POST',"http://localhost:8080/api/v1/boards");
    xhr.setRequestHeader('Content-Type','application/json;charset=UTF-8');
    var access=sessionStorage.getItem('access-token');
    xhr.setRequestHeader('Authorization','Bearer'+access);
    xhr.send(JSON.stringify(params));
    xhr.onreadystatechange=function()
    {
        if(xhr.readystate===4)
        {
 
            console.log(xhr.responseText);
                  getBoards(); //automatically page pe board name aayega
        }
    }

} 

function toggleMenu()
{
   var toggleVariable= document.getElementsByClassName('menu-block')[0];
   if(toggleVariable.style.display=="none")//agar hidden hai
   {
                 toggleVariable.style.display='';
   }
   else       //dikhayi de ra
   {
       toggleVariable.style.display='none';
   }
}

//for task 1 adding project cards dynamically

var projectListObject=[
    {
     name:'project-one'
    },
{
        name:'project-two'

    }
];
//showprojects() is used to add project cards dynamically
var boardList=[];

function showProjects(ListId)
{ 



xhr.open('GET',"http://localhost:8080/api/v1/boards/"+lisiId+"/projects"+ListId+"/projects");

xhr.setRequestHeader('Content-Type','application/json;charset=UTF-8');
var access=sessionStorage.getItem('access-token');
console.log(access);
xhr.setRequestHeader('Authorization','Bearer'+access);
xhr.send();
xhr.onreadystatechange=function(){
    if(xhr.readyState==4)
    {
        var projjectList=JSON.parse(xhr.responseText);
        var projects=projectsList.projects;
        
        /*var boardList=JSON.parse(xhr.responseText)
        var boards=boardList.boards;
        boards.forEach(function(value,index)
        {
            document.getElementById('boardBlockList').innerHTML+="<div id="+value.id+">"+value.name+"</div>"
        
        showProjects(value.id);
        
        }
        ); */
        
    projects.forEach(function(value,index)
    {
    var template='<div class="project-card">'+value.name+
    '<ul >'+
    '<li class="taskpan"> task one</li>'+'<li class="taskpan">task two</li>'+
    '</ul>'+
    '</div>';
    
    document.getElementById(ListId).innerHTML+=template;
     });
    }



}

//task2- adding remove button so that pressing remove button the cards get deleted
}
function removeCard()
{
    document.getElementById('projectList').innerHTML='';
}


//task3-adding new board
//task4-making project-cards appearing boardDiIdGeneratekragy CARDS board k ander hain
var idName=1;
function addBoard(id)
{   
    var findLength=id.value;
    var num=findLength.length;

    if(num<5)
    { alert('length should not be less than 5 characters');

    }


    else{

    idName++;
    //listId is projectcard id and boardId is board Id
    var ListId='projectList'+idName;
      var boardID='board_'+idName;
   var templateBlock ='<section class="board-block" id='+boardID+'>'+
   '<div class="BoardNaming">'+id.value +'<span class="rightside"><button id="Remove_btn" onclick="removeCard()"> Remove card </button> </span></div>'+
       '<div class="project-block" id='+ListId+'>'+
    '</div>'+
'</section>';
boardList.push(
    { 
        List_Id:ListId,
        board_id:boardID,
        templateNew:templateBlock
    }
    );

   document.getElementById('boardBlockList').innerHTML +=templateBlock;

    showProjects(ListId);   
document.getElementById('menuList').innerHTML+="<li onclick=loadMenu('"+boardID+"')>"+id.value+'</li>';

}
    id.value=id.defaultValue;
}





//to make the remaining boards disappear only jis pe click kia hai usi ka boardclock show hoga isi lyi boardId use ki ta k board ka pta
//lagg skay
function loadMenu(element)
{   //boardid ke basis pe board show hora hai jbb touch krte menu baar me toh board id miljaati to woh show krrta agar wohi board element array ka hai
   for(var i=0;i<boardList.length;i++)
    {
        if(boardList[i].board_id==element)
        {
 document.getElementById(boardList[i].board_id).style.display='block';
        }
 else
 {
 document.getElementById(boardList[i].board_id).style.display='none';
    }
}
//document.getElementById(element).style.display='block';
}
