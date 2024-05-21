<template>
    <h3>Liste des films</h3>
</template>
<script>
    export default {
    name: 'FilmAffichList'
};

const apiKey = "af1e1c8f8ad6efb5b326eabaffa38b8a"
const url = "https://api.themoviedb.org/3/search/movie?api_key=" + apiKey +"&language=fr-FR&page=1&query="
function searchFilms() {
    const fetchOptions = { method: "GET" };
    fetch(url + "Jardin", fetchOptions)
    .then((response) => {
        return response.json();
    })
    .then((dataJSON) => {
        console.log(dataJSON);
    })
    .catch((error) => {
        console.log(error);
    });
}
</script>