function roll(){
    let count = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        for(let a = 0 ; a< 1000; a++){
        let rollone = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        let rolltwo = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
        let rollOfDice = rollone + rolltwo;
        count[rollOfDice] = count[rollOfDice] + 1;
    }
    let DOM = document.getElementsByTagName("ul");
    DOM[0].innerHTML = "";
    for(let a = 2; a<=12; a++){
        let makeLi = document.createElement("li");
        let text = document.createTextNode(a + ": " + count[a]);
        makeLi.appendChild(text);
        DOM[0].appendChild(makeLi);
    }
}
