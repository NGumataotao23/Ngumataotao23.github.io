function showWork(which){
    const profwork = document.getElementById("Professional");
    const perswork = document.getElementById("Personal");
    const perswork2 = document.getElementById("Personal2");
    const perswork3 = document.getElementById("Personal3");

    if(which == "pers"){
        perswork.style.display = "flex";
        perswork2.style.display = "flex";
        perswork3.style.display = "flex";
        profwork.style.display = "none";
    }
    else{
        perswork.style.display = "none";
        perswork2.style.display = "none";
        perswork3.style.display = "none";
        profwork.style.display = "flex";
    }



}