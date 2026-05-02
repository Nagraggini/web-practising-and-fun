/*A var nem csak a blokkban látszik, hanem kívűl is. A let csak a blokkban látszik.*/
let count = 0;

function Plus() {

  console.log(document.getElementById("input_scale")) 

  count+=Number(document.getElementById("input_scale").value);
  const oldCount = document.getElementById("counter_label");

  if (count < 0) {
    oldCount.style.color = "red";
  } else if (count == 0) { oldCount.style.color = "pink"; }else{
    oldCount.style.color = "green";  
  }

  oldCount.innerText = count;  
}

function Reset_function() {
  count = 0;
  const oldCount = document.getElementById("counter_label");
  oldCount.style.color = "pink";
  //Visszaadja vagy beállítja egy HTML-elem szöveges tartalmát.
  oldCount.innerText = count;

  document.getElementById("input_scale").value=1;
}

function Minus() {
  count-=Number(document.getElementById("input_scale").value);
  const oldCount = document.getElementById("counter_label");

  if (count < 0) {
    oldCount.style.color = "red";
  } else if (count == 0) { oldCount.style.color = "pink"; }else{
    oldCount.style.color = "green";  
  }
  oldCount.innerText = count;
}
