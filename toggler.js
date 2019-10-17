function toggleAbout(tab){
    var selectArray=document.getElementsByClassName("select");
    var buttonArray = document.getElementsByClassName("button1");
    selectArray[tab].style.display = "block";
    buttonArray[tab].style.backgroundColor="#304685";
    buttonArray[tab].style.color = "white";
    var ct=0;
    for(ct=0;ct<selectArray.length;ct++){
        if(ct!=tab){
            selectArray[ct].style.display = "none";
            buttonArray[ct].style.backgroundColor = "cadetblue";
            buttonArray[ct].style.color = "white";
        }
    }
}