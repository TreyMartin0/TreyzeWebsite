const words = [
  { text: 'Builds', imgPath: '/images/ideas.svg' },
  { text: 'Designs', imgPath: '/images/designs.svg' },
  { text: 'Codes', imgPath: '/images/code.svg' },
  { text: 'Builds', imgPath: '/images/ideas.svg' },
  { text: 'Designs', imgPath: '/images/designs.svg' },
  { text: 'Codes', imgPath: '/images/code.svg' },
];

const navLinks = [
  {
    name: 'Work',
    link: '#work',
  },
  {
    name: 'Experience',
    link: '#experience',
  },
  {
    name: 'Skills',
    link: '#skills',
  },
  {
    name: 'Testimonials',
    link: '#testimonials',
  },
];

const counterItems = [
  { value: 4, suffix: '+', label: 'Years of Development Experience' },
  { value: 18, suffix: '+', label: 'Programming Technologies Used' },
  { value: 16, suffix: '+', label: 'Trailhead Badges' },
];

const logoIconsList = [
  {
    imgPath: '/images/logos/cal-poly-san-luis-obispo.png',
  },
  {
    imgPath: '/images/logos/Citynet_Logo.png',
  },
];

const abilities = [
  {
    imgPath: '/images/adaptation.png',
    title: 'Adaptability',
    desc: 'Quickly adjustings to new technologies, requirements, and evolving project needs.',
  },
  {
    imgPath: '/images/chat.png',
    title: 'Effective Communication',
    desc: 'Communicating business needs into a technical description for implementation.',
  },
  {
    imgPath: '/images/data-analytics.png',
    title: 'Analytical Skills',
    desc: 'Evaluating data, workflows, and system performance to optimize applications.',
  },
];

const techStackImgs = [
  {
    name: 'React Developer',
    imgPath: '/images/logos/react.png',
  },
  {
    name: 'Python Developer',
    imgPath: '/images/logos/python.svg',
  },
  {
    name: 'Salesforce Developer',
    imgPath: '/images/logos/SFimage.png',
  },
  {
    name: 'Apex Developer',
    imgPath: '/images/logos/apex-image.png',
  },
  {
    name: 'Project Manager',
    imgPath: '/images/logos/git.svg',
  },
];

const techStackIcons = [
  {
    name: 'React Developer',
    modelPath: '/models/react_logo-transformed.glb',
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: 'Python Developer',
    modelPath: '/models/python-transformed.glb',
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: 'Backend Developer',
    modelPath: '/models/node-transformed.glb',
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: 'Interactive Developer',
    modelPath: '/models/three.js-transformed.glb',
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: 'Project Manager',
    modelPath: '/models/git-svg-transformed.glb',
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    imgPath: '/images/logos/Citynet_Logo.png',
    title: 'Salesforce Developer Intern',
    date: 'June 2025 - Present',
    responsibilities: [
      'Integrated Citynet’s core legacy systems into Salesforce to streamline operations.',
      'Improved data access and support cross-functional reporting.',
      'Implemented Work-Relay to optimize GigOrder workflows, enhance installation documentation, and increase task visibility across teams.',
    ],
  },
  {
    imgPath: '/images/logos/cal-poly-san-luis-obispo.png',
    title: 'Instructional Student Assistant',
    date: 'September 2024 - June 2025',
    responsibilities: [
      'Provided students with tutoring in order to understand and learn the concepts of Systems Programming using the C programming language.',
      'Aided Cal Poly professor, Fahim Kahn and Paris Kalathas, with during his lab sections and hosted lectures in his absence.',
    ],
  },
];

const expLogos = [
  {
    name: 'logo1',
    imgPath: '/images/logo1.png',
  },
  {
    name: 'logo2',
    imgPath: '/images/logo2.png',
  },
  {
    name: 'logo3',
    imgPath: '/images/logo3.png',
  },
];

const socialImgs = [
  {
    name: 'insta',
    url: 'https://www.instagram.com/trey.martiin?igsh=MW9obmk4bDB2aGN6NQ%3D%3D&utm_source=qr',
    imgPath: '/images/insta.png',
  },
  {
    name: 'gh',
    url: 'https://github.com/TreyMartin0',
    imgPath: '/images/github-mark-white.png',
  },

  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/jam3s-m4rtin?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    imgPath: '/images/linkedin.png',
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
