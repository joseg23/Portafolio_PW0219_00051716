/* Fibonacci: La serie Fibonacci es una serie matemática muy reconocida, la cual tiene como primeros 10 términos: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34. 
Realice una función en JavaScript que reciba un número n como argumento y muestre la serie hasta el enésimo término.  */
function fibonacci(n) {
    let first=1;
    let second=2;
  
    for (let index=3; index<n; index++) {
      let temp=first+second;
      console.log(temp);
      first=second;
      second=temp;
    }
  
    if (n<=2)
      return 1;
  
    return first+second;
  }

