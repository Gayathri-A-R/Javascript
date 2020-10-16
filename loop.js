var x;
for(x=0;x<=20;x++){
	console.log(x);
}


while(x<=30){
	console.log(x);
	x++;
}


do {
	console.log(x);
	x++;
} while( x<= 40);

var y=0;

switch(y) {
	case 0: {console.log('zero');
			console.log("Hey")
			break;}
	case 1: {console.log('one'); break;}
	case 2: {console.log('two'); break;}
	default: console.log('Greater than 2');
}