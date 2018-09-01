function calculate() {
	var nom_dikte = document.getElementById('nom').value;
	var age_tank = document.getElementById('age').value;
	var rest_dikte = document.getElementById('lrstw').value;

	var dikte_afname_jaar = (nom_dikte - rest_dikte) / age_tank + ' mm';
	var rest_lev_duur = (rest_dikte - 3.5) / (nom_dikte - rest_dikte) / age_tank * 100 + ' jaar';

	document.getElementById('output1').innerHTML = 'Dikte afname van de bodem per jaar: ' + dikte_afname_jaar;
	document.getElementById('output2').innerHTML = 'Rest levensduur takbodem: ' + rest_lev_duur;
}