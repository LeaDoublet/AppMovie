<template>
<v-container>
    <v-text-field
    label="Recherche de films"
    v-model="critere"
    @input="updateCritere"
    ></v-text-field>
</v-container>
</template>

<script>
export default {
name: 'FormTexte',
data() {
    return {
    critere: '',
    };
},
methods: {
    updateCritere() {
    this.$emit('update:critere', this.critere);
    console.log(this.critere); // Affiche le texte saisi dans la console
    },
},
};
</script>
