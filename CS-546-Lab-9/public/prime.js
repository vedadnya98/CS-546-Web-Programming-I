(function() {
const primeForm = document.getElementById("primeform");

function isPrime(n){
  var primeItem = document.createElement("li");
  primeItem.setAttribute('class', 'is-prime');
  var primeText = document.createTextNode(n + " is a prime number");
  primeItem.appendChild(primeText);
  document.getElementById("attempts").appendChild(primeItem);
}

function isNotPrime(n){
  var nonPrimeItem = document.createElement("li");
  nonPrimeItem.setAttribute('class', 'not-prime');
  var nonPrimeText = document.createTextNode(n + " is NOT a prime number");
  nonPrimeItem.appendChild(nonPrimeText);
  document.getElementById("attempts").appendChild(nonPrimeItem);
  return true;
}
primeForm.addEventListener("submit", primeFunc => {
      primeFunc.preventDefault();
      n = document.getElementById("number").value;
      if(n<0)
      {
        alert("No Negatives please");
      }
      else if (n == 1 || n == 0)
        isNotPrime(n);
      else if(n == 2)
        isPrime(n);
      else
      {
        let flag = false;
        for(var i=2 ; i<n ; i++)
        {
          if(n%i == 0)
          {
            flag = isNotPrime(n);
            break;
          }
        }
        if(flag == false)
          isPrime(n);
      }
    }
);
})();
