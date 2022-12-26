
<script setup>
import data from './Data.vue'
</script>

<script>
export default {
  data() {
    const project = data.projects.find(projectGroup =>
      (projectGroup.find(project => project.title == this.$route.params.name))
    ).find(project => project.title == this.$route.params.name)
    return {
      project: project
    }
  }
}
</script>

<template>
  <router-link :to="'/#'+project.title">
    <div class="back-link"></div>
  </router-link>
  <div class="projectDescription">
    <header>
      <!-- <img src="" alt="" class="topImage"> -->
      <div class="name">
        <img class="icon" :class="project.iconClass" v-if="project.icon" :src="'src/media/' + project.icon" />
        <h3>{{ project.title }}</h3>
      </div>
    </header>
    <div class="content">
      {{ project.content }}
    </div>
  </div>
</template>

<style scoped>
.projectDescription {
    padding: 20px;
}
.back-link {
    width: 20px;
    height: 20px;
    border-left: 2px solid black;
    border-bottom: 2px solid black;
    margin: 20px;
    transform: rotate(45deg);
}
.projectDescription .icon {
    width:60px;
    border-radius: 3px;
}
.projectDescription .icon.app {
    background-color: white;
    border-radius: 15px;
}
.projectDescription .icon.shadow {
    box-shadow: 0 0 5px rgb(73, 73, 73);
}
.projectDescription .icon.dark {
    background-color: rgb(0, 0, 0);
}
.projectDescription .icon.inset {
    padding: 3px;
}
.name {
    display: flex;
    align-items: center;
    gap: 20px;
}
h3 {
  font-weight: 600;
  font-size: 18pt;
}
</style>