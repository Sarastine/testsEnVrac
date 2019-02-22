//Exercice2
let lastName = "Doe";
let firstName = "John";
let city = "New-York";

alert("Nom : " + lastName + "\nPrénom : " + firstName + "\nVille : " + city);
//Exercice4
while (!regexName.test(lastName) && !regexNameWithDash.test(lastName)) {
	lastName = prompt("Entrez un nom valide");
}

var firstName = prompt("Veuillez saisir votre prénom : ");

while (!regexName.test(firstName) && !regexNameWithDash.test(firstName)) {
	firstName = prompt("Entrez un prénom valide");
}

var city = prompt("Veuillez saisir votre ville : ");

while (!regexName.test(city) && !regexNameWithDash.test(city)) {
	city = prompt("Entrez une ville valide");
}
//Exercice6
var secondNumber = prompt("Entrez un nombre : ");
while (!regexNumber.test(secondNumber)) {
	secondNumber = prompt("Entrez un nombre valide");
}
secondNumber = Math.trunc(secondNumber.replace(',', '.'));
//Js-3 Exercice3
function colorText(color) {
	document.getElementById('text').classList.add(color);
	alert("Tu as cliqué sur " + color);
}
//Assistance à personne en difficulté
function reste(){
	var firstNumber = document.getElementById('firstNumber').value;
var secondNumber = document.getElementById('secondNumber').value;
var result = firstNumber % secondNumber;
alert(result);
}
//Jquery exercice 1
$(function(){
	$('#text').hide();
});
//jQuery Exercice 4 de la jq-2
$('#yellow').click(function () {
                $('#text').css('color', 'yellow');
            });
            $('#blue').click(function () {
                $('#text').css('color', 'blue');
            });
//Jquery Exercice 6 de la jq-2
$('#green').hover(function () {
                $('#text').css('color', 'green');
            });
            $('#red').hover(function () {
                $('#text').css('color', 'red');
            });
            $('#blue').hover(function () {
                $('#text').css('color', 'blue');
            });
            $('.color').mouseleave(function () {
                $('#text').css('color', 'yellow');
            });