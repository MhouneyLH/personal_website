const Skills = Object.freeze({
  CPP: "C++",
  QT: "Qt",
  C: "C",
  CSHARP: "C#",
  PYTHON: "Python",
  JAVA: "Java / Jakarta",
  QUARKUS: "Quarkus",
  DOCKER: "Docker",
  LINUX: "Linux",
  KUBERNETES: "Kubernetes",
  CICD: "CI/CD",
  FLUTTER: "Flutter",
  AKKA: "Akka",
  MQTT: "Mqtt",
  ARDUINO: "Arduino",
  RASPBERRY_PI: "Raspberry Pi",
  UNITY: "Unity",
  ASP_DOTNET: "ASP.NET",
  SCALA: "Scala",
  TERRAFORM: "Terraform",
  AWS: "AWS",
  TYPESCRIPT: "Typescript",
  POSTGRE_SQL: "PostgreSQL",
  RABBITMQ: "RabbitMQ",
  DOMAIN_DRIVEN_DESIGN: "Domain Driven Design",
  SOFTWARE_ARCHITECTURE: "Software Architecture",
  OPTIMIZATION_ALGORITHMS: "Optimization Algorithms",
  SOFTWARE_TESTING: "Software Testing",
  ESP32: "ESP32",
  XAMARIN: "Xamarin",
});

export const experiences = [
  {
    title: "M. Sc. in Software Engineering",
    company: "University of Applied Sciences Upper Austria - Hagenberg",
    startDate: "October 2024",
    endDate: "Present",
    description: "Attending lectures and seminars in the study program Software Engineering.",
    skills: [
      Skills.CPP,
      Skills.C,
      Skills.CSHARP,
      Skills.FLUTTER,
      Skills.SCALA,
      Skills.AKKA,
      Skills.JAVA,
      Skills.QUARKUS,
      Skills.PYTHON,
      Skills.DOCKER,
      Skills.LINUX,
      Skills.MQTT,
      Skills.SOFTWARE_ARCHITECTURE,
      Skills.DOMAIN_DRIVEN_DESIGN,
      Skills.AWS,
      Skills.CICD,
      Skills.TERRAFORM,
      Skills.ASP_DOTNET,
      Skills.SOFTWARE_TESTING,
    ],
    link: "https://fh-ooe.at/studienangebot/software-engineering-master",
  },
  {
    title: "Software Engineer and Co-Founder",
    company: "EduSim Engineering GbR",
    startDate: "July 2024",
    endDate: "Present",
    description:
      "Building educational software for fire fighting, rescue services and other businesses.",
    skills: [
      Skills.UNITY,
      Skills.CSHARP,
      Skills.DOMAIN_DRIVEN_DESIGN,
      Skills.POSTGRE_SQL,
      Skills.SOFTWARE_ARCHITECTURE,
      Skills.AWS,
      Skills.CICD,
      Skills.TERRAFORM,
      Skills.UNITY,
      Skills.SOFTWARE_TESTING,
    ],
    link: "https://edusim-engineering.de/",
  },
  {
    title: "B. Eng. in Software Engineering as dual student",
    company: "Cooperative University Gera-Eisenach",
    startDate: "October 2021",
    endDate: "September 2024",
    description: 'Attended lectures and seminars in the study program "Praktische Informatik".',
    skills: [
      Skills.CPP,
      Skills.C,
      Skills.FLUTTER,
      Skills.PYTHON,
      Skills.DOCKER,
      Skills.LINUX,
      Skills.KUBERNETES,
      Skills.CICD,
      Skills.TYPESCRIPT,
      Skills.TERRAFORM,
      Skills.AWS,
      Skills.SOFTWARE_ARCHITECTURE,
      Skills.SOFTWARE_TESTING,
    ],
    link: "https://www.dhge.de/DHGE/Studieninteressierte/Studieng-nge/Detail~Technik~Praktische-Informatik-Bachelor-of-Engineering~.html",
  },
  {
    title: "Dual student in Software Engineering",
    company: "LACOS GmbH",
    startDate: "October 2021",
    endDate: "September 2024",
    description: "",
    skills: [
      Skills.CPP,
      Skills.C,
      Skills.CSHARP,
      Skills.QT,
      Skills.DOCKER,
      Skills.LINUX,
      Skills.KUBERNETES,
      Skills.CICD,
      Skills.SOFTWARE_TESTING,
    ],
    link: "https://www.lacos.eu/",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/MhouneyLH",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/lucas-huenniger",
    icon: "linkedin",
  },
];

export const email = "lucas.huenniger02@gmail.com";
export const repositoryLink = "https://github.com/MhouneyLH/personal_website";

export const projects = [
  {
    title: "EduSim",
    description: "Educational software for fire fighting and rescue services.",
    image: "edusim.png",
    startDate: "2024",
    link: "https://edusim-engineering.de/",
    skills: [
      Skills.UNITY,
      Skills.CSHARP,
      Skills.DOMAIN_DRIVEN_DESIGN,
      Skills.POSTGRE_SQL,
      Skills.SOFTWARE_ARCHITECTURE,
      Skills.AWS,
      Skills.CICD,
      Skills.TERRAFORM,
    ],
  },
  {
    title: "Green2Smart",
    description:
      "A self retaining wall with plants for indoor and outdoor use. This projekt was developed in the [ScienceCamp 2024](https://www.allianz-thuering.de/vergangene-science-camps/) in the University of Applied Sciences Erfurt.",
    image: "green2smart.png",
    startDate: "2024",
    link: "https://github.com/MhouneyLH/green2smart",
    skills: [Skills.ARDUINO, Skills.MQTT, Skills.RASPBERRY_PI],
  },
  {
    title: "Rover Challenge",
    description:
      "A rover that can find the best path to a destination with the most amount of resources. This project was developed in the [ScienceCamp 2023](https://www.allianz-thuering.de/vergangene-science-camps/) in the University of Applied Sciences Ernst-Abbe Jena.",
    image: "rover.png",
    startDate: "2023",
    link: "https://github.com/MhouneyLH/robot_challenge",
    skills: [Skills.PYTHON, Skills.OPTIMIZATION_ALGORITHMS],
  },
  {
    title: "KCodeFlow",
    description:
      "A VSCode extension that tracks the amount of keys pressed with some fancy staistics.",
    image: "kcodeflow.png",
    startDate: "2023",
    link: "https://marketplace.visualstudio.com/items?itemName=mhouney.kcodeflow",
    skills: [Skills.TYPESCRIPT, Skills.SOFTWARE_TESTING],
  },
  {
    title: "Distributed FileConverter",
    description:
      "A hobby project to learn about Microservices and distributed systems. It is a file converter that can convert files from one format to another.",
    image: "fileconverter.png",
    startDate: "2023",
    link: "https://github.com/MhouneyLH/file_converter_microservices",
    skills: [
      Skills.PYTHON,
      Skills.DOCKER,
      Skills.KUBERNETES,
      Skills.CICD,
      Skills.AWS,
      Skills.SOFTWARE_ARCHITECTURE,
      Skills.SOFTWARE_TESTING,
      Skills.RABBITMQ,
    ],
  },
  {
    title: 'App "Gasta"',
    description:
      "An app built during the 5th semester of my dual study program with some friends from the university. Gasta is a coupon app that allows you to scan QR codes and get discounts / small benefits / ... in restaurants like you know it e. g. from McDonalds.",
    image: "gasta.png",
    startDate: "2023",
    link: "",
    skills: [
      Skills.FLUTTER,
      Skills.DOCKER,
      Skills.LINUX,
      Skills.CICD,
      Skills.POSTGRE_SQL,
      Skills.KUBERNETES,
    ],
  },
  {
    title: 'App "Deskify"',
    description:
      'An app built during the 4th semester of my dual study program with some friends from the university. Deskify helps you to higher or lower your height-adjustable desk from "Desktronic" with a simple app. In order to got this working, I had to reverse engineer the protocol of the desk, which you can find in this repository or in this forum discussion. This was my first ever project with Flutter! ❤️',
    image: "deskify.png",
    startDate: "2023",
    link: "https://github.com/MhouneyLH/deskify",
    skills: [Skills.FLUTTER, Skills.DOCKER, Skills.ESP32],
  },
  {
    title: 'App "Take Me Home"',
    description:
      'An app built during the 6th semester of my dual study program with some friends from the university. Take Me Home is a "DB Navigator" clone that allows you to find the fastest possible route to your destination from the Coopoerative University Gera-Eisenach.',
    image: "takemehome.png",
    startDate: "2024",
    link: "",
    skills: [Skills.FLUTTER, Skills.DOCKER, Skills.CICD],
  },
  {
    title: "Departure Controls App",
    description:
      "This was my first ever developed app. I built it back in 2021 before starting my dual study program. The app enables truck drivers to submit their departure controls easily from their mobile devices via E-Mail to the dispatching department.",
    image: "departurecontrols.png",
    startDate: "2021",
    link: "",
    skills: [Skills.XAMARIN, Skills.CSHARP],
  },
];
