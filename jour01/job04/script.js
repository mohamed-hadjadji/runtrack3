Number.prototype.isBissextile=function(){
return (new Date(this,2,0).getDate()>=29 )
}


var annee=2020
alert(annee.isBissextile())
