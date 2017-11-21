exports.run = function run(input) {
  if(input == 0){ return 0;}
  else{
    var remainder = input % 10
    return Math.max(remainder, biggestNumber((input-remainder)*1e-1));
  }
  console.log("Exercise #2");
};




// Fonction qui fonctionne et retour le plus grand nombre mais impossible avec exports
function run(input){
  if(input == 0){ return 0;}
  else{
    var remainder = input % 10
    return Math.max(remainder, run((input-remainder)*1e-1));
  }
}

console.log(run(1871815))