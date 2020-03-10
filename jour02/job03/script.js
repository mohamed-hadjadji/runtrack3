function addone()
{
  i++;
  compteur.innerHTML = i;
}
var button = document.getElementById('button');
var compteur = document.getElementById('compteur');
button.onclick = addone;
var i = 0;
compteur.innerHTML = i;
