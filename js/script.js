var result;
var firstHalf;
var secondHalf;
var eventType = prompt("Is the event casual, semi-formal, or formal?");
switch(eventType) {
	case "casual":
		firstHalf = "something comfy";
		break;
	case "semi-formal":
		firstHalf = "a polo";
		break;
	case "formal":
		firstHalf = "a suit";
		break;
	default:
		firstHalf = "clothes of some kind";
		break;
}
var tempFahr = prompt("What is the temperature in degrees fahrenheit?");
if(tempFahr < 54){secondHalf = "a coat";}
else if(tempFahr > 70){secondHalf = "no jacket";}
else{secondHalf = "a jacket";}
result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + 
" event, you should wear " + firstHalf + " and " + secondHalf + ". ";
console.log(result);