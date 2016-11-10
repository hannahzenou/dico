let words = document.getElementsByClassName('word');
console.log(words);

for(let i = 0; i < words.length; i++) {
	
	words[i].addEventListener('click', function() { // On ajoute un gestionnaire d'évenements sur chaque éléments <a> qui sont des éléments du tableaux words
		

		let requete = new XMLHttpRequest();
		requete.open('GET', 'traducteur.php?mot='+ words[i].textContent, true);
		requete.send();

		requete.onreadystatechange = function() { // La fonction de callback ici est appelé à chaque fois que l'état de la requete change
			if(this.readyState === 4 && this.status === 200) {
				// 200 est le code HTTP qui signifie succès de la requete
				console.log(this.responseText);

				console.log(words[i]);

				words[i].textContent= this.responseText;
			}
		}
	})
}




 