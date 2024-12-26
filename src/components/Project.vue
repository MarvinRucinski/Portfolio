<script>

export default {
    props: {
        title: String,
        subtitle: String,
        shortDescription: String,
        longDescription: String,
        technologies: Array,
        images: Array,
        icon: String,
        iconClass: String,
        summary: String,
        customHtml: String,
        links: Array
    }
}
</script>
<script setup>
import data from './Data.vue'
</script>

<template>
    <router-link custom :to="'/' + title + '-' + subtitle + '/details'" v-slot="{ navigate }">
        <div :id="title" class="card" role="link" @click="navigate">

            <div class="header">
                <header>
                    <img class="icon" :class="iconClass" v-if="icon" :src="'media/' + icon" />
                    <div>
                        <h3>{{ title }}</h3>
                        <h4>{{ subtitle }}</h4>
                    </div>
                </header>
                <div class="technologies">
                    <img class="technology" v-for="tech in technologies.slice().reverse()" :title="tech" :alt="tech"
                        :src="'media/technologies/' + data.iconsSrc[tech]" />
                </div>
            </div>
            <!-- <img class="main-image" v-if="images" :src="'media/' + images[0]"/> -->
            <p v-if="shortDescription" class="shortDescription">{{ shortDescription }}</p>
            <!-- {{ summary }} -->
        </div>
    </router-link>
</template>

<style scoped>
.card {
    width: calc(100% - 20px);
    background-color: var(--color-background-mute);
    border-radius: 15px;
    margin: 10px;
    padding: 20px;
    font-size: 12pt;
    cursor: pointer;
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
}

.card header {
    display: flex;
    align-items: center;
    gap: 20px;
}

.card .main-image {
    max-width: 100%;
    max-height: 400px;
}

.card .icon {
    width: 60px;
    border-radius: 3px;
}

.card .icon.app {
    background-color: white;
    border-radius: 25%;
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
    max-width: 40%;
}

.card .technology {
    height: 30px;
    max-width: 75px;
    object-fit: contain;
}

.card p.shortDescription {
    font-size: 13pt;
    font-weight: 500;
    margin: 10px 0 0;
}

a {
    text-decoration: none;
    color: var(--color-text);
}
@media screen and (max-width: 500px) {
    .card .icon {
        width: 40px;
    }
    .card h3 {
        font-size: 12pt;
        font-weight: 600;
    }
    .card h4 {
        font-size: 10pt;
        font-weight: 500;
    }
    .card p.shortDescription {
        font-size: 10pt;
        font-weight: 500;
    }
    .card .technology {
        height: 20px;
        max-width: 50px;
    }
}
</style>