/*Elabore una función que llene un arreglo con 20 números de forma aleatoria (random), y que pida al usuario adivinar un número, 
si lo adivina mostrará un mensaje indicando que ganó, si no mostrará que perdió.*/

function guessNumber(num){
    values=[];
    for(var i=0;i<20;i++){
        aleatoryNumber=(Math.floor(Math.random()*100)+1);
        values.push(aleatoryNumber);
    }
    for(var j=0;j<20;j++){
        if(num==values[j])
            console.log("Winner");            
        else
            console.log("Loser");
    }
    return values;
}