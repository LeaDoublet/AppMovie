<template>
    <v-container>
        <v-card v-if="data.film">
            <v-img :src="'https://image.tmdb.org/t/p/w500' + data.film.poster_path" class="white--text align-end"
                height="400px">
                <v-card-title>{{ data.film.title }}</v-card-title>
            </v-img>
            <v-card-subtitle>{{ data.film.tagline }}</v-card-subtitle>
            <v-card-text>
                <div><strong>Résumé:</strong> {{ data.film.overview }}</div>
                <div><strong>Genres:</strong> <span v-for="genre in data.film.genres" :key="genre.id">{{ genre.name }}
                    </span></div>
            </v-card-text>
        </v-card>

        <v-card v-if="data.credits">
            <v-card-title>Acteurs</v-card-title>
            <v-list>
                <v-list-item v-for="actor in data.credits.cast" :key="actor.cast_id">
                    <v-list-item-content>
                        <v-list-item-title>{{ actor.name }}</v-list-item-title>
                        <v-list-item-subtitle>{{ actor.character }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card>

        <v-card v-if="data.credits">
            <v-card-title>Membres de la production</v-card-title>
            <v-list>
                <v-list-item v-for="crew in data.credits.crew" :key="crew.credit_id">
                    <v-list-item-content>
                        <v-list-item-title>{{ crew.name }}</v-list-item-title>
                        <v-list-item-subtitle>{{ crew.job }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-card>
    </v-container>
</template>
<script setup>
const props = defineProps({
    idFilm: {
        type: String,
        required: true,
    },
});
import { onMounted, reactive } from 'vue';

const apiKey = 'af1e1c8f8ad6efb5b326eabaffa38b8a';
let data = reactive({ film: null, credits: null });

const fetchFilmDetails = async () => {
    const url = `https://api.themoviedb.org/3/movie/${props.idFilm}?api_key=${apiKey}&language=fr-FR`;
    const response = await fetch(url);
    const dataJSON = await response.json();
    data.film = dataJSON;
};

const fetchFilmCredits = async () => {
    const url = `https://api.themoviedb.org/3/movie/${props.idFilm}/credits?api_key=${apiKey}&language=fr-FR`;
    const response = await fetch(url);
    const dataJSON = await response.json();
    data.credits = dataJSON;
};

onMounted(() => {
    fetchFilmDetails();
    fetchFilmCredits();
});
</script>