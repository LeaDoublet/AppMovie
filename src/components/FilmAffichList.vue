<template>
    <div>
        <h3>Liste des films</h3>
        <ul>
            <li v-for="film in listeFilms" :key="film.id">{{ film.titre }}</li>
        </ul>
    </div>
</template>
<script setup>
    
    import { reactive, onMounted } from 'vue';
class Film {
    constructor(filmJSON) {
    this._id = filmJSON.id;
    this._title = filmJSON.title;
    this._original_title = filmJSON.original_title;
    this._poster_path = filmJSON.poster_path ?? '';
    this._overview = filmJSON.overview ?? '';
    this._genres = filmJSON.genres ? filmJSON.genres.map((g) => g.name).join(' / ') : '';
    }

    get titre() {
    return this._title;
    }

    get titreOriginal() {
    return this._original_title;
    }

    get id() {
    return this._id;
    }

    get affiche() {
    return this._poster_path;
    }

    get resume() {
    return this._overview;
    }

    get genres() {
    return this._genres;
    }

    toString() {
    return `--> ${this._title} (${this._overview})`;
    }
}


    onMounted(() => {
        searchFilms();
    });

const apiKey = "af1e1c8f8ad6efb5b326eabaffa38b8a"
const url = "https://api.themoviedb.org/3/search/movie?api_key=" + apiKey +"&language=fr-FR&page=1&query="
const listeFilms = reactive([]);
function searchFilms() {
    const fetchOptions = { method: "GET" };
    fetch(url + "Jardin", fetchOptions)
    .then((response) => response.json())
    .then((dataJSON)=> {
        const films = dataJSON.results.map((filmJSON) => new Film(filmJSON));
            listeFilms.push(...films);
        console.log("table : ", listeFilms);
        console.log(dataJSON);
    })
    .catch((error) => {
        console.log(error);
    });
    return {
        listeFilms,
    }
}
</script>