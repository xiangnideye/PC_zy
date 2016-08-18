var List_Bottom=document.getElementById('List_Bottom');
var Football=document.getElementById('Football');
var CSL=document.getElementById('CSL');
var Football_1=List_Bottom.getElementsByTagName('ul')[0];
var CLS1=List_Bottom.getElementsByTagName('ul')[1];
CSL.onmouseover=function(){
    List_Bottom.style.display="block";
    Football_1.style.display="none";
};
CSL.onmouseout=function(){
    List_Bottom.style.display="none";
    Football_1.style.display="block";
};
Football.onmouseover=function(){
    CLS1.style.display="none";
    List_Bottom.style.display="block";
};
Football.onmouseout=function(){
    List_Bottom.style.display="none";
    CLS1.style.display="block";
};