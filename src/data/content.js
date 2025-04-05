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
    ],
    link: "https://edusim-engineering.de/",
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
