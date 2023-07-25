const dictionary = (word) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b989a1b287mshe0d41f4c562df5cp1879a1jsnafbb58104c77',
      'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com',
    }
  };

  fetch(
    `https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=` + word,
    options)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      wordName.innerHTML = response.word;
      definition.innerHTML = response.definition.replace("2." , "<br>2.").replace("3.", "<br>3.").replace("4.", "<br>4.");
    })
    .catch(err => console.log(err));
};
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dictionary(searchInput.value)
});