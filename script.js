
let card = prompt('How much do you have money?', 'Natural number without symbols');

if (card >= 500000 && card < 750000) {
  message = "We can offer Standart Card";
} else if (card > 0 && card < 500000 ){
    message = "Not enough money"
} else if (card >= 750000 && card <= 1000000 ) {
  message = "We can offer either Standart Card or Gold Card";
} else if (card >= 750000 && card <= 3000000 ) {
    message = "We can offer Gold Card";
} else if (card > 3000000 && card < 4000000 ) {
    message = "We can offer either Gold Card or Premium Card";
} else if (card >= 4000000 && card <= 100000000 ) {
    message = "We can offer Premium Card";
} else if (card = isNaN){
    message = "Not A Number"
} else {
    message = "empty value"
}

alert(message);