<script>
export default {
  iconsSrc: {
    'Python': 'python-colored.svg',
    'Django': 'django-colored.svg',
    'Flask': 'flask.svg',
    'Swift': 'swift-colored.svg',
    'PHP': 'php-colored.svg',
    'HTML5': 'html5-colored.svg',
    'CSS3': 'css3-colored.svg',
    'JavaScript': 'javascript-colored.svg',
    'JQuery': 'jquery-colored.svg',
    'React': 'react-colored.svg',
    'Vue': 'vuejs-colored.svg',
    'MySQL': 'mysql-colored.svg',
    'C++': 'cplusplus-colored.svg',
    'AdobeXD': 'xd-colored.svg',
    'Figma': 'figma-colored.svg',
    'PrestaShop': 'prestashop.svg',
    'ChatFuel': 'chatfuel.svg',
    'MicroPython': 'MicroPython.svg',
    'ESP8266': 'esp8266.svg',
    'Kotlin': 'kotlin-colored.svg',
    'PyGame': 'pygame.svg',
    'MacOS': 'macos-colored.svg',
    'iOS': 'iOS.svg',
    '3D Printing': '3d-print-logo.png',
    'WLED': 'wled.png',
    'Fusion360': 'fusion360.png',
    'ESPHome': 'esphome.svg',
    'OpenAI': 'OpenAI.svg',
    "Docker": "docker-colored.svg",
    "MacOS": "macos-colored.svg",
    "Linux": "linux-colored.svg",
    "GNU Bash": "gnubash-colored.svg",
    "VS Code": "visualstudiocode-colored.svg",
    "Firebase": "firebase-colored.svg",
    "Postgres": "postgresql-colored.svg",
    "Git": "git-colored.svg",
    "Tailwind": "tailwindcss-colored.svg",
    "PyTorch": "pytorch-colored.svg",
    "TensorFlow": "tensorflow-colored.svg",
    "TypeScript": "typescript-colored.svg",
    "MongoDB": "mongodb-colored.svg",
    "Vite": "vite-colored.svg",
    "Arduino": "arduino-colored.svg",
    "RPi": "raspberrypi-colored.svg",
    "Klipper3D": "klipper3d.png",
    "XCode": "xcode-colored.svg",
    "GitHub": "github.svg",
    "LinkedIn": "linkedin.svg",
    "StackOverflow": "stackoverflow.svg",
  },

  projects: [
    // TODO: add projects
    // Athletic art studio?
    // 3x3 cube?
    // temperature monitoring and graphing app?
    // home server?
    // bitehack styczen 2024


    //== Current
    [

    {
      title: "Duties.app (Dyżury.app)",
      icon: "dyzury-app/logo.png",
      iconClass: "app",
      shortDescription: "A web app that allows roommates to track and assign cleaning duties.",
      longDescription: `🚀 I'm excited to share the result of my work – the Duties App! 🏠📲

This tool was created for people who share a space with others and want to maintain order without unnecessary stress. The app is especially useful for students renting apartments by the room, where it's easy to get confused about household chores.

With the Duties App, cleaning together is much simpler:

✅ Create and assign duties for individual rooms or the entire apartment
✅ Automatic notifications about upcoming duties
✅ Ready-made task lists and easy assignment of responsibilities to roommates
✅ Clear history of completed tasks – all in one place

Working on the app was a big challenge, but I'm proud of the results and hope that the Duties App will prove to be a practical solution for many users. I'm looking forward to feedback and ideas from everyone who would like to test it!`,
      images: ['dyzury-app/ss.png'],
      technologies: ['Vue', 'HTML5', 'JavaScript', 'CSS3', 'Python', 'Django', 'Docker'],
      links: [{
        "name": "Website",
        "url": "https://dyzury.app"
      },
        {
          "name": "AppStore",
          "url": "https://apps.apple.com/pl/app/dyżury-app/id6502833411"
        },
        {
          "name": "Google Play",
          "url": "https://play.google.com/store/apps/details?id=app.dyzury"
        }
      ]
    },

      {
        title: "Miglator",
        // icon: "miglator/logo.png",
        shortDescription: "An innovative solution that bridges communication gaps for people who are deaf or hard of hearing.",
        longDescription: `🎉 1st place at the VII edition of Bitehack! 🎉

I’m incredibly proud to be part of the winning team alongside Franciszek Radziwolski, Jakub Wasilewski, and Kacper Członka! Representing our SNS Automatyk science club at this year’s Bitehack, we tackled the challenge under the theme “Become a Hero” 🦸‍♂️.

🚀 What did we create?
We developed “Miglator” – an innovative solution that bridges communication gaps for people who are deaf or hard of hearing. 🧠

🔹 The system uses a camera and a neural network to recognize sign language and display it as a text message.
🔹 It works the other way around, too – a microphone recognizes speech and converts it into text visible to the deaf user.

We had only 24 hours to turn this idea into a working project, and we did it! 1st place is a testament to our teamwork, creativity, and determination. 🏆👏

A huge thank you to Politechnika Wrocławska for the support and to my teammates for an unforgettable experience!

We are currently working on further developing the project to enhance its capabilities and make it more accessible to a wider audience.`,
        images: ['miglator/img.jpeg', 'miglator/img2.jpeg'],
        technologies: ['Python', 'TensorFlow', 'PyTorch', 'RPi', '3D Printing', 'Fusion360'],
        links: [{
          "name": "Demo",
          "url": "https://fb.watch/wJmfs1lx-j/"
        }]
      },


      {
        title: "WMS System",
        icon: "masterche-logoplaste/logo.png",
        shortDescription: "A Warehouse Management System (WMS) developed for Masterche Logoplaste.",
        longDescription: `As part of my work at Masterche Logoplaste, I am developing a comprehensive Warehouse Management System (WMS) to streamline and optimize warehouse operations. 

The system is designed to improve efficiency, reduce errors, and provide better visibility into warehouse operations. By leveraging Django's robust framework, the WMS offers a responsive and user-friendly interface that meets the needs of warehouse staff and management.`,
        // images: ['masterche-logoplaste/wms-dashboard.png'],
        technologies: ['Django', 'HTML5', 'CSS3', "JavaScript", 'Tailwind']
      },

      {
        title: "Juwenalia 2025 App",
        shortDescription: "An exciting new app developed in collaboration with the Solvro scientific association for the Juwenalia 2025 event.",
        longDescription: "I'm thrilled to announce that I'm working on a new app in collaboration with the Solvro scientific association at Wrocław University of Technology for the Juwenalia #wrocławrazem 2025 event. While we can't reveal any specific details just yet, we can assure you that this app will bring a unique and engaging experience to the event. Stay tuned for more updates as we get closer to the launch date!",
        // images: [],
        technologies: ["JavaScript", "HTML5", "CSS3"]
      },

      {
        title: "Process Line Project",
        icon: "automatyk/logo.jpg",
        shortDescription: "A miniature conveyor line with conveyor belts, a vision system, and detail sorting.",
        longDescription: `The Conveyor Line Project is an ambitious initiative undertaken by the SNS Automatyk scientific association, where I currently serve as the project leader. The primary goal of this project is to develop a miniature conveyor line equipped with conveyor belts, a vision system, and a detail sorting mechanism.

The conveyor line is designed to simulate real-world industrial processes on a smaller scale, providing valuable hands-on experience in automation and control systems. The project involves the integration of various components, including:

<b>Conveyor Belts</b>: These are used to transport items along the line, mimicking the movement of goods in a manufacturing environment.
<b>Vision System</b>: This system utilizes cameras and image processing algorithms to identify and classify items on the conveyor belt. It plays a crucial role in ensuring that items are correctly sorted based on predefined criteria.
<b>Detail Sorting Mechanism</b>: Once the vision system identifies the items, the sorting mechanism directs them to the appropriate bins or sections. This process is automated to ensure efficiency and accuracy.

As the project leader, I am responsible for overseeing the development and integration of these components, ensuring that the system operates seamlessly. The Conveyor Line Project not only provides practical experience in automation but also serves as a valuable educational tool for members of the SNS Automatyk association, helping them to develop skills in robotics, programming, and system integration.`,
        // images: ["automatyk/conveyor-line.jpg"],
        technologies: ["Python", "RPi", "Fusion360", "3D Printing"]
      },


    ],


    //== Completed Projects ==//
    [
      // kolimator  https://github.com/MarvinRucinski/kolimator_project
      {
        "title": "CTS - Comarch Targeting System",
        "icon": "cts/Comarch_Logo.png",
        "shortDescription": "A computer-assisted electronic sighting system developed in collaboration with Comarch.",
        "longDescription": `A shared success with pride on the podium! 🏆

A project that started as an ambitious idea has transformed into a working prototype and won 2nd place at the Team Projects Conference organized by Wrocław University of Science and Technology. Together with the team, we created CTS – a computer-assisted electronic sighting system that has the potential to revolutionize the collimator market in Poland.

This recognition is the result of hard work, commitment, and great collaboration from the entire team:
🔹 Jakub Wasilewski
🔹 Piotr Gabrysch
🔹 Franciszek Radziwolski
🔹 Marvin Ruciński

Our solution allows for dynamic correction of the aiming mark, taking into account key weapon and ammunition parameters. We proved that it is possible to create a solid and functional system for a fraction of the market price of premium-class collimators.

I want to thank the team for the collaborative effort, Mateusz Żurawski for his mentoring, and Comarch for supporting this event and us – young innovators! 🚀`,
        "images": ["cts/img1.jpeg", "cts/img2.jpeg", "cts/img3.jpeg", 'cts/render.png', 'cts/app.png'],
        "technologies": ["Python", "RPi", "3D Printing", 'Fusion360'],
        "links": [{
          "name": "Blog Post",
          "url": "https://pwr.edu.pl/uczelnia/aktualnosci/studenckie-projekty-na-zamowienie-znamy-zwyciezcow-13386.html"
        }]
      },

      {
        "title": "eVote EU - HACKYeah",
        "shortDescription": "An application designed to encourage young people to participate in the European Parliament elections.",
        "longDescription": `Together with my colleagues, I had the opportunity to take part in HACKYeah – the largest stationary hackathon in Europe, held at Tauron Arena in Kraków. This event was a true mix of adrenaline, creativity, and technology – and we rose to the challenge!

🌟 What did we create?

Our goal was more than just coding. In 24 hours, we designed an application aimed at encouraging young people to participate in the European Parliament elections. We wanted to show that voting matters and that every vote counts.

🏆 Finalist title!

Despite tough competition, our project was recognized, and we earned the title of finalists! This is a great honor for us and proof that our work has real value.

🎉 Why is HACKYeah so special?

This hackathon is not just about coding – it’s about incredible energy, idea exchange, and teamwork at the highest level. The time pressure, brainstorming, and pushing past our own limits made these 24 hours truly unforgettable.`,
        "images": ["hackyeah/ss.png", "hackyeah/img.jpeg"],
        "technologies": ["Figma", 'React'],
        // "links": [{
        //   "name": "Event Website",
        //   "url": "https://hackyeah.pl"
        // }]
      },

      {
        title: "The Student Camp App",
        subtitle: "Summer 2024",
        icon: "oboz-studentow-pwr/lato-2024/logo.png", iconClass: "app",
        shortDescription: "A mobile app for the 2024 summer student camp for WrocTech students.",
        longDescription: `The Student Camp App is a comprehensive tool designed to streamline the organization of student camps at Wrocław University of Technology. This application caters to two primary user groups: camp organizers and participants. 

For organizers, the app provides robust features to manage participant data efficiently, simplifying various administrative processes. It includes functionalities for tracking registrations, managing schedules, and communicating with participants, ensuring a smooth and organized camp experience.

Participants benefit from quick access to essential information such as event schedules and the ability to sign up for specific activities like workshops. The user-friendly interface ensures that participants can easily navigate the app and stay informed about all camp-related activities.

The application was initially developed as a Progressive Web App (PWA) using web technologies to ensure accessibility across different devices and platforms. However, for this year, the app has been transformed into a native application using Capacitor and Ionic, and it has been published on both the App Store and Google Play.

The development process included detailed planning and implementation of both frontend and backend components, with a focus on creating a seamless user experience. Extensive end-to-end (E2E) testing was conducted to ensure the reliability and functionality of the app. The successful deployment and practical use of the application at Wrocław University of Technology camps have demonstrated its value as an indispensable tool for camp organization.

Additionally, this application was used as my engineering thesis project, showcasing my ability to develop and deploy a fully functional and impactful software solution.

A new feature added to the app this year is the "Camp Tinder," which allows participants to connect with each other, fostering a sense of community and making it easier for attendees to meet new people and form friendships during the camp.`,
        images: ['oboz-studentow-pwr/lato-2024/home.png', 'oboz-studentow-pwr/lato-2024/profil1.png', 'oboz-studentow-pwr/lato-2024/post1.jpg', 'oboz-studentow-pwr/lato-2024/post2.jpg'],
        technologies: ['Vue', 'HTML5', 'JavaScript', 'CSS3', 'Python', 'Django', 'Docker', 'Firebase'],
        links: [{
          "name": "Camp Website",
          "url": "https://oboz.samorzad.pwr.edu.pl"
        }]
        
      },
      {
        title: "The Student Camp App",
        subtitle: "Winter 2024",
        icon: "oboz-studentow-pwr/zima-2024/logo.png", iconClass: "app",
        shortDescription: "A web app for the 2024 winter student camp for WrocTech students.",
        longDescription: `The Student Camp App is a comprehensive tool designed to streamline the organization of student camps at Wrocław University of Technology. This application caters to two primary user groups: camp organizers and participants. 

For organizers, the app provides robust features to manage participant data efficiently, simplifying various administrative processes. It includes functionalities for tracking registrations, managing schedules, and communicating with participants, ensuring a smooth and organized camp experience.

Participants benefit from quick access to essential information such as event schedules and the ability to sign up for specific activities like workshops. The user-friendly interface ensures that participants can easily navigate the app and stay informed about all camp-related activities.

For the Winter 2024 camp, the application has been updated with a new visual identity and theme to match the winter season. Additionally, several bug fixes have been implemented to enhance the app's stability and performance. New features have also been added, including improved notifications, enhanced user profiles, and a more interactive schedule.

The application was developed using web technologies to create a Progressive Web App (PWA), ensuring accessibility across different devices and platforms. The development process included detailed planning and implementation of both frontend and backend components, with a focus on creating a seamless user experience.

Extensive end-to-end (E2E) testing was conducted to ensure the reliability and functionality of the app. The successful deployment and practical use of the application at Wrocław University of Technology camps have demonstrated its value as an indispensable tool for camp organization.`,
        images: ['oboz-studentow-pwr/zima-2024/post.jpg'],
        technologies: ['Vue', 'HTML5', 'JavaScript', 'CSS3', 'Python', 'Django', 'Docker', 'Firebase']
      },
      {
        title: "The Student Camp App",
        subtitle: "Summer 2023",
        icon: "oboz-studentow-pwr/lato-2023/logo.svg", iconClass: "app",
        shortDescription: "A web app for the 2023 summer student camp for WrocTech students.",
        longDescription: `The Student Camp App is a comprehensive tool designed to streamline the organization of student camps at Wrocław University of Technology. This application caters to two primary user groups: camp organizers and participants. 

For organizers, the app provides robust features to manage participant data efficiently, simplifying various administrative processes. It includes functionalities for tracking registrations, managing schedules, and communicating with participants, ensuring a smooth and organized camp experience.

Participants benefit from quick access to essential information such as event schedules and the ability to sign up for specific activities like workshops. The user-friendly interface ensures that participants can easily navigate the app and stay informed about all camp-related activities.

The application was developed using web technologies to create a Progressive Web App (PWA), ensuring accessibility across different devices and platforms. The development process included detailed planning and implementation of both frontend and backend components, with a focus on creating a seamless user experience.

Extensive end-to-end (E2E) testing was conducted to ensure the reliability and functionality of the app. The successful deployment and practical use of the application at Wrocław University of Technology camps have demonstrated its value as an indispensable tool for camp organization.`,
        images: ['oboz-studentow-pwr/lato-2023/post.jpg'],
        technologies: ['Vue', 'HTML5', 'JavaScript', 'CSS3', 'Python', 'Django', 'Docker', 'Firebase']
      },

      {
        title: "Autonomous beverage dispenser", icon: "automatyk/logo.jpg", iconClass: "",
        shortDescription: "A robot that uses a vision system to locate and fill cups with beverages.",
        longDescription: `The Autonomous Beverage Dispenser is a remarkable student project developed as part of the SNS Automatyk science club at Wrocław University of Science and Technology. As the team leader, I guided the development of this innovative robot designed to automatically pour beverages such as water or juice into cups, utilizing a vision system for precise cup detection and positioning.

Key Features:
- <b>Vision System</b>: The dispenser uses a wide-angle camera and a trained neural network to detect red cups placed within the dispensing area. The system captures an image, crops it, and analyzes it to identify the cup positions with 99% accuracy.
- <b>Control System</b>: The control system, based on stepper motors, Arduino, and Klipper3D software, calculates the coordinates of the cups and moves the dispenser to the nearest cup to pour the beverage for a specified duration.
- <b>Efficiency</b>: After pouring, the dispenser performs quick movements to shake off any remaining drops from the nozzle before moving to the next cup or returning to the start position.

Achievements:
- 2nd place for the best booth promoting student activity during DAS 2024.
- Finalist in the 10th edition of the Student Construction Competition (KoKos) in the Smart Robots category.

This project exemplifies the combination of creativity, teamwork, and technological innovation, demonstrating the potential of student-led initiatives.`,
        customHtml: `
<iframe id="ytplayer" type="text/html" width="100%" height="100%" style="aspect-ratio: 16 / 9;"
  src="https://www.youtube.com/embed/lKksrWtldNg?si=2vJPvVkhB6StjiuM"
  frameborder="0"/>`,
        images: ['automatyk/nalewak-warszawa.jpeg'],
        technologies: ['Fusion360', '3D Printing', 'Python'],
        links: [{
          "name": "Repository",
          "url": "https://github.com/SNS-Automatyk/Nalewak"
        }]
      },

      {
        title: "Process Line Control Panel", icon: "automatyk/logo.jpg",
        shortDescription: "A control panel for a process line created by the student scientific association \"Automatyk\"",
        longDescription: "Introducing the Vue.js-powered control panel for a Process Line by \"Automatyk,\" the student scientific association. The user-friendly interface empowers operators to efficiently manage and monitor process line operations. With real-time data visualization, customization options, and seamless integration, our control panel enhances productivity and optimizes performance.",
        images: ['automatyk/panel.png'],
        technologies: ['Vue', 'HTML5', 'JavaScript', 'CSS3'],
        links: [{
          "name": "Repository",
          "url": "https://github.com/SNS-Automatyk/Panel-Sterowania-Linia-Procesowa"
        }]
      },

      {
        title: "LO1+ App",
        shortDescription: "The LO1+ mobile app was designed for students at LO1 school and provided access to important information about their school life",
        summary: 'The LO1+ app was a user-friendly mobile resource for students at LO1 school, providing access to important information and tools for academic success. It was available on iOS and Android platforms and featured a range of resources including a calendar of events, class schedules, and grades. It also provided real-time updates and notifications to ensure students had access to the most up-to-date information. The app was a valuable resource for students, helping them succeed in their academic pursuits.',
        longDescription: `As the founder the LO1+ app, I was responsible for creating and maintaining an intuitive and user-friendly mobile application that helped students of LO1 school access all necessary information regarding their school life. The app was available on both iOS and Android platforms, and featured a range of useful tools and resources for students, including a calendar of events, class schedules, grades, and more.

One of the key features of the LO1+ app was its ability to provide real-time updates and notifications to students, ensuring that they always had access to the most up-to-date information.

Overall, the LO1+ app was a valuable resource for students at LO1 school, providing them with everything they needed to succeed in their academic pursuits. As a developer on the team, I was proud to contribute to the creation of this useful and user-friendly tool.`,
        icon: "lo1+/lo1+_logo.svg", iconClass: "app shadow", images: ["lo1+/home.png"], technologies: ['Swift', 'Python', 'Flask', 'PHP', 'AdobeXD', 'Kotlin']
      },

      {
        title: "Smart Plant Pot", icon: "", iconClass: "",
        shortDescription: "A smart plant pot that monitors the soil moisture and automatically notifies the user when watering is needed.",
        summary: "",
        longDescription: `As part of the project, a comprehensive system was created to monitor soil moisture in a plant pot. To enable accurate and continuous measurements, a microcontroller was used to read data from the moisture sensor installed in the pot. This allows users to track the moisture level in their plants in real-time and receive appropriate notifications through Facebook Messenger Bot in case of low moisture.

An important feature of the system is the ability to store the history of moisture levels, enabling users to analyze long-term trends and adjust watering accordingly. This data can also be used for research purposes, such as studying the impact of weather conditions on soil moisture.

The Facebook Messenger Bot, used to send notifications about the plant's watering needs, was implemented to provide users with a convenient and easy way to stay informed about the status of their plants. With this bot, users can be assured that they will always be up to date with their plant's needs.

In this way, the system for monitoring soil moisture in a plant pot, using a microcontroller, sensor, and notifications through Facebook Messenger Bot, becomes a complete and functional solution, enabling users to conveniently and effectively care for their plants.`,
        images: ['smart-plant-pot/home.png', 'smart-plant-pot/bot.png', 'smart-plant-pot/plot.png'],
        technologies: ['ESP8266', 'Python', 'Django', 'MySQL', 'HTML5', 'JavaScript', 'CSS3', 'OpenAI'],
        links: [{
          "name": "Repository",
          "url": "https://github.com/MarvinRucinski/smart_plant_pot"
        }]

      },

      {
        title: "Line follower robot", icon: "", iconClass: "",
        shortDescription: "A line follower robot. Whats the trick? It uses no microcontrollers or any other programmable components. It's based on a simple circuit with transistors and resistors.",
        summary: "",
        longDescription: `Introducing our remarkable line follower robot, which defies conventional expectations by operating without microcontrollers or any other programmable components. This ingeniously designed robot relies solely on a simple circuit consisting of transistors and resistors to navigate its path.

The secret behind this impressive creation lies in the clever implementation of analog circuitry. By utilizing transistors and resistors, the line follower robot can detect and respond to changes in the surface it traverses. As the robot encounters lines or contrasts in color, the circuitry interprets these variations and directs the robot's movements accordingly.

This minimalist approach showcases the power of analog electronics and highlights the ingenuity of our design. By leveraging the inherent properties of transistors and resistors, we have crafted a robot capable of following lines and navigating complex paths with remarkable precision.

The absence of microcontrollers and programmable components adds a unique charm to this line follower robot. Its simplicity not only makes it an accessible project for enthusiasts and beginners but also demonstrates the elegance of analog circuitry in solving real-world challenges.

With our line follower robot, users can explore the fundamentals of robotics and gain a deeper understanding of analog electronics. It serves as a valuable educational tool and a testament to the endless possibilities of creative engineering.

Discover the beauty of simplicity and witness the fascinating capabilities of our transistor and transistor-based line follower robot. Experience the joy of watching it effortlessly follow lines and embrace the elegance of analog circuitry in this remarkable innovation.`,
        images: ['line-follower/line-follower.png'],
        technologies: ['Fusion360', '3D Printing']
      },

      // {title:"",icon:"",iconClass:"",
      // shortDescription: "", 
      // summary:"",
      // longDescription: ``,
      // images: [],
      // technologies: []
      // },

      {
        title: "Duties", icon: "sienkiewicza/114.png",
        shortDescription: "A web app that allows roommates to track and assign cleaning duties.",
        summary: "This app allows users to create and track a list of tasks that need to be completed. It sends reminders via email and chatbot to encourage task completion. It also uses AI to generate humorous images and messages to motivate others to clean the apartment. Additionally, the app includes a page dedicated to displaying statistics and charts about how roommates are contributing to cleaning efforts.",
        longDescription: `This app is a comprehensive solution for roommates who want to stay organized and on top of their cleaning duties. With a simple and user-friendly interface, users can easily create a list of tasks that need to be completed around the apartment, assign those tasks to specific roommates, and track progress.

We understand that it can be difficult to remember everything that needs to be done, so we also offer reminders via email and chatbot to help keep you on track. And if you need a little extra motivation, we even have a feature that uses the OpenAI API to generate humorous images and messages to encourage you and your roommates to get cleaning.

But it's not just about getting the work done – we also want to make it easy for you to see how everyone is contributing to the cleaning efforts. That's why we have a dedicated page for displaying statistics and charts about who has completed the most tasks and how much progress has been made overall. This allows roommates to see who is pulling their weight and where there may be room for improvement.

With our app, staying organized and keeping your apartment clean has never been easier. It's the perfect tool for anyone looking to live in a harmonious and well-maintained shared living space.`,
        images: ['sienkiewicza/dyzury/dyzury-page1.png', 'sienkiewicza/dyzury/dyzury-page2.png'],
        technologies: ['PHP', 'MySQL', 'HTML5', 'JavaScript', 'CSS3', 'Python', 'ESP8266', 'ESPHome', 'OpenAI']
      },



      {
        title: "Roommate Rewards", icon: "sienkiewicza/114.png",
        shortDescription: '"Roomie Rewards" is an app designed to incentivize good behavior among roommates.',
        summary: 'It assigns points for contributions to maintaining a clean and organized shared living space, and integrates with the Duties app to distribute tasks fairly and reduce the burden on roommates with the most points. It is a valuable tool for promoting good behavior and creating a more efficient shared living space.',
        longDescription: `The app assigns points to roommates based on their contributions to maintaining a clean and organized shared living space. Good deeds such as emptying the dishwasher or washing a pan after another roommate are recognized and rewarded with points.

In addition, "Roomie Rewards" integrates with the Duties app to help distribute tasks fairly and reduce the burden on roommates who have accrued the most points. This helps to ensure that everyone is pulling their weight and contributing to a harmonious living environment.

Overall, "Roomie Rewards" is a valuable tool for roommates looking to promote good behavior and create a more organized and efficient shared living space.`,
        images: ['sienkiewicza/roommate-rewards/rr-kitchen.png'],
        technologies: ['Python', 'Django', 'MySQL', 'HTML5', 'CSS3']
      },




      {
        title: "My Homebase", icon: "sienkiewicza/114.png",
        shortDescription: "A web app that serves as a central hub for roommates to access up-to-date information.",
        summary: "The app is a comprehensive tool for roommates to stay organized and connected. It provides a range of features including a schedule of classes, cleaning duty schedule, real-time weather and air quality updates, a shared shopping list, shared expense tracking, and more. The app is designed to be a central hub for roommates to access important information and stay organized.",

        longDescription: `The app is a comprehensive tool for roommates to stay organized and connected. It provides a range of features to help you stay on top of your daily tasks and responsibilities. Some of the key functions of the app include:

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
        images: ['sienkiewicza/panel/panel-1.png', 'sienkiewicza/panel/panel-2.png'],
        technologies: ['Python', 'Django', 'MySQL', 'React', 'HTML5', 'JavaScript', 'CSS3', 'Figma']
      },



      {
        title: "WiFi Tracker", icon: "sienkiewicza/114.png",
        shortDescription: "A WiFi presence system that tracks who is currently connected to the network and at home.",
        summary: "This project is a WiFi presence system that tracks who is currently connected to the network and at home. It assigns static IPs to devices using their MAC addresses and updates each user's connection status on a web app. It improves communication and coordination within a household or workplace without requiring any additional setup or configuration from users.",
        longDescription: `The system I have designed is a convenient and efficient way to track who is currently connected to a WiFi network and, therefore, who is currently at home. To do this, we assign each user's device a static IP in the router's settings using the device's MAC (Media Access Control) address. The system does not require any additional setup or configuration on the user's devices.

The system constantly scans the WiFi network for connected devices and compares their IP addresses to a list of registered users. It then updates each user's connection status on a web app, which displays a list of all users and their current status (e.g., "Online" or "Offline").

Overall, this system is a valuable addition to any home or workplace because it provides a quick and easy way to track the presence of individuals and stay connected with others. It is a reliable and user-friendly tool that can greatly improve communication and coordination within a household or workplace without requiring any additional setup or configuration from users.`,
        images: ['sienkiewicza/tracker.png'],
        technologies: ['ESP8266', 'MicroPython', 'Python', 'Django']
      },



      {
        title: "Apartment Chatbot", icon: "sienkiewicza/114.png",
        shortDescription: "A chatbot that helps roommates stay organized and on top of their cleaning duties.",
        summary: "The Apartment Chatbot is a custom tool designed to help roommates stay organized and on top of their cleaning duties. It utilizes the advanced OpenAI API to understand and respond to natural language inputs, making it easy to communicate with and use. The chatbot's intuitive interface and advanced technology make it an invaluable resource for maintaining a clean and orderly living space, helping to make the lives of roommates easier and more efficient.",
        longDescription: `Welcome to the Apartment Chatbot, a custom tool designed to help roommates stay organized and on top of their cleaning duties. Maintaining a clean and orderly living space is important for creating a harmonious living environment, and the Apartment Chatbot is here to make the task of keeping on top of cleaning duties easier for you and your roommates.

Powered by the advanced OpenAI API, the Apartment Chatbot is able to understand and respond to natural language inputs. This means that you can simply type or speak your request to the chatbot, and it will do its best to assist you. Whether you need to schedule a cleaning day, divide up tasks, or remind your roommates of their duties, the Apartment Chatbot is here to help.

The interface of the Apartment Chatbot is intuitive and user-friendly, making it easy to use even for those who may not be tech-savvy. With its advanced technology, the chatbot is able to understand and respond to a wide range of requests and commands, ensuring that you and your roommates have all the information and support you need to keep your apartment clean and organized.

Overall, the Apartment Chatbot is a powerful and valuable tool for maintaining a clean and orderly living space. Its advanced technology and intuitive interface make it an invaluable resource for you and your roommates, helping to make your lives easier and more efficient. So why wait? Start using the Apartment Chatbot today, and experience the benefits of a clean and organized apartment for yourself!`,
        images: ['sienkiewicza/bot/sienkiewicza-bot-mockup.png'],
        technologies: ['Python', 'OpenAI']
      },

      {
        title: "This portfolio",
        shortDescription: "A web application created using Vue.js to showcase my projects and skills.",
        summary: `This portfolio is a web application created using Vue.js, with a focus on responsive design to ensure an optimal user experience. It contains descriptions, photos, and the technologies used in each project, to give users an overview of my capabilities and skills. It is a useful tool for showcasing my work and demonstrating my experience to potential employers or clients.`,
        longDescription: `I built a web application using Vue.js as the front-end framework to serve as a collection of my various projects. The portfolio includes descriptions, photos, and the technologies used in each project, allowing users to easily browse through my work and get a sense of my capabilities.

To ensure an optimal user experience, I implemented responsive design to make sure the portfolio looks great on a variety of devices. I also dedicated time to prototyping and testing different design approaches to ensure that the portfolio was easy to navigate.

Through this project, I was able to showcase my work and demonstrate my skills and experience to potential employers or clients. It serves as a useful tool for highlighting my capabilities and expertise.`,
        technologies: ['Vue']
      },



      {
        title: "LED Piano", icon: "led-piano/piano-top-view-svgrepo-com.svg",
        //Write a description of the LED Piano project, piano: modified Yamaha CLP-745, controller: ESP8266, 3D printed parts are used
        longDescription: `The LED Piano is a one-of-a-kind musical instrument that combines the traditional elements of a digital piano with the modern technology of an ESP8266 microcontroller and LED lights. By modifying a Yamaha CLP-745 digital piano and adding custom 3D-printed parts, I was able to transform the piano into a visually stunning and interactive instrument. The ESP8266 serves as the "brain" of the project, receiving MIDI signals from the piano and communicating with a script that displays the corresponding notes on the LED strip.

Not only is the LED Piano a fun and innovative way to play music, but it also offers an engaging and interactive learning experience for those interested in music theory and sheet music. By connecting an iPad to the piano, users can see which notes need to be played on the keyboard in real-time, making it a useful tool for beginners looking to learn how to read sheet music. Overall, the LED Piano is a unique and creative way to play and learn about music.`,
        //rewrite the above longDescription but make it longer
        shortDescription: "A unique musical instrument that I created to display the notes being played on an digital LED strip.",
        //rewrite a short summary of the LED Piano based on the longDescription above
        summary: "The LED Piano is a modified digital piano that combines traditional music-making with modern technology. I created it by modifying a Yamaha CLP-745 digital piano and adding custom 3D-printed parts, as well as an ESP8266 microcontroller and LED lights. The microcontroller receives MIDI signals from the piano and communicates with a script that displays the corresponding notes on the LED strip, allowing the player to see the music they are creating in a visually stunning way. The LED Piano can be used for creative musical compositions and as a tool for learning sheet music, making it a unique and innovative way to play and learn about music.",
        images: ['led-piano/led-piano-insides.jpg'],
        customHtml: `
<iframe id="ytplayer" type="text/html" width="100%" height="100%" style="aspect-ratio: 16 / 9;"
  src="https://youtube.com/embed/pJ7fCkMSCVU?autoplay=1"
  frameborder="0"/>`,
        technologies: ['ESP8266', 'C++', "Fusion360", "3D Printing"],
        links: [{
          "name": "Repository",
          "url": "https://github.com/MarvinRucinski/PianoLED"
        }]
      },



      {
        title: "SP2 Chatbot",
        shortDescription: "A chatbot that helps students at SP2 school stay organized and up to date with their school life.",
        // SP2 chatbot was a a messnger bot helping students at SP2 with ther daily school life
        //it provided access to important information about their school life like grades, lesson plan and more
        //Write a long description of the sp2 chatbot
        summary: "The SP2 Chatbot was a custom tool designed to help students at SP2 school stay organized and up to date with their school life. It was available on Facebook Messenger and provided access to important information about their school life, including grades, lesson plans, and more. Powered by the advanced ChatFuel API, the chatbot's intuitive interface and advanced technology made it an invaluable resource for students, helping them to stay on top of their school life and succeed in their academic pursuits.",
        //write a long description of the sp2 chatbot
        longDescription: `The SP2 Chatbot was a custom tool designed to help students at SP2 school stay organized and up to date with their school life. It was available on Facebook Messenger and provided access to important information about their school life, including grades, lesson plans, and more. Powered by the advanced ChatFuel API, the chatbot's intuitive interface and advanced technology made it an invaluable resource for students, helping them to stay on top of their school life and succeed in their academic pursuits.

As the founder of the SP2 Chatbot, I was responsible for creating and maintaining an intuitive and user-friendly chatbot that helped students of SP2 school access all necessary information regarding their school life. The chatbot was available on Facebook Messenger, and featured a range of useful tools and resources for students, including grades, lesson plans, and more.

One of the key features of the SP2 Chatbot was its ability to provide real-time updates and notifications to students, ensuring that they always had access to the most up-to-date information.

Overall, the SP2 Chatbot was a valuable resource for students at SP2 school, providing them with everything they needed to succeed in their academic pursuits. As a developer on the team, I was proud to contribute to the creation of this useful and user-friendly tool.`,
        technologies: ['ChatFuel', 'Python', 'PHP'],
        images: ['bot-sp2/bot mock-up.png']
      },


      // TODO: add intro video
      {
        title: "Eurovision School Contest", icon: "eurovision/logo.png", iconClass: "",
        //write a short description of the Eurovision School Contest
        shortDescription: "A fun and exciting musical competition for students at my junior high school",
        //write a summary of the Eurovision School Contest
        summary: "The Eurovision School Contest was a fun and exciting musical competition for students at my junior high school. It was a great opportunity for me to use my skills to create something that was enjoyed by so many people, and I am proud of the work that I did to make the Eurovision School Contest a success.",
        //write a long description of the Eurovision School Contest
        longDescription: `As one of the main organizers of the Eurovision School Contest at my junior high school, I had a number of responsibilities that were crucial to the success of the event. Not only was I responsible for creating the graphical interface that was displayed on the projector during the final gala, but I also took charge of creating a system for booking tickets to the event and live streaming the entire competition. In addition, I created a system to cross reference the votes with the list of students in each class to prevent any instances of self-voting.

One of the key features of the graphical interface that I created was the inclusion of animations, which added an extra layer of excitement and engagement for the audience. In addition to this, I also incorporated the music videos that were created by the participating groups of students, as well as a live scoreboard that kept track of the votes and scores throughout the competition.

To make the gala even more interactive, I also developed a system for voting for the music videos using the SP2 chatbot. This allowed audience members to easily cast their votes for their favorite videos in real time, and contributed to the overall excitement and energy of the event.

Overall, the final gala of the Eurovision School Contest was a huge success, with the audience thoroughly enjoying the music videos and the interactive voting system. It was a truly memorable experience for me to be able to use my skills and creativity to create something that was so well received by so many people, and I am proud of the work that I did to make the event such a success.`,
        images: ['eurovision/eurovision-fb.jpg', 'eurovision/eurovision-tickets.jpg'],
        technologies: ['HTML5', 'JavaScript', 'CSS3', 'Python', 'PHP']
      },



      {
        title: "Take&Tie", icon: "take-and-tie/logo.svg",
        //write a short description (one sentence) of the Take&Tie project
        shortDescription: "A student company that I founded with my friends. We created shoelaces with custom designs and sold them online.",
        //write a summary of the Take&Tie project
        summary: "Take&Tie was a student company that I founded with my friends. We created shoelaces with custom designs and sold them online. Among other things, I was responsible for creating the website and the online store.",
        longDescription: `Take&Tie was a student company that I founded with my friends. We created shoelaces with custom designs and sold them online. Among other things, I was responsible for creating the website and the online store.

The Take&Tie company won the Grad Prix "Produkcik 2019" competition, which was a competition for the best student company in the Poland. The company was also featured in the "Tele express", and I was interviewed by many newspapaers and radio stations.

The website was created using the PrestaShop open source e-commerce solution. It featured a user-friendly interface and an intuitive shopping cart. The website also included a feature that allowed customers to design their own shoelaces as a suggestion for us for new designs.

Overall, the website and the online store were a great success, and I am proud of the work that I did to create them. The website and the online store were a great success, and I am proud of the work that I did to create them.`,
        images: ['take-and-tie/prezentacja/prezentacja.001.jpeg', 'take-and-tie/prezentacja/prezentacja.004.jpeg', 'take-and-tie/prezentacja/prezentacja.005.jpeg', 'take-and-tie/prezentacja/prezentacja.006.jpeg'],
        technologies: ['PrestaShop', 'PHP', 'HTML5', 'CSS3']
      },

      {
        title: "Escape Room Booking App",
        //write a short description (one sentence) of the Escape Room Booking App
        shortDescription: "A booking app that was used to book the Escape Room that I created in my school.",
        summary: "The Escape Room was a part of the Take&Tie company. It was a real-life escape room that we created in our school to geather money for out first batch of shoelaces. I was responsible for designing the whole escape room and creating a booking app that was used to book the escape room.",
        longDescription: `The Escape Room was a part of the Take&Tie company. It was a real-life escape room that we created in our school to geather money for out first batch of shoelaces. I was responsible for designing the whole escape room and creating a booking app that was used to book the escape room.

The booking app was created using the PHP programming language. It featured a user-friendly interface and an intuitive booking system. The app was used to book the escape room and to manage the bookings. The app was also used to manage the escape room itself, including sending notifications when the final puzzle was completed. The app was a great success, and I am proud of the work that I did to create it.`,

        technologies: ['PHP', 'HTML5', 'JavaScript', 'CSS3'],
        images: ['escape-room/escape-room-1.png', 'escape-room/escape-room-2.png', 'escape-room/escape-room-3.png']
      },


      {
        title: "Quick Rotate", icon: "display-rotator/logo.png", iconClass: "inset",
        shortDescription: "A macOS application that enables users to easily rotate their display",
        summary: "The app was created to address the inconvenience of constantly navigating to the system preferences to change display settings. It is intended to be a useful tool for designers, developers, and anyone who values convenience.",
        longDescription: `I developed a simple macOS application that allows you to quickly and easily rotate your displayed content without the need to navigate to the system preferences. As someone who uses multiple displays on a regular basis, I found myself constantly going into the system preferences to change the orientation of my displays. It was frustrating and time-consuming, and I knew there had to be a better way. That's why I decided to create this app – to make it easier for me and others to quickly adjust the displays to our desired settings without having to go through the system preferences every time.

In addition to the ability to rotate displays, the app also allows you to arrange your displays into predefined positions. This is especially useful if you have multiple displays and want to quickly snap them into place without having to manually drag and resize them. Whether you're a designer, developer, or just someone who values convenience, this app is sure to come in handy. It has already been a valuable addition to my own workflow, and I am excited to share it with others in my portfolio.`,
        images: ['display-rotator/rotator-ss.png'],
        technologies: ['Swift', 'MacOS']
      },


      {
        title: "AquaTemp App", icon: "swimming-pool/logo.png", iconClass: "app",
        shortDescription: "This iOS application allows for real-time monitoring of the temperature in our swimming pool.",
        summary: "AquaMonitor is a user-friendly iOS app that provides real-time temperature monitoring for our swimming pool. With its straightforward interface AquaMonitor makes it quick and easy to keep track of the temperature of your pool at all times.",
        longDescription: "AquaMonitor is a user-friendly iOS app that provides real-time temperature monitoring for our swimming pool. With its straightforward interface AquaMonitor makes it quick and easy to keep track of the temperature of your pool at all times.",
        images: ['swimming-pool/swimming-pool-mockup.jpg'],
        technologies: ['Swift', 'iOS']
      },


      {
        title: "Spaceship", icon: "spaceship/spaceship miniaturka 50.png",
        shortDescription: "A game, where the player must avoid collision with space rocks.",
        summary: `I created a spaceship game that has been developed and refined over the years using various programming languages, including Scratch, Python, HTML and JavaScript, and Swift. In addition to developing the game, I have also worked on this in the Take&Tie company creating shoelaces featuring the spaceship from the game.`,
        longDescription: `My journey with this game began with Scratch, a visual programming language that allowed me to build a basic version of the game. From there, I continued to learn and expand my skills, eventually developing the game in Python, HTML and JavaScript, and Swift.

The objective of the game is simple yet compelling: players must navigate their spaceship through the vast expanse of outer space, avoiding collisions with space rocks as they go. The controls are intuitive and responsive, allowing players to deftly maneuver their spaceship to avoid danger and emerge victorious.

In addition to developing the game itself, I have also had the opportunity to work on a project in the Take&Tie Student company, in which we created shoelaces featuring the beloved spaceship from the game. This project allowed me to not only showcase my game development skills, but also my ability to think creatively and bring my creations to life in new and exciting ways.

Overall, the spaceship game is a testament to my passion for game development and my determination to continuously learn and improve my skills. I am excited to see where my journey in this field takes me next.`,
        images: ['spaceship/spaceship-mockup.jpg', 'spaceship/spaceship-shoelaces.png'],
        technologies: ['HTML5', 'JavaScript', 'CSS3']
      },


      {
        title: "Cubic Snake",
        shortDescription: "A cubic snake game, where players control a snake as it navigates a 3D maze on a cube.",
        summary: "The objective is to avoid walls and collect points by eating food. The snake can move between the different sides of the cube, adding an extra level of challenge and strategy to the gameplay.",
        longDescription: `Using the arrow keys, players can control the snake's movement as it weaves its way through the 3D maze. The unique aspect of this game is that the snake can move between the different sides of the cube, allowing for a truly immersive and challenging gaming experience.

As the snake moves through the maze, it must avoid crashing into walls, as this will result in game over. However, the snake can also collect points by eating food items scattered throughout the maze. As the snake eats, it will grow longer, adding an additional layer of strategy to the game as players must carefully navigate the increasingly lengthy snake through the tight confines of the cube maze.

Overall, my cubic snake game offers a fresh take on the classic snake game, adding an exciting twist with the addition of the 3D cube maze. Players will have to use quick reflexes and strategic thinking to successfully navigate the snake through the maze and emerge victorious.`,
        technologies: ['Python', 'PyGame'],
        images: ['snake/snake-1.png', 'snake/snake-2.png']
      },


      {
        title: "Interconnected WLED Lamps",
        shortDescription: "3D-printed WLED lamps capable of intercommunication and control.",
        summary: `I am proud to showcase a project featuring interconnected WLED lamps. These lamps were created using a 3D printer, an ESP8266 microcontroller, and a digital light strip. I modified the WLED software to enable the lamps to send and trigger notifications to each other, allowing for a new level of connectivity and interactivity.`,
        longDescription: `I am proud to showcase a project featuring interconnected WLED lamps. These lamps were created using a 3D printer, an ESP8266 microcontroller, and a digital light strip. I modified the WLED software to enable the lamps to send and trigger notifications to each other, allowing for a new level of connectivity and interactivity.

One of the lamps was a special gift for my girlfriend, and we have had a lot of fun using the lamps to stay connected in a unique and creative way. Each time one of us triggers a notification on our lamp, the other lamp lights up and alerts us to the notification. It has been a fun and enjoyable way to stay connected, even when we are not physically together.

This project demonstrates my ability to work with hardware and software, as well as my creativity in finding new and innovative ways to use technology. The use of the 3D printer allowed me to create custom-designed lamps that are not only functional, but also visually appealing. The incorporation of the ESP8266 microcontroller and the modification of the WLED software required a strong understanding of both hardware and software, and I am proud of the end result.

Overall, this project is a great example of my skills and capabilities as a maker and inventor, and I am excited to share it with you in my portfolio.`,
        images: ['wled/wled-cube.jpg'],
        technologies: ['WLED', 'C++', "Fusion360", "3D Printing"]
      },

      {
        title: "MatMar Games", icon: "matmar/logo.jpg", iconClass: "",
        shortDescription: "A game development company that I founded with my friend.",
        summary: "",
        longDescription: `Welcome to MatMar, an innovative game development company that began its journey in junior high school. Founded by Marvin and Mateusz, we discovered our passion for gaming and technology at a young age, leading us to embark on an incredible adventure together.

At MatMar, we specialize in creating captivating games using Scratch, a visual programming language that allowed us to bring our imaginations to life. Through countless hours of dedication and experimentation, we honed our skills in game design, storytelling, and coding to deliver unique gaming experiences.`,
        images: ['matmar/webss.png'],
        technologies: [],
        links: [{
          "name": "Website",
          "url": "https://matmar.mystrikingly.com"
        }]
      },


    ]


  ]
}
</script>
