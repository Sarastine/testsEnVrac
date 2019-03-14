//Remplit la grille pour décoration
$('#fullGridButton').click(function () {
	$('#cell11,#cell27,#cell34,#cell43,#cell59,#cell66,#cell72,#cell88,#cell95').val(1);
	$('#cell12,#cell28,#cell35,#cell41,#cell57,#cell64,#cell73,#cell89,#cell96').val(2);
	$('#cell13,#cell29,#cell36,#cell42,#cell58,#cell65,#cell71,#cell87,#cell94').val(3);
	$('#cell14,#cell21,#cell37,#cell46,#cell53,#cell69,#cell75,#cell82,#cell98').val(4);
	$('#cell15,#cell22,#cell38,#cell44,#cell51,#cell67,#cell76,#cell83,#cell99').val(5);
	$('#cell16,#cell23,#cell39,#cell45,#cell52,#cell68,#cell74,#cell81,#cell97').val(6);
	$('#cell17,#cell24,#cell31,#cell49,#cell56,#cell63,#cell78,#cell85,#cell92').val(7);
	$('#cell18,#cell25,#cell32,#cell47,#cell54,#cell61,#cell79,#cell86,#cell93').val(8);
	$('#cell19,#cell26,#cell33,#cell48,#cell55,#cell62,#cell77,#cell84,#cell91').val(9);
});

//Teste une cellule et la remplit si un seul chiffre possible dedans
function testCell(){
	/*Prendre une cellule.
	Si elle est vide :
		Dans sa ligne, vérifier s'il n'y a pas de 1.
		Si pas de 1, jeton 1.
		Idem pour 2, 3, 4, 5, 6, 7, 8 et 9.
		Dans sa colonne, vérifier s'il n'y a pas de 1.
		Si pas de 1, jeton 1.
		Idem pour 2, 3, 4, 5, 6, 7, 8 et 9.
		Dans son carré, vérifier s'il n'y a pas de 1.
		Si pas de 1, jeton 1.
		Idem pour 2, 3, 4, 5, 6, 7, 8 et 9.
		Si un et un seul jeton, mettre le chiffre dans la cellule*/
	var tokenOne = tokenTwo = tokenThree = tokenFour = tokenFive = tokenSix = tokenSeven = tokenEight = tokenNine = true;
	if ($('#cell11').val() == "") {
		$('.lineOne').each(function(){
			console.log($(this).val());
			switch ($(this).val()) {
				case "1":
					tokenOne = false;
					break;
				case "2":
					tokenTwo = false;
					break;
				case "3":
					tokenThree = false;
					break;
				case "4":
					tokenFour = false;
					break;
				case "5":
					tokenFive = false;
					break;
				case "6":
					tokenSix = false;
					break;
				case "7":
					tokenSeven = false;
					break;
				case "8":
					tokenEight = false;
					break;
				case "9":
					tokenNine = false;
					break;
				default:
					console.log("Cellule vide");
			}
		});
		console.log("Les jetons sont à " + tokenOne + tokenTwo + tokenThree + tokenFour + tokenFive + tokenSix + tokenSeven + tokenEight + tokenNine);
		if (tokenOne && !(tokenTwo || tokenThree || tokenFour || tokenFive || tokenSix || tokenSeven || tokenEight || tokenNine)) {
			$('#cell11').val(1);
		} else if (tokenTwo && !(tokenOne || tokenThree || tokenFour || tokenFive || tokenSix || tokenSeven || tokenEight || tokenNine)) {
			$('#cell11').val(2);
		} else if (tokenThree && !(tokenOne || tokenTwo || tokenFour || tokenFive || tokenSix || tokenSeven || tokenEight || tokenNine)) {
			$('#cell11').val(3);
		} else if (tokenFour && !(tokenOne || tokenThree || tokenTwo || tokenFive || tokenSix || tokenSeven || tokenEight || tokenNine)) {
			$('#cell11').val(4);
		} else if (tokenFive && !(tokenOne || tokenThree || tokenFour || tokenTwo || tokenSix || tokenSeven || tokenEight || tokenNine)) {
			$('#cell11').val(5);
		} else if (tokenSix && !(tokenOne || tokenThree || tokenFour || tokenFive || tokenTwo || tokenSeven || tokenEight || tokenNine)) {
			$('#cell11').val(6);
		} else if (tokenSeven && !(tokenOne || tokenThree || tokenFour || tokenFive || tokenSix || tokenTwo || tokenEight || tokenNine)) {
			$('#cell11').val(7);
		} else if (tokenEight && !(tokenOne || tokenThree || tokenFour || tokenFive || tokenSix || tokenSeven || tokenTwo || tokenNine)) {
			$('#cell11').val(8);
		} else if (tokenNine && !(tokenOne || tokenThree || tokenFour || tokenFive || tokenSix || tokenSeven || tokenEight || tokenTwo)) {
			$('#cell11').val(9);
		} else {
			console.log("Plus d'une possibilité");
		}
	}
}

//Test, lance la fonction en cours de développement
$('#TEST').click(function(){
	$(this).removeClass('btn-warning').addClass('btn-light');
	testCell();
});