<template>
    <FilmDetail  :idFilm="id"></FilmDetail>
</template>

<script setup>
    import FilmDetail from '@/components/FilmDetail.vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const id = route.params.id;
    console.log(id);
</script>