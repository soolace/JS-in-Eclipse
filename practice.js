/**
 * practice
 */

// try catch (im html file einfügen.
var wert = parseFloat(prompt("gib eine zahl > 0 und <1000 ein"));

try {
	if (isNaN(wert))
		throw "keine gültige zahl";
	if (wert <= 0)
		throw "zahl zu klein";
	if (wert >= 1000)
		throw "zahl ist zu gross";
	document.write(wert);
} catch (fehlerobjekt) {
	alert(fehlerobjekt);
} finally {
	document.write("es geht immer");
}
