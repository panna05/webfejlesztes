document.getElementById("A").addEventListener("click", kivalaszt);
document.getElementById("B").addEventListener("click", kivalaszt);
document.getElementById("egy").addEventListener("click", reszletek);
document.getElementById("ketto").addEventListener("click", reszletek);

    

function kivalaszt() {
   
    const a = document.getElementById("A_opcio");
    const b = document.getElementById("B_opcio");

    if (document.getElementById("A").checked) {
        a.style.display = "block";
        b.style.display = "none";

    } else if (document.getElementById("B").checked) {
        a.style.display = "none";
        b.style.display = "block";
    }
}

function reszletek(){
    if(egy){window.location.href = "parizs.html" } 
    else if(ketto){window.location.href="rhone_alpes.html"}

} 


function ajandek(){

    let a=document.getElementById("igen").checked
    let b=document.getElementById("nem").checked

    if (a){document.write("EZ jó hír, így minden finomságot megkóstolhatsz majd!")}
               else{document.write("Ez sem probléma, szervezetünk minden ételintoleranciára fel van készülve!")}
    
}
