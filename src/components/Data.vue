<script>
export default {
iconsSrc: {'Python': 'python-colored.svg', 'Django': 'django-colored.svg', 'Flask': 'flask.svg', 'Swift': 'swift-colored.svg', 'PHP': 'php-colored.svg', 'HTML5': 'html5-colored.svg', 'CSS3': 'css3-colored.svg', 'JavaScript': 'javascript-colored.svg', 'JQuery': 'jquery-colored.svg', 'React': 'react-colored.svg', 'Vue': 'vuejs-colored.svg', 'MySQL': 'mysql-colored.svg', 'C++': 'cplusplus-colored.svg', 'AdobeXD': 'xd-colored.svg', 'Figma': 'figma-colored.svg','PrestaShop':'prestashop.svg','ChatFuel':'chatfuel.svg','MicroPython':'MicroPython.svg','ESP8266':'esp8266.svg','Kotlin':'kotlin-colored.svg','PyGame':'pygame.svg','MacOS':'MacOS.svg','iOS':'iOS.svg','3D Printing':'3d-print-logo.png','WLED':'wled.png','Fusion360':'fusion360.png','ESPHome':'esphome.svg','OpenAI':'OpenAI.svg'},

projects: [
// TODO: add projects
// MatMar
// Athletic art studio
// 3x3 cube
// temperature monitoring and graphing app
// Line follower robot
// smart plant pot


//== In development
[

{title:"This portfolio",
summary:`This portfolio is a web application created using Vue.js, with a focus on responsive design to ensure an optimal user experience. It contains descriptions, photos, and the technologies used in each project, to give users an overview of my capabilities and skills. It is a useful tool for showcasing my work and demonstrating my experience to potential employers or clients.`,
longDescription:`I built a web application using Vue.js as the front-end framework to serve as a collection of my various projects. The portfolio includes descriptions, photos, and the technologies used in each project, allowing users to easily browse through my work and get a sense of my capabilities.

To ensure an optimal user experience, I implemented responsive design to make sure the portfolio looks great on a variety of devices. I also dedicated time to prototyping and testing different design approaches to ensure that the portfolio was easy to navigate.

Through this project, I was able to showcase my work and demonstrate my skills and experience to potential employers or clients. It serves as a useful tool for highlighting my capabilities and expertise.`,
technologies:['Vue']},



{title:"Process Line Control Panel",icon:"automatyk/logo.jpg",longDescription:"In progres...",technologies:['Vue']},
],


//== Current
[
    {title:"Duties",icon:"sienkiewicza/114.png",
shortDescription: "A web app that allows roommates to track and assign cleaning duties.", 
summary:"This app allows users to create and track a list of tasks that need to be completed. It sends reminders via email and chatbot to encourage task completion. It also uses AI to generate humorous images and messages to motivate others to clean the apartment. Additionally, the app includes a page dedicated to displaying statistics and charts about how roommates are contributing to cleaning efforts.",
longDescription: `This app is a comprehensive solution for roommates who want to stay organized and on top of their cleaning duties. With a simple and user-friendly interface, users can easily create a list of tasks that need to be completed around the apartment, assign those tasks to specific roommates, and track progress.

We understand that it can be difficult to remember everything that needs to be done, so we also offer reminders via email and chatbot to help keep you on track. And if you need a little extra motivation, we even have a feature that uses the OpenAI API to generate humorous images and messages to encourage you and your roommates to get cleaning.

But it's not just about getting the work done – we also want to make it easy for you to see how everyone is contributing to the cleaning efforts. That's why we have a dedicated page for displaying statistics and charts about who has completed the most tasks and how much progress has been made overall. This allows roommates to see who is pulling their weight and where there may be room for improvement.

With our app, staying organized and keeping your apartment clean has never been easier. It's the perfect tool for anyone looking to live in a harmonious and well-maintained shared living space.`,
images: ['sienkiewicza/dyzury/dyzury-page1.png','sienkiewicza/dyzury/dyzury-page2.png'],
technologies:['PHP','MySQL','HTML5','JavaScript','CSS3','Python','ESP8266','ESPHome','OpenAI']},



{title:"Roommate Rewards",icon:"sienkiewicza/114.png",
shortDescription: '"Roomie Rewards" is an app designed to incentivize good behavior among roommates.',
summary:'It assigns points for contributions to maintaining a clean and organized shared living space, and integrates with the Duties app to distribute tasks fairly and reduce the burden on roommates with the most points. It is a valuable tool for promoting good behavior and creating a more efficient shared living space.',
longDescription:`The app assigns points to roommates based on their contributions to maintaining a clean and organized shared living space. Good deeds such as emptying the dishwasher or washing a pan after another roommate are recognized and rewarded with points.

In addition, "Roomie Rewards" integrates with the Duties app to help distribute tasks fairly and reduce the burden on roommates who have accrued the most points. This helps to ensure that everyone is pulling their weight and contributing to a harmonious living environment.

Overall, "Roomie Rewards" is a valuable tool for roommates looking to promote good behavior and create a more organized and efficient shared living space.`,
images: ['sienkiewicza/roommate-rewards/rr-kitchen.png'],
technologies:['Python','Django','MySQL','HTML5','CSS3']},




{title:"My Homebase",icon:"sienkiewicza/114.png",
shortDescription:"A web app that serves as a central hub for roommates to access up-to-date information.",
summary:"The app is a comprehensive tool for roommates to stay organized and connected. It provides a range of features including a schedule of classes, cleaning duty schedule, real-time weather and air quality updates, a shared shopping list, shared expense tracking, and more. The app is designed to be a central hub for roommates to access important information and stay organized.",

longDescription:`The app is a comprehensive tool for roommates to stay organized and connected. It provides a range of features to help you stay on top of your daily tasks and responsibilities. Some of the key functions of the app include:

• Displaying a schedule of classes for each roommate, so you can easily see who is busy at any given time
• Showing the current cleaning duty schedule, so you can see who is responsible for cleaning up each week
• Providing real-time updates on the weather and air quality in your location, so you can plan your day accordingly
• Using NASA's "Picture of the Day" as the wallpaper for the app, providing a visually appealing and interesting background for the app
• Showing the number and type of available bikes to rent at the nearest stations, so you can easily plan your transportation
• Displaying the upcoming days off on the academic calendar, so you can plan your schedule accordingly
• Integrating with the "Bring!" app to provide a shared shopping list for you and your roommates
• Integrating with the "Splitwise" app to show the current spendings and help you track shared expenses with your roommates
• Tracking how long it has been since the last party, so you can keep track of the party schedule and plan accordingly
• Displaying a QR code that guests can scan to easily connect to your WiFi network


Overall, the app is designed to be a central hub for roommates to access important information and stay organized. Whether you are at home or on the go, the app helps you stay informed and connected with your roommates.`,
images: ['sienkiewicza/panel/panel-1.png','sienkiewicza/panel/panel-2.png'],
technologies:['Python','Django','MySQL','React','HTML5','JavaScript','CSS3','Figma']},



{title:"WiFi Tracker",icon:"sienkiewicza/114.png",
shortDescription:"A WiFi presence system that tracks who is currently connected to the network and at home.",
summary: "This project is a WiFi presence system that tracks who is currently connected to the network and at home. It assigns static IPs to devices using their MAC addresses and updates each user's connection status on a web app. It improves communication and coordination within a household or workplace without requiring any additional setup or configuration from users.",
longDescription:`The system I have designed is a convenient and efficient way to track who is currently connected to a WiFi network and, therefore, who is currently at home. To do this, we assign each user's device a static IP in the router's settings using the device's MAC (Media Access Control) address. The system does not require any additional setup or configuration on the user's devices.

The system constantly scans the WiFi network for connected devices and compares their IP addresses to a list of registered users. It then updates each user's connection status on a web app, which displays a list of all users and their current status (e.g., "Online" or "Offline").

Overall, this system is a valuable addition to any home or workplace because it provides a quick and easy way to track the presence of individuals and stay connected with others. It is a reliable and user-friendly tool that can greatly improve communication and coordination within a household or workplace without requiring any additional setup or configuration from users.`,
images: ['sienkiewicza/tracker.png'],
technologies:['ESP8266','MicroPython','Python','Django']},



{title:"Apartment Chatbot",icon:"sienkiewicza/114.png",
shortDescription:"A chatbot that helps roommates stay organized and on top of their cleaning duties.",
summary:"The Apartment Chatbot is a custom tool designed to help roommates stay organized and on top of their cleaning duties. It utilizes the advanced OpenAI API to understand and respond to natural language inputs, making it easy to communicate with and use. The chatbot's intuitive interface and advanced technology make it an invaluable resource for maintaining a clean and orderly living space, helping to make the lives of roommates easier and more efficient.",
longDescription:`Welcome to the Apartment Chatbot, a custom tool designed to help roommates stay organized and on top of their cleaning duties. Maintaining a clean and orderly living space is important for creating a harmonious living environment, and the Apartment Chatbot is here to make the task of keeping on top of cleaning duties easier for you and your roommates.

Powered by the advanced OpenAI API, the Apartment Chatbot is able to understand and respond to natural language inputs. This means that you can simply type or speak your request to the chatbot, and it will do its best to assist you. Whether you need to schedule a cleaning day, divide up tasks, or remind your roommates of their duties, the Apartment Chatbot is here to help.

The interface of the Apartment Chatbot is intuitive and user-friendly, making it easy to use even for those who may not be tech-savvy. With its advanced technology, the chatbot is able to understand and respond to a wide range of requests and commands, ensuring that you and your roommates have all the information and support you need to keep your apartment clean and organized.

Overall, the Apartment Chatbot is a powerful and valuable tool for maintaining a clean and orderly living space. Its advanced technology and intuitive interface make it an invaluable resource for you and your roommates, helping to make your lives easier and more efficient. So why wait? Start using the Apartment Chatbot today, and experience the benefits of a clean and organized apartment for yourself!`,
images: ['sienkiewicza/bot/sienkiewicza-bot-mockup.png'],
technologies:['Python','OpenAI']}],


//== Completed Projects ==//
[
{title:"LO1+ App",
shortDescription:"The LO1+ mobile app was designed for students at LO1 school and provided access to important information about their school life",
summary:'The LO1+ app was a user-friendly mobile resource for students at LO1 school, providing access to important information and tools for academic success. It was available on iOS and Android platforms and featured a range of resources including a calendar of events, class schedules, and grades. It also provided real-time updates and notifications to ensure students had access to the most up-to-date information. The app was a valuable resource for students, helping them succeed in their academic pursuits.',
longDescription:`As the founder the LO1+ app, I was responsible for creating and maintaining an intuitive and user-friendly mobile application that helped students of LO1 school access all necessary information regarding their school life. The app was available on both iOS and Android platforms, and featured a range of useful tools and resources for students, including a calendar of events, class schedules, grades, and more.

One of the key features of the LO1+ app was its ability to provide real-time updates and notifications to students, ensuring that they always had access to the most up-to-date information.

Overall, the LO1+ app was a valuable resource for students at LO1 school, providing them with everything they needed to succeed in their academic pursuits. As a developer on the team, I was proud to contribute to the creation of this useful and user-friendly tool.`,
icon:"lo1+/lo1+_logo.svg",iconClass:"app shadow",images:["lo1+/home.png"],technologies:['Swift','Python','Flask','PHP','AdobeXD','Kotlin']},

// TODO: add video and photos
{title:"LED Piano",icon:"led-piano/piano-top-view-svgrepo-com.svg",
//Write a description of the LED Piano project, piano: modified Yamaha CLP-745, controller: ESP8266, 3D printed parts are used
longDescription:`The LED Piano is a one-of-a-kind musical instrument that combines the traditional elements of a digital piano with the modern technology of an ESP8266 microcontroller and LED lights. By modifying a Yamaha CLP-745 digital piano and adding custom 3D-printed parts, I was able to transform the piano into a visually stunning and interactive instrument. The ESP8266 serves as the "brain" of the project, receiving MIDI signals from the piano and communicating with a script that displays the corresponding notes on the LED strip.

Not only is the LED Piano a fun and innovative way to play music, but it also offers an engaging and interactive learning experience for those interested in music theory and sheet music. By connecting an iPad to the piano, users can see which notes need to be played on the keyboard in real-time, making it a useful tool for beginners looking to learn how to read sheet music. Overall, the LED Piano is a unique and creative way to play and learn about music.`,
//rewrite the above longDescription but make it longer
shortDescription: "A unique musical instrument that I created to display the notes being played on an digital LED strip.",
//rewrite a short summary of the LED Piano based on the longDescription above
summary: "The LED Piano is a modified digital piano that combines traditional music-making with modern technology. I created it by modifying a Yamaha CLP-745 digital piano and adding custom 3D-printed parts, as well as an ESP8266 microcontroller and LED lights. The microcontroller receives MIDI signals from the piano and communicates with a script that displays the corresponding notes on the LED strip, allowing the player to see the music they are creating in a visually stunning way. The LED Piano can be used for creative musical compositions and as a tool for learning sheet music, making it a unique and innovative way to play and learn about music.",
technologies:['ESP8266','C++',"Fusion360","3D Printing"]},



{title:"SP2 Chatbot",
shortDescription:"A chatbot that helps students at SP2 school stay organized and up to date with their school life.",
// SP2 chatbot was a a messnger bot helping students at SP2 with ther daily school life
//it provided access to important information about their school life like grades, lesson plan and more
//Write a long description of the sp2 chatbot
summary:"The SP2 Chatbot was a custom tool designed to help students at SP2 school stay organized and up to date with their school life. It was available on Facebook Messenger and provided access to important information about their school life, including grades, lesson plans, and more. Powered by the advanced ChatFuel API, the chatbot's intuitive interface and advanced technology made it an invaluable resource for students, helping them to stay on top of their school life and succeed in their academic pursuits.",
//write a long description of the sp2 chatbot
longDescription:`The SP2 Chatbot was a custom tool designed to help students at SP2 school stay organized and up to date with their school life. It was available on Facebook Messenger and provided access to important information about their school life, including grades, lesson plans, and more. Powered by the advanced ChatFuel API, the chatbot's intuitive interface and advanced technology made it an invaluable resource for students, helping them to stay on top of their school life and succeed in their academic pursuits.

As the founder of the SP2 Chatbot, I was responsible for creating and maintaining an intuitive and user-friendly chatbot that helped students of SP2 school access all necessary information regarding their school life. The chatbot was available on Facebook Messenger, and featured a range of useful tools and resources for students, including grades, lesson plans, and more.

One of the key features of the SP2 Chatbot was its ability to provide real-time updates and notifications to students, ensuring that they always had access to the most up-to-date information.

Overall, the SP2 Chatbot was a valuable resource for students at SP2 school, providing them with everything they needed to succeed in their academic pursuits. As a developer on the team, I was proud to contribute to the creation of this useful and user-friendly tool.`,
technologies:['ChatFuel','Python','PHP'],
images:['bot-sp2/bot mock-up.png']},


// TODO: add intro video
{title:"Eurovision School Contest",icon:"eurovision/logo.png",iconClass:"",
//write a short description of the Eurovision School Contest
shortDescription:"A fun and exciting musical competition for students at my junior high school",
//write a summary of the Eurovision School Contest
summary:"The Eurovision School Contest was a fun and exciting musical competition for students at my junior high school. It was a great opportunity for me to use my skills to create something that was enjoyed by so many people, and I am proud of the work that I did to make the Eurovision School Contest a success.",
//write a long description of the Eurovision School Contest
longDescription:`As one of the main organizers of the Eurovision School Contest at my junior high school, I had a number of responsibilities that were crucial to the success of the event. Not only was I responsible for creating the graphical interface that was displayed on the projector during the final gala, but I also took charge of creating a system for booking tickets to the event and live streaming the entire competition. In addition, I created a system to cross reference the votes with the list of students in each class to prevent any instances of self-voting.

One of the key features of the graphical interface that I created was the inclusion of animations, which added an extra layer of excitement and engagement for the audience. In addition to this, I also incorporated the music videos that were created by the participating groups of students, as well as a live scoreboard that kept track of the votes and scores throughout the competition.

To make the gala even more interactive, I also developed a system for voting for the music videos using the SP2 chatbot. This allowed audience members to easily cast their votes for their favorite videos in real time, and contributed to the overall excitement and energy of the event.

Overall, the final gala of the Eurovision School Contest was a huge success, with the audience thoroughly enjoying the music videos and the interactive voting system. It was a truly memorable experience for me to be able to use my skills and creativity to create something that was so well received by so many people, and I am proud of the work that I did to make the event such a success.`,
images: ['eurovision/eurovision-fb.jpg','eurovision/eurovision-tickets.jpg'],
technologies:['HTML5','JavaScript','CSS3','Python','PHP']},



{title:"Take&Tie",icon:"take-and-tie/logo.svg",
//write a short description (one sentence) of the Take&Tie project
shortDescription:"A student company that I founded with my friends. We created shoelaces with custom designs and sold them online.",
//write a summary of the Take&Tie project
summary:"Take&Tie was a student company that I founded with my friends. We created shoelaces with custom designs and sold them online. Among other things, I was responsible for creating the website and the online store.",
longDescription: `Take&Tie was a student company that I founded with my friends. We created shoelaces with custom designs and sold them online. Among other things, I was responsible for creating the website and the online store.

The Take&Tie company won the Grad Prix "Produkcik 2019" competition, which was a competition for the best student company in the Poland. The company was also featured in the "Tele express", and I was interviewed by many newspapaers and radio stations.

The website was created using the PrestaShop open source e-commerce solution. It featured a user-friendly interface and an intuitive shopping cart. The website also included a feature that allowed customers to design their own shoelaces as a suggestion for us for new designs.

Overall, the website and the online store were a great success, and I am proud of the work that I did to create them. The website and the online store were a great success, and I am proud of the work that I did to create them.`,
images:['take-and-tie/prezentacja/prezentacja.001.jpeg','take-and-tie/prezentacja/prezentacja.004.jpeg','take-and-tie/prezentacja/prezentacja.005.jpeg','take-and-tie/prezentacja/prezentacja.006.jpeg'],
technologies:['PrestaShop','PHP','HTML5','CSS3']},

{title:"Escape Room Booking App",
//write a short description (one sentence) of the Escape Room Booking App
shortDescription:"A booking app that was used to book the Escape Room that I created in my school.",
summary: "The Escape Room was a part of the Take&Tie company. It was a real-life escape room that we created in our school to geather money for out first batch of shoelaces. I was responsible for designing the whole escape room and creating a booking app that was used to book the escape room.",
longDescription: `The Escape Room was a part of the Take&Tie company. It was a real-life escape room that we created in our school to geather money for out first batch of shoelaces. I was responsible for designing the whole escape room and creating a booking app that was used to book the escape room.

The booking app was created using the PHP programming language. It featured a user-friendly interface and an intuitive booking system. The app was used to book the escape room and to manage the bookings. The app was also used to manage the escape room itself, including sending notifications when the final puzzle was completed. The app was a great success, and I am proud of the work that I did to create it.`,

technologies:['PHP','HTML5','JavaScript','CSS3'],
images: ['escape-room/escape-room-1.png','escape-room/escape-room-2.png','escape-room/escape-room-3.png']
},


{title:"Quick Rotate",icon:"display-rotator/logo.png",iconClass:"inset",
shortDescription: "A macOS application that enables users to easily rotate their display",
summary: "The app was created to address the inconvenience of constantly navigating to the system preferences to change display settings. It is intended to be a useful tool for designers, developers, and anyone who values convenience.",
longDescription: `I developed a simple macOS application that allows you to quickly and easily rotate your displayed content without the need to navigate to the system preferences. As someone who uses multiple displays on a regular basis, I found myself constantly going into the system preferences to change the orientation of my displays. It was frustrating and time-consuming, and I knew there had to be a better way. That's why I decided to create this app – to make it easier for me and others to quickly adjust the displays to our desired settings without having to go through the system preferences every time.

In addition to the ability to rotate displays, the app also allows you to arrange your displays into predefined positions. This is especially useful if you have multiple displays and want to quickly snap them into place without having to manually drag and resize them. Whether you're a designer, developer, or just someone who values convenience, this app is sure to come in handy. It has already been a valuable addition to my own workflow, and I am excited to share it with others in my portfolio.`,
images: ['display-rotator/rotator-ss.png'],
technologies:['Swift','MacOS']},


{title:"AquaTemp App",icon:"swimming-pool/logo.png",iconClass:"app",
shortDescription: "This iOS application allows for real-time monitoring of the temperature in our swimming pool.",
summary: "AquaMonitor is a user-friendly iOS app that provides real-time temperature monitoring for our swimming pool. With its straightforward interface AquaMonitor makes it quick and easy to keep track of the temperature of your pool at all times.",
longDescription:"AquaMonitor is a user-friendly iOS app that provides real-time temperature monitoring for our swimming pool. With its straightforward interface AquaMonitor makes it quick and easy to keep track of the temperature of your pool at all times.",
images: ['swimming-pool/swimming-pool-mockup.jpg'],
technologies:['Swift','iOS']},


{title:"Spaceship",icon:"spaceship/spaceship miniaturka 50.png",
shortDescription: "A game, where the player must avoid collision with space rocks.",
summary:`I created a spaceship game that has been developed and refined over the years using various programming languages, including Scratch, Python, HTML and JavaScript, and Swift. In addition to developing the game, I have also worked on this in the Take&Tie company creating shoelaces featuring the spaceship from the game.`,
longDescription:`My journey with this game began with Scratch, a visual programming language that allowed me to build a basic version of the game. From there, I continued to learn and expand my skills, eventually developing the game in Python, HTML and JavaScript, and Swift.

The objective of the game is simple yet compelling: players must navigate their spaceship through the vast expanse of outer space, avoiding collisions with space rocks as they go. The controls are intuitive and responsive, allowing players to deftly maneuver their spaceship to avoid danger and emerge victorious.

In addition to developing the game itself, I have also had the opportunity to work on a project in the Take&Tie Student company, in which we created shoelaces featuring the beloved spaceship from the game. This project allowed me to not only showcase my game development skills, but also my ability to think creatively and bring my creations to life in new and exciting ways.

Overall, the spaceship game is a testament to my passion for game development and my determination to continuously learn and improve my skills. I am excited to see where my journey in this field takes me next.`,
images:['spaceship/spaceship-mockup.jpg','spaceship/spaceship-shoelaces.png'],
technologies:['HTML5','JavaScript','CSS3']},


{title:"Cubic Snake",
shortDescription: "A cubic snake game, where players control a snake as it navigates a 3D maze on a cube.",
summary:"The objective is to avoid walls and collect points by eating food. The snake can move between the different sides of the cube, adding an extra level of challenge and strategy to the gameplay.",
longDescription:`Using the arrow keys, players can control the snake's movement as it weaves its way through the 3D maze. The unique aspect of this game is that the snake can move between the different sides of the cube, allowing for a truly immersive and challenging gaming experience.

As the snake moves through the maze, it must avoid crashing into walls, as this will result in game over. However, the snake can also collect points by eating food items scattered throughout the maze. As the snake eats, it will grow longer, adding an additional layer of strategy to the game as players must carefully navigate the increasingly lengthy snake through the tight confines of the cube maze.

Overall, my cubic snake game offers a fresh take on the classic snake game, adding an exciting twist with the addition of the 3D cube maze. Players will have to use quick reflexes and strategic thinking to successfully navigate the snake through the maze and emerge victorious.`,
technologies:['Python','PyGame'],
images: ['snake/snake-1.png','snake/snake-2.png']
},


{title:"Interconnected WLED Lamps",
shortDescription:"3D-printed WLED lamps capable of intercommunication and control.",
summary:`I am proud to showcase a project featuring interconnected WLED lamps. These lamps were created using a 3D printer, an ESP8266 microcontroller, and a digital light strip. I modified the WLED software to enable the lamps to send and trigger notifications to each other, allowing for a new level of connectivity and interactivity.`,
longDescription:`I am proud to showcase a project featuring interconnected WLED lamps. These lamps were created using a 3D printer, an ESP8266 microcontroller, and a digital light strip. I modified the WLED software to enable the lamps to send and trigger notifications to each other, allowing for a new level of connectivity and interactivity.

One of the lamps was a special gift for my girlfriend, and we have had a lot of fun using the lamps to stay connected in a unique and creative way. Each time one of us triggers a notification on our lamp, the other lamp lights up and alerts us to the notification. It has been a fun and enjoyable way to stay connected, even when we are not physically together.

This project demonstrates my ability to work with hardware and software, as well as my creativity in finding new and innovative ways to use technology. The use of the 3D printer allowed me to create custom-designed lamps that are not only functional, but also visually appealing. The incorporation of the ESP8266 microcontroller and the modification of the WLED software required a strong understanding of both hardware and software, and I am proud of the end result.

Overall, this project is a great example of my skills and capabilities as a maker and inventor, and I am excited to share it with you in my portfolio.`,
technologies:['WLED','C++',"Fusion360","3D Printing"]}


]


]
}
</script>
