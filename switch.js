function showWork(which){
    const profwork = document.getElementById("Professional");
    const perswork = document.getElementById("Personal");
    const perswork2 = document.getElementById("Personal2");

    if(which == "pers"){
        perswork.style.display = "flex";
        perswork2.style.display = "flex";
        profwork.style.display = "none";
    }
    else{
        perswork.style.display = "none";
        perswork2.style.display = "none";
        profwork.style.display = "flex";
    }



}