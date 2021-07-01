const inputB = document.querySelector("#txt_b");
const btnB = document.querySelector(".btn_b");
const listaB = document.querySelector(".container_b ul");

btnB.addEventListener("click", (e) =>

{
    if(inputB != "")
    {
        e.preventDefault();
        
        const mojaLista = document.createElement("li");
        mojaLista.innerHTML = inputB.value;
        listaB.appendChild(mojaLista);
    }

}

);