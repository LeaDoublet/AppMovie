<template>
    <div>
        <h3>Detail d'un film</h3>
        <p>ID du film : {{ idFilm }}</p>
    </div>
</template>
<script setup>
const props = defineProps({
    idFilm: {
    type: String, // ou Number selon le type de votre ID
    required: true,
    },
});
</script>