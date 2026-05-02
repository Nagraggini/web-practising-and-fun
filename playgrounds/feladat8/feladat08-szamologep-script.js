function szamitas(){

    let aOperandus = Number(document.getElementById("a").value);
    let bOperandus = Number(document.getElementById("b").value);

    let muveletSelect = document.getElementById("muvelet");

    let muvelet = muveletSelect.options[muveletSelect.selectedIndex].value;

    let eredmeny = 0;

    switch(muvelet){

        case "+":
            eredmeny = aOperandus + bOperandus;
            break;
        case "-":
            eredmeny = aOperandus - bOperandus;
            break; 
        case "*":
            eredmeny = aOperandus * bOperandus;
            break;
        case "/":
            if (bOperandus != 0){
                eredmeny = aOperandus / bOperandus;
            }else{
                eredmeny="Nem végrehajtható művelet!";
            }
        
        break;

    }

    let ujLi = document.createElement("li");
    ujLi.innerHTML = aOperandus+" "+muvelet+" "+bOperandus+" = "+eredmeny;
    document.getElementById("elozo").appendChild(ujLi);

}