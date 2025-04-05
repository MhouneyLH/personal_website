const Technologies = Object.freeze({
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
    title: "Dual student in Software Engineering",
    company: "LACOS GmbH",
    startDate: "October 2021",
    endDate: "September 2024",
    description: "",
    technologies: [
      Technologies.CPP,
      Technologies.C,
      Technologies.CSHARP,
      Technologies.QT,
      Technologies.DOCKER,
      Technologies.LINUX,
      Technologies.KUBERNETES,
      Technologies.CICD,
    ],
    link: "https://www.lacos.eu/",
  },
  {
    title: "Software Engineer and Co-Founder",
    company: "EduSim Engineering GbR",
    startDate: "July 2024",
    endDate: "Present",
    description:
      "Building educational software for fire fighting, rescue services and other businesses.",
    technologies: [
      Technologies.UNITY,
      Technologies.CSHARP,
      Technologies.DOMAIN_DRIVEN_DESIGN,
      Technologies.POSTGRE_SQL,
      Technologies.SOFTWARE_ARCHITECTURE,
      Technologies.AWS,
      Technologies.CICD,
      Technologies.TERRAFORM,
    ],
    link: "https://edusim-engineering.de/",
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
