var date = new Date('09/03/2020') ;

function jourtravaille(date)
{
 
    var jour=  date.getDay();
    var mois=  date.getMonth();
    var année= date.getFullYear();
var ferier =[
new Date("01/01/20"),
new Date("13/04/20"),
new Date("01/05/20"),
new Date("08/05/20"),
new Date("21/05/20"),
new Date("01/06/20"),
new Date("14/07/20"),
new Date("15/08/20"),
new Date("01/11/20"),
new Date("11/11/20"),
new Date("25/12/20")
];

    if (jour == '0' || jour== '6')
    {
        console.log('Non  '+ mois +' '+ jour +' '+ année+' est un weekend.');
    }

    for ( i=0; i<= ferier.length; i++)
    {
        if (ferier[i].getTime() == date.getTime() )
        {
            console.log('Le  '+ mois +' '+ jour +' '+ année+' est un jour férié.');
            break;
        }

        else
        {
            console.log('Oui  '+ mois +' '+ jour +' '+ année+' est un jour travailé.');
            break;
        }
    }


}
   
   
    jourtravaille(date);

