<script setup>
import Project from './Project.vue'
import data from './Data.vue'
</script>


<template>
    <div id="projects">
        <h2>My projects</h2>
        <h3>Current projects</h3>
        <div class="cards">
            <Project v-for="project in data.projects[0]" v-bind="project" />
        </div>
        <h3>Completed projects</h3>
        <div class="cards">
            <Project v-for="project in data.projects[1]" v-bind="project" />
        </div>
    </div>
</template>

<style scoped>
h2 {
    font-size: 27pt;
    margin-left: 22px;
}

h3 {
    font-size: 15pt;
    margin-left: 22px;
    margin-top: 10px;
}

.cards {
    padding: 10px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-top: 0;
}
</style>