function jsonValueKey(){
	var info = '{"name": "La Plateforme_", "address": "8 rue hozier", "city": "Marseille", "nb_staff": "11", "creation":"2019"}'
  var affiche = JSON.parse(info); 
  return affiche.city;
}
console.log(jsonValueKey());