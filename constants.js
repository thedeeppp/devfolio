export const METADATA = {
  author: "Deep Trivedi",
  title: "Portfolio | Deep Trivedi",
  description:
    "Deep Trivedi is a passionate Frontend Engineer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",
  // siteUrl: "https://www.shubhporwal.me/",
  twitterHandle: "@deep_trivedi__",
  keywords: [
    "Deep Trivedi",
    "Frontend Engineer",
    "React Native Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  // image:
  //   "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A pragmatic Frontend Developer",
  "I build things for the web",
  "I create aesthetic and modern apps",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: deepbtrivedi04@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/deep-trivedi-a12893258/",
  },
  {
    name: "github",
    url: "https://github.com/thedeeppp",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/deep_trivedi__",
  },
  {
    name: "twitter",
    url: "https://x.com/deep_trivedi__",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "sass",
    "nodejs",
    "webpack",
    "vite",
    "firebase",
    "figma",
    "tanstack-query",
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    "styledcomponents",
    "antdesign",
    "chakra-ui",
  ],
  databases: ["mysql", "mongodb"],
  other: ["git", "sanity-io"],
};

export const PROJECTS = [
  {
    name: "AI powered Calculator",
    image: "/projects/airbnb.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "AI powered calculator using NextJS + Tailwind CSS + Flask API 🛏️",
    gradient: ["#F14658", "#DC2537"],
    url: "https://github.com/thedeeppp/AI-powered-calc",
    tech: ["react", "nextjs", "tailwindcss", "mapbox"],
  },
  {
    name: "Rush Mine",
    image: "/projects/rushmines.png",
    blurImage: "/projects/blur/rushmines.png",
    description: "Rush Mine game using NextJS + Tailwind CSS ✍🏻",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://rushmine.vercel.app/",
    tech: ["typescript", "react", "nextjs", "tailwindcss", "sanity.io"],
  },
  {
    name: "Eth Wallet Adapter",
    image: "/projects/inshorts.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description:
      "Ethereum Wallet Adapter using React + Tanstack Query + WAGMI + viem 📰",
    gradient: ["#000066", "#6699FF"],
    url: "https://eth-wallet-adapter-delta.vercel.app/",
    tech: ["react", "tailwindcss", "typescript"],
  },
  {
    name: "URL Shortener",
    image: "/projects/urlShortner.png",
    blurImage: "/projects/blur/urlShortner.png",
    description: "A URL Shortner using GOlang ",
    gradient: ["#142D46", "#2E4964"],
    url: "https://github.com/thedeeppp/url-shortner",
    tech: ["react"],
  },
];

export const WORK_CONTENTS = {
  FUSION : [
    {
      title: "Fusion IIIT",
      description:
        "Team lead at Fusion IIIT, a student-driven program aimed at developing an online platform to manage college administration seamlessly.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Leading innovation for smarter college management.
        </div>
      ),
    },
    {
      title: "Leadership",
      description:
        "As the team lead, I coordinated multiple teams working on various modules, ensuring their seamless integration with both frontend and backend systems. My role involved managing workflows, resolving technical challenges, and fostering collaboration for successful project execution.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Fusion Team Lead
        </div>
      ),
    },
    {
      title: "Collaboration",
      description:
        "I facilitated collaboration between frontend, backend, and database teams, overseeing the development of key modules like attendance management, result processing, and administrative tools. This ensured that all components aligned with the program's goals.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Seamless Module Integration
        </div>
      ),
    },
    {
      title: "Impact",
      description:
        "The Fusion project revolutionized college administration by streamlining tasks such as attendance tracking, result publication, and resource allocation. My leadership contributed to building a scalable and user-friendly platform that transformed administrative workflows.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Driving administrative excellence.
        </div>
      ),
    },
  ],
  
  PHYLLO: [
    {
      title: "PHYLLO",
      description:
        "Phyllo is a universal API that offers developers secure access to user-permissioned data from various creator platforms, streamlining the integration of creator data into applications.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Empowering applications with seamless creator data integration.
        </div>
      ),
    },
    {
      title: "Innovation",
      description:
        "Phyllo's API serves as a gateway to creator data on hundreds of platforms, enabling developers to build features like social analytics, content publishing, and identity verification with ease.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Universal API for Creator Data
        </div>
      ),
    },
  ],
 
};

export const GTAG = "G-5HCTL2TJ5W";
