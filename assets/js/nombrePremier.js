$(function () {
	function primeNumberv1(numberToTest) {
		var divisor = numberToTest - 1;
		while (divisor >= 1) {
			var remainder = numberToTest % divisor;
			if (remainder == 0) {
				console.log(divisor);
				if (divisor == 1) {
					return numberToTest + " est un nombre premier.";
				} else {
					return numberToTest + " n'est pas un nombre premier.";
				}
			} else {
				divisor--;
			}
		}
	}
	function primeNumberv2(numberToTest) {
		var divisor = 2;
		while (divisor <= numberToTest/divisor) {
			var remainder = numberToTest % divisor;
			if (remainder == 0) {
				console.log(divisor);
				return ""//numberToTest + " n'est pas un nombre premier.";
			}
			divisor++;
		}
		if (divisor > numberToTest/divisor) {
			return numberToTest + ", "//" est un nombre premier.";
		}
	}
	function BLARGH() {
		var numberToTest = $('#numberToTest').val();
		$('#messageBox').html(primeNumberv2(numberToTest))
	}

	//$('#caillouButton').click(BLARGH);

	function fourchette(begin, end) {
		$('#messageBox').html("Sont premiers entre " + begin + " et " + end + " les nombres suivants : <br />");
		while (begin < end) {
			$('#messageBox').html($('#messageBox').html() + primeNumberv2(begin) /*+ "<br />"*/);
			begin++;
		}
		$('#messageBox').html($('#messageBox').html().substring(0,$('#messageBox').html().length-1));
	}

	$('#caillouButton').click(samerlipopette);

	function samerlipopette() {
		var begin = $('#numberToTest').val();
		var end = prompt("Caillou ?");
		fourchette(begin, end);
	}
});