//Problem 1 - Multiples of 3 and 5
document.getElementById("problem_1_button").onclick = function(){
  
  var total = 0;
  var n = document.getElementById("problem_1_input").value;

  for (var i = 0; i < n; i++){
    if ((i % 3 === 0) || (i % 5 === 0)){
      total += i;
    }
  }

  document.getElementById("problem_1_answer").textContent = total;
  
};

//Problem 2 - Even Fibonacci numbers
document.getElementById("problem_2_button").onclick = function(){
    
  var x = 0;
  var y = 0;
  var z = 0;
  var sum = 0;
  var n = document.getElementById("problem_2_input").value;

  function fibonacci(y){

    z = x + y;

    if (z < n){

      x = y;

      if (z % 2 !== 0){
        sum += z;
      }
      
      fibonacci(z);
      
    } else{
      return;
    }
  }

  fibonacci(1);
  document.getElementById("problem_2_answer").innerHTML = sum;

};

//Problem 3 - Largest prime factor (efficient)
document.getElementById('problem_3_button').onclick = function(){

  function largestPrimeFactor(num){
    
    var factor = 2;
    while (num > factor){
        if (num % factor === 0){
            num = num / factor;
            factor = 2;
        } else{
            factor++;
        }
    }
    
    document.getElementById('problem_3_answer').innerHTML = factor;
  }

  largestPrimeFactor(document.getElementById('problem_3_input').value);

};

//Largest Prime Factor (inefficient)
// function isPrime(num){
  
//   for (var j=2; j < num; j++){
//     if (num % j === 0){
//       return false;
//     }
//   }
  
//   return true;
// }

// function largestPrimeFactor(num){
  
//   var found = false;
//   var i = 2;
//   var value;
  
//   while (!found){
  
//     value = num / i;
//     if (Number.isInteger(value)){
//       if (isPrime(value)){
//         found = true;
//       } else {
//         i++;
//       } 
//     } else {
//       i++;
//     }
//   }

//   document.getElementById('problem_3_answer').innerHTML = value;
// }
//   largestPrimeFactor(document.getElementById('problem_3_input').value);
// };

//Tabs logic
var container = document.getElementById("tabs-container");
var tabs = container.querySelectorAll("ul li");

function displayPage() {
  var current = this.id;

  var index = current.split("_")[1];

  for (var i = 0; i < tabs.length; i++){
    
    if (tabs[i].classList.contains("selected")){
      tabs[i].classList.remove("selected");
    }

    document.getElementById("problem_" + (i + 1)).style.display = "none";
  }

  document.getElementById(current).className = "selected";
  document.getElementById("problem_" + index).style.display = "block";
}

for (var i = 0; i < tabs.length; i++) {
  tabs[i].onclick = displayPage;
}

