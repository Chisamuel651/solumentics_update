const words = [
    { text: 'Ideas', imgPath: '/images/ideas.svg' },
    { text: 'Concepts', imgPath: '/images/concepts.svg' },
    { text: 'Solutions', imgPath: '/images/solutions.svg' },
    { text: 'Experiences', imgPath: '/images/experiences.svg' },
    { text: 'Strategies', imgPath: '/images/strategies.svg' },
    { text: 'Brands', imgPath: '/images/brands.svg' },
    { text: 'Platforms', imgPath: '/images/platforms.svg' },
    { text: 'Stories', imgPath: '/images/stories.svg' }
];

const counterItems = [
    { value: 4, suffix: "+", label: "Years of Experience" },
    { value: 20, suffix: "+", label: "Satisfied Clients" },
    { value: 22, suffix: "+", label: "Completed Projects" },
    { value: 89, suffix: "%", label: "Client Retention Rate" },
]

const navLinks = [
    {
        name: 'Work',
        link: '#work',
    },
    {
        name: 'Experience',
        link: '#exeprience',
    },
    {
        name: 'Skills',
        link: '#skills',
    },
    {
        name: 'Testimonials',
        link: '#testimonials',
    },
]

const logoIconsLists = [
    {
        imgPath: "/images/logos/logo-1.png",
    },
    {
        imgPath: "/images/logos/logo-2.png",
    },
    {
        imgPath: "/images/logos/logo-3.png",
    },
    {
        imgPath: "/images/logos/logo-4.png",
    },
]

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Quality Focus",
        desc: "We treat every project like it's our own, whether it's link building or full web development, we combine strategy with precision so your brand does not just show up, it stands out.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Reliable Communication",
        desc: "You won't be chasing updates. We keep you in the loop with clear progress reports, honest feedback, and no guesswork, just real results and clear direction.",
    },
    {
        imgPath: "/images/time.png",
        title: "On-Time Delivery",
        desc: "We run a tight workflow—tested systems, no fluff. From planning to execution, we deliver clean, optimized work that hits your deadlines and your goals.",
    },
]

const experienceCards = [
    {
        review: "He consistently brings creativity and technical skill to the team, playing a key role in improving frontend performance. His ability to adapt quickly to new challenges and work across different parts of a project makes him a valuable asset in delivering smooth and fast user experiences.",
        imgPath: "/images/exp-3.png",
        logoPath: "/images/c-logo-3.jpg",
        title: "Lead Dev - Fullstack Developer",
        date: "January 2025 - Present",
        location: "Remote, Stuttgart - Germany",
        responsibilities: [
            "Worked on client-facing web applications tailored to workflow automation and planning efficiency.",
            "Collaborated with design and backend teams to ship responsive, performance-optimized features.",
            "Delivered scalable front-end solutions that enhanced usability for real-world business use cases.",
          ],
      },
      {
        review: "Adaptable, fast, and reliable. Handled everything from AI tools to full game builds with zero hand-holding. Solid asset on any project.",
        imgPath: "/images/c-logo-2.jpg",
        logoPath: "/images/c-logo-2.jpg",
        title: "Full Stack Developer",
        date: "December 2023 - October 2024",
        location: "Remote, Hong-Kong",
        responsibilities: [
            "Built a 2D game from the ground up using Unity—handled everything from design logic to final implementation.",
            "Developed and fine-tuned LLM-based solutions tailored for real estate workflows, improving task automation and client interaction.",
            "Engineered serverless applications using AWS services, focusing on scalability, performance, and cost-efficiency.",
          ],
      },
      {
        review: "Showed real growth and dedication. Took on both teaching and client work with professionalism. Always eager to learn and quick to deliver.",
        imgPath: "/images/c-logo-1.jpg",
        logoPath: "/images/c-logo-1.jpg",
        title: "Junior Developer - Intern",
        date: "September 2021 - July 2023",
        location: "Onsite, Yaounde - Cameroon",
        responsibilities: [
            "Trained students in WordPress, HTML, and CSS—focusing on practical, real-world applications.",
            "Contributed to client projects, building and customizing websites to meet business needs.",
            "Grew rapidly by working across multiple tech stacks and collaborating closely with senior developers.",
        ],
    },
]

const techStackImgs = [
    {
      name: "React Developer",
      imgPath: "/images/logos/react.png",
    },
    {
      name: "Python Developer",
      imgPath: "/images/logos/python.svg",
    },
    {
      name: "Backend Developer",
      imgPath: "/images/logos/node.png",
    },
    {
      name: "Interactive Developer",
      imgPath: "/images/logos/three.png",
    },
    {
      name: "Project Manager",
      imgPath: "/images/logos/git.svg",
    },
  ];
  
  const techStackIcons = [
    {
      name: "React Developer",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    {
      name: "Python Developer",
      modelPath: "/models/python-transformed.glb",
      scale: 0.8,
      rotation: [0, 0, 0],
    },
    {
      name: "Backend Developer",
      modelPath: "/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Interactive Developer",
      modelPath: "/models/three.js-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    {
      name: "Project Manager",
      modelPath: "/models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
  ];

export {
    words,
    counterItems,
    navLinks,
    logoIconsLists,
    abilities,
    experienceCards,
    techStackImgs,
    techStackIcons
}