<template>
    <v-container>
      <v-row dense>
        <v-col
          v-for="film in listeFilms"
          :key="film.id"
          cols="12"
          sm="6"
          md="3"
          lg="2"
          xl="2"
        >
          <v-card color="primary" dark>
            <v-img
              :src="'https://image.tmdb.org/t/p/w500/' + film.affiche"
              height="200px"
              cover
            ></v-img>
            <v-card-title>
              {{ film.titre }}
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { reactive, onMounted, watch} from 'vue';
  
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
  
  export default {
    name: 'FilmAffichList',
    props: {
      pcritere: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      const apiKey = 'af1e1c8f8ad6efb5b326eabaffa38b8a';
      const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&language=fr-FR&page=1&query=';
      const listeFilms = reactive([]);
  
      function searchFilms(critere) {
        const fetchOptions = { method: 'GET' };
        fetch(url + critere, fetchOptions)
          .then((response) => response.json())
          .then((dataJSON) => {
            const films = dataJSON.results.map((filmJSON) => new Film(filmJSON));
            listeFilms.length = 0; // Clear the array before adding new results
            listeFilms.push(...films);
            console.log('table : ', listeFilms);
          })
          .catch((error) => {
            console.error('Erreur lors de la récupération des films :', error);
          });
      }
  
      onMounted(() => {
        searchFilms(props.pcritere);
      });
  
      watch(() => props.pcritere, (newCritere) => {
        console.log(newCritere);
        searchFilms(newCritere);
      });
  
      return {
        listeFilms,
      };
    },
  };
  </script>
  
  <style scoped>
  .image {
    width: 200px;
    height: 300px;
  }
  </style>
  