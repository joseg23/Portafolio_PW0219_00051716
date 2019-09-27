/*Realice una función que reciba un arreglo de datos numéricos, y muestre la suma de todos los elementos del arreglo y su promedio. */
function numberSum(arr){
    let sum=0;
    for(let i =0; i<arr.length;i++){
        sum=sum+arr[i];
    }
    let prom=sum/arr.length;
    console.log("Promedio: "+prom);
}