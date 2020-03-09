function fizzbuzz()
{
var nombre = 1;
 
while (nombre <= 151)
{
	if(nombre%3==0 && nombre%5==0)
	{
		console.log("FizzBuzz");
	
	}
	else if(nombre%3==0)
	{
		console.log("Fizz");
	}
	else if(nombre%5==0)
	{
		console.log("Buzz");
	}

	else{
		console.log(nombre);
	}
	nombre++;
}
}

fizzbuzz();

