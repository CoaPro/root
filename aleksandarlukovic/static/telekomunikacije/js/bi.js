function prikaziBI_f()
{
    document.getElementsByClassName("container_bi")[0].style.display = "flex"; 
    document.getElementsByClassName("izvestajBI")[0].style.display = "none";
}

function sakrijBI_f()
{
    document.getElementsByClassName("container_bi")[0].style.display = "none"; 
    document.getElementsByClassName("izvestajBI")[0].style.display = "block"; 
}