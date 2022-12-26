<script>

export default {
  props: {
    title: String,
    shortDescription: String,
    content: String,
    technologies: Array,
    images: Array,
    icon: String,
    iconClass: String
  }
}
</script>
<script setup>
import data from './Data.vue'
</script>

<template>
    <div :id="title" class="card">
        <router-link :to="'/'+title+'/details'">

            <div class="header">
                <header>
                    <img class="icon" :class="iconClass" v-if="icon" :src="'src/media/' + icon"/>
                    <h3>{{title}}</h3>
                </header>
                <div class="technologies">
                    <img class="technology" v-for="tech in technologies.slice().reverse()" :title="tech" :alt="tech" :src="'src/media/technologies/'+data.iconsSrc[ tech ]"/>
                </div>
            </div>
            <!-- <img class="main-image" v-if="images" :src="'src/media/' + images[0]"/> -->
            <p class="shortDescription">{{shortDescription}}</p>
            {{content}}
        </router-link>
    </div>
</template>

<style scoped>
.card {
    width: calc(100% - 20px);
    background-color: var(--color-background-mute);
    border-radius: 15px;
    margin: 10px;
    padding: 20px;
    font-size: 12pt;
}
@media (min-width: 830px) {
    .card {
        width: calc(50% - 20px);
    }
}
.card h3 {
    font-size: 16pt;
    font-weight: 600;
}
.card .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    margin-bottom: 5px;
}
.card header {
    display: flex;
    align-items: center;
    gap: 20px;
}
.card .main-image{
    max-width:100%;
    max-height: 400px;
}
.card .icon {
    width:60px;
    border-radius: 3px;
}
.card .icon.app {
    background-color: white;
    border-radius: 15px;
}
.card .icon.shadow {
    box-shadow: 0 0 5px rgb(73, 73, 73);
}
.card .icon.dark {
    background-color: rgb(0, 0, 0);
}
.card .icon.inset {
    padding: 3px;
}
.card .technologies {
    display: flex;
    gap: 5px;
    flex-wrap: wrap-reverse;
    flex-direction: row-reverse;
}
.card .technology {
    height: 30px;
    max-width: 60px;
    object-fit:contain;
}
.card p.shortDescription {
    font-size: 15pt;
    font-weight: 600;
    margin-bottom: 10px;
}
a {
  text-decoration: none;
  color: var(--color-text);  
}
</style>