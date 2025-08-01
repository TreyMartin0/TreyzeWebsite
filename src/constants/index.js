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
    name: 'Backend Developer',
    imgPath: '/images/logos/node.png',
  },
  {
    name: 'Interactive Developer',
    imgPath: '/images/logos/three.png',
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

const testimonials = [
  {
    name: 'Esther Howard',
    mentions: '@estherhoward',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    imgPath: '/images/client1.png',
  },
  {
    name: 'Wade Warren',
    mentions: '@wadewarren',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    imgPath: '/images/client3.png',
  },
  {
    name: 'Guy Hawkins',
    mentions: '@guyhawkins',
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: '/images/client2.png',
  },
  {
    name: 'Marvin McKinney',
    mentions: '@marvinmckinney',
    review:
      'Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.',
    imgPath: '/images/client5.png',
  },
  {
    name: 'Floyd Miles',
    mentions: '@floydmiles',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!',
    imgPath: '/images/client4.png',
  },
  {
    name: 'Albert Flores',
    mentions: '@albertflores',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.',
    imgPath: '/images/client6.png',
  },
];

const socialImgs = [
  {
    name: 'insta',
    imgPath: '/images/insta.png',
  },
  {
    name: 'fb',
    imgPath: '/images/fb.png',
  },
  {
    name: 'x',
    imgPath: '/images/x.png',
  },
  {
    name: 'linkedin',
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
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
