<script setup>
import Project from './Project.vue'
</script>

<script>
export default {
    props: {
        iconsSrc: Object
    },
    data() {
        return {
            projects: [
                [{title:"Process Line Control Panel",icon:"automatyk/logo.jpg","content":"bla bla",technologies:['Vue']},
                {title:"This portfolio","content":"bla bla",technologies:['Vue']}],

                [{title:"Duties",icon:"sienkiewicza/114.png","content":"bla bla",technologies:['PHP','MySQL','HTML5','JavaScript','CSS3','Python','ESP8266','ESPHome']},
                {title:"Apartment panel",icon:"sienkiewicza/114.png","content":"bla bla",technologies:['Python','Django','MySQL','React','HTML5','JavaScript','CSS3','Figma']},
                {title:"WiFi Tracker",icon:"sienkiewicza/114.png","content":"bla bla",technologies:['ESP8266','MicroPython','Python','Django']}],

                [
                {title:"LO1+ App","content":"bla bla",icon:"lo1+/lo1+_logo.svg",iconClass:"app shadow",images:["lo1+/home.png"],technologies:['Swift','Python','Flask','PHP','AdobeXD','Kotlin']},
                {title:"LED Piano",icon:"led-piano/piano-top-view-svgrepo-com.svg","content":"bla bla",technologies:['ESP8266','C++',"Fusion360","3D Printing"]},
                {title:"SP2 Chat Bot","content":"bla bla",technologies:['ChatFuel','Python','PHP']},
                {title:"Eurovision School Contest",icon:"eurovision/logo.png",iconClass:"","content":"bla bla",technologies:['HTML5','JavaScript','CSS3','Python','PHP']},
                {title:"Take&Tie",icon:"take-and-tie/logo.svg","content":"bla bla",technologies:['PrestaShop','PHP','HTML5','CSS3']},
                {title:"Escape Room Booking App","content":"bla bla",technologies:['PHP','HTML5','JavaScript','CSS3']},
                {title:"Display rotator App",icon:"display-rotator/logo.png",iconClass:"inset","content":"bla bla",technologies:['Swift','MacOS']},
                {title:"Swimming Pool Temperature App",icon:"swimming-pool/logo.png",iconClass:"app","content":"bla bla",technologies:['Swift','iOS']},
                {title:"Spaceship Game","content":"bla bla",technologies:['HTML5','JavaScript','CSS3']},
                {title:"Cubic Snake Game","content":"bla bla",technologies:['Python','PyGame']},
                {title:"Interconnected WLED Lamps","content":"bla bla",technologies:['WLED','C++',"Fusion360","3D Printing"]}
                ]
            ]
        }
    }
}
</script>

<template>
    <h2>My projects</h2>
    <h3>Current projects</h3>
    <div class="cards">
        <Project v-for="project in projects[1]" v-bind="project" :iconsSrc="iconsSrc"/>
    </div>
    <h3>Projects in development</h3>
    <div class="cards">
        <Project v-for="project in projects[0]" v-bind="project" :iconsSrc="iconsSrc"/>
    </div>
    <h3>Completed projects</h3>
    <div class="cards">
        <Project v-for="project in projects[2]" v-bind="project" :iconsSrc="iconsSrc"/>
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
}
.cards {
    padding:10px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}



</style>