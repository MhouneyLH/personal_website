const Skills = Object.freeze({
  CPP: "C++",
  QT: "Qt",
  C: "C",
  CSHARP: "C#",
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
  ASPNET_CORE: "ASP.NET",
  SCALA: "Scala",
  TERRAFORM: "Terraform",
  AWS: "AWS",
  TYPESCRIPT: "Typescript",
  POSTGRE_SQL: "PostgreSQL",
  DOMAIN_DRIVEN_DESIGN: "Domain Driven Design",
  SOFTWARE_ARCHITECTURE: "Software Architecture",
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
      Skills.DOCKER,
      Skills.LINUX,
      Skills.MQTT,
      Skills.SOFTWARE_ARCHITECTURE,
      Skills.DOMAIN_DRIVEN_DESIGN,
      Skills.AWS,
      Skills.CICD,
      Skills.TERRAFORM,
      Skills.ASPNET_CORE,
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
      Skills.DOCKER,
      Skills.LINUX,
      Skills.KUBERNETES,
      Skills.CICD,
      Skills.TYPESCRIPT,
      Skills.TERRAFORM,
      Skills.AWS,
      Skills.SOFTWARE_ARCHITECTURE,
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
  },
  {
    title: "KCodeFlow",
  },
  {
    title: "Distributed FileConverter",
  },
  {
    title: 'App "Gasta"',
  },
  {
    title: 'App "Deskify"',
  },
  {
    title: 'App "Take Me Home"',
  },
  { title: 'App "Abfahrtskontrolle"' },
];
