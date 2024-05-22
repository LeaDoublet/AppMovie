<template>
<div>
    <FormTexte @update:critere="updateCritere" />
    <FilmAffichList :pcritere="critere" />
</div>
</template>

<script>
import FormTexte from './FormTexte.vue';
import FilmAffichList from './FilmAffichList.vue';
import { ref } from 'vue';

export default {
name: 'FilmList',
components: {
    FormTexte,
    FilmAffichList,
},
setup() {
    const critere = ref('');

    function updateCritere(newCritere) {
    critere.value = newCritere;
    }

    return {
    critere,
    updateCritere,
    };
},
};
</script>
