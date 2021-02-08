document.getElementsByClassName("predmeti")[0].style.display = "none"; 
//document.getElementsByClassName("prvaGodina")[0].style.display = "none";

/*
prikaziGodinu()
{
 var a = document.getElementById("izbor_godine");
 var aa = a.options[a.selectedIndex].text;

 if(aa == "Prva")
 {
    document.getElementsByClassName("prvaGodina")[0].style.display = "block"; 
 }

}
*/


//document.getElementById("klik1").onclick = function() {prvaGodina()};

function faksDef()
{
   document.getElementsByClassName("faks")[0].style.display = "none";
   document.getElementsByClassName("reset_oas")[0].style.display = "none";
   document.getElementsByClassName("zaglavlje")[0].style.display = "block";
}


function prvaGodina()
{
 document.getElementsByClassName("zaglavlje")[0].style.display = "none";
 document.getElementsByClassName("faks")[0].style.display = "flex";
 document.getElementsByClassName("faks")[0].style.backgroundColor = "yellowgreen";
 document.getElementById("g_opis").innerHTML = "Prva godina"; 
 document.getElementById("p1").innerHTML = "Matematika 1";
 document.getElementById("p2").innerHTML = "Fizika";
 document.getElementById("p3").innerHTML = "Engleski jezik 1";
 document.getElementById("p4").innerHTML = "Osnovi programiranja";
 document.getElementById("p5").innerHTML = "Matematika 2";
 document.getElementById("p6").innerHTML = "Engleski jezik 2";
 document.getElementById("p7").innerHTML = "Inženjersko crtanje primenom računara"; 
 document.getElementById("p8").innerHTML = "Programiranje"; 
 document.getElementById("p9").innerHTML = ""; 

 document.getElementsByClassName("reset_oas")[0].style.display = "flex";

}


function drugaGodina()
{
   //const predmet = document.querySelector(".faks a"); 
   //const noviEl = document.createElement("a"); 
   document.getElementsByClassName("zaglavlje")[0].style.display = "none";
   document.getElementsByClassName("faks")[0].style.display = "flex";
   document.getElementsByClassName("faks")[0].style.backgroundColor = "orange"; 
   document.getElementById("g_opis").innerHTML = "Druga godina"; 
   document.getElementById("p1").innerHTML = "Matematika 3";
   document.getElementById("p2").innerHTML = "Elektrotehnika";
   document.getElementById("p3").innerHTML = "Verovatnoća i statistika";
   document.getElementById("p4").innerHTML = "Engleski jezik 3";
   document.getElementById("p5").innerHTML = "Osnovi elektronike";
   document.getElementById("p6").innerHTML = "Baze podataka";
   document.getElementById("p7").innerHTML = "Programski jezici"; 
   document.getElementById("p8").innerHTML = "Upravljanje sistemima"; 
   document.getElementById("p9").innerHTML = "Operaciona istraživanja"; 
   /*
   noviEl.innerHTML = "Operaciona istraživanja"; 
   predmet.appendChild(noviEl); 
   parent.prepend(noviEl);
   */
  document.getElementsByClassName("reset_oas")[0].style.display = "flex";
}

function trecaGodina()
{
 
 document.getElementsByClassName("faks")[0].style.display = "flex";
 document.getElementsByClassName("faks")[0].style.backgroundColor = "skyblue";
 document.getElementById("g_opis").innerHTML = "Treća godina"; 
 document.getElementById("g_opis").style.backgroundColor = "rgb(15, 94, 240)"; 
 document.getElementById("p1").innerHTML = "Osnovi telekomunikacija 1";
 document.getElementById("p2").innerHTML = "Osnovi telekomunikacionog saobraćaja";
 document.getElementById("p3").innerHTML = "Veštačka inteligenicja ";
 document.getElementById("p4").innerHTML = "Osnovi telekomunikacija 2";
 document.getElementById("p5").innerHTML = "Računarske mreže";
 document.getElementById("p6").innerHTML = "Komutacioni sistemi";
 document.getElementById("p7").innerHTML = "Telekomunikacioni softver"; 
 document.getElementById("p8").innerHTML = ""; 
 document.getElementById("p9").innerHTML = ""; 

 document.getElementsByClassName("reset_oas")[0].style.display = "flex";
}

function cetvrtaGodina()
{
 
 document.getElementsByClassName("faks")[0].style.display = "flex";
 document.getElementsByClassName("faks")[0].style.backgroundColor = "teal";
 document.getElementById("g_opis").innerHTML = "Četvrta godina"; 
 document.getElementById("p1").innerHTML = "Osnovi radio komunikacija";
 document.getElementById("p2").innerHTML = "Saobraćaj u komunikacionim mrežama";
 document.getElementById("p3").innerHTML = "Statistička teorija telekomunikacija";
 document.getElementById("p4").innerHTML = "Telekomunikacioni sistemi";
 document.getElementById("p5").innerHTML = "Bežični komunikacioni sistemi";
 document.getElementById("p6").innerHTML = "Multimedijalne komunikacije";
 document.getElementById("p7").innerHTML = "Novi komunikacioni servisi"; 
 document.getElementById("p8").innerHTML = "Optički komunikacioni sistemi"; 
 document.getElementById("p9").innerHTML = "Završni rad"; 

 document.getElementsByClassName("reset_oas")[0].style.display = "flex";
}
