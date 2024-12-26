<script>
import iconsSrc from './Data.vue'
export default {
  data() {
    return {
      icons: {
        workingWith: {
          name: "I'm currently working with",
          icons: ['Python', 'Django', 'Vue', 'HTML5', 'CSS3', 'JavaScript', 'Postgres', 'Git', 'Tailwind', 'Figma', 'Firebase', 'Docker', 'MacOS', 'Linux', 'GNU Bash', 'VS Code'],
        },
        learning: {
          name: "I'm currently learning",
          icons: ['PyTorch', 'TensorFlow'],
        },
        // pastExperience: {
        //   name: "I've worked with",
        //   icons: ['Swift', 'PHP', 'TypeScript', 'Flask', 'JQuery', 'React', 'MySQL', 'MongoDB', 'C++', 'AdobeXD', 'Vite', 'Arduino', 'RPi', 'XCode'],
        // },
      },
      socials: {
        linkedin: {
          name: 'LinkedIn',
          link: 'https://www.linkedin.com/in/marvin-rucinski/',
        },
        github: {
          name: 'GitHub',
          link: 'https://www.github.com/MarvinRucinski',
        },
        stackoverflow: {
          name: 'StackOverflow',
          link: 'https://www.stackoverflow.com/users/10039005/marvin-ruciński',
        },
      },
      iconsSrc: iconsSrc.iconsSrc
    }
  },
  methods: {
    scrollToNextSection() {
      const nextSection = document.querySelector('#projects');
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
</script>

<template>
  <div class="greetings">
    <h1 class="">Hi,</h1>
    <h1 class="">I'm <span class="blue">Marvin</span> <span style="display: none;">Ruciński</span></h1>

    <!-- socials -->
    <div class="section">
      <h3>Find me on</h3>
      <p class="icons">
        <a rel="noreferrer" v-for="social in socials" :href="social.link" target="_blank" :title="social.name"><img
            :src="'media/technologies/' + iconsSrc[social.name]" width="36" height="36" :alt="social.name" :title="social.name" /></a>
      </p>
    </div>

    <!-- skills -->
    <div v-for="section in icons" class="section">
      <h3>{{section.name}}</h3>
      <p class="icons">
        <a rel="noreferrer" v-for="tech in section.icons"><img :src="'media/technologies/'+iconsSrc[tech]" class="tech" :alt="tech" :title="tech" /></a>
      </p>
    </div>

    <!-- TODO add social media (github, stackoverflow, ...) -->
    <div class="arrow-circle" @click="scrollToNextSection">
      <!-- TODO add link to next section -->
      <div class="arrow"></div>
    </div>
  </div>
</template>

<style scoped>
h1, h1>span {
  font-weight: 450;
  font-size: 13vmin;
}
h1>span {
  font-weight: 600;
}
h3 {
  font-size: 1.2rem;
}
.greetings {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;
}
.icons>* {
  margin: 2px;
}
.icons {
  margin-bottom: 10px;
}
.arrow {
  width: 20px;
  height: 20px;
  border-right: 2px solid var(--color-border-hover);
  border-bottom: 2px solid var(--color-border-hover);
  margin-top: 12px;
  margin-left: 12px;
}
@keyframes float {
  from {bottom: 10px;}
  to {bottom: 20px;}
}

.arrow-circle {
  background-color: var(--color-background-mute);
  width: 50px;
  height: 50px;
  border-radius: 40px;

  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  rotate: 45deg;

  animation: float 1s infinite alternate-reverse;
  animation-timing-function: ease-in-out;

  transition: background-color .3s;
}

.arrow-circle:hover {
  background-color: var(--color-background-soft);
}

.tech {
  width: 36px;
  height: 36px;
}
@media screen and (max-width: 500px) {
  h1, h1>span {
    font-size: 15vmin;
  }
  .arrow-circle {
    width: 40px;
    height: 40px;
  }
  .arrow {
    width: 15px;
    height: 15px;
    margin-top: 10.5px;
    margin-left: 10.5px;
  }
  .tech {
    width: 24px;
    height: 24px;
  }
  
}

</style>
