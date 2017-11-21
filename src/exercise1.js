exports.run = function run (input){
  console.log(input.toUpperCase());
};




// Création d'une fonction maj qui répond à l'énoncé mais sans le exports car impossible de tester avec exports
function run (input) {
  console.log(input.toUpperCase());
}

run("Bonjour")