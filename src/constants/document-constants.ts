export type Documents = {
  id: string;
  title: string;
  description?: string;
  link?: string;
  type: "link" | "youtube" | "x" | "note";
};

export const linkDocuments: Documents[] = [
  {
    id: "1",
    title: "React Documentation",
    link: "https://reactjs.org",
    type: "link",
  },
  {
    id: "2",
    title: "Next.js Documentation",
    link: "https://nextjs.org/docs",
    type: "link",
  },
  {
    id: "3",
    title: "MDN Web Docs - JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    type: "link",
  },
  {
    id: "4",
    title: "Tailwind CSS Documentation",
    link: "https://tailwindcss.com/docs",
    type: "link",
  },
  {
    id: "5",
    title: "TypeScript Handbook",
    link: "https://www.typescriptlang.org/docs",
    type: "link",
  },
  {
    id: "6",
    title: "Node.js Docs",
    link: "https://nodejs.org/en/docs",
    type: "link",
  },
  {
    id: "7",
    title: "Express.js Docs",
    link: "https://expressjs.com/en/starter/installing.html",
    type: "link",
  },
  {
    id: "8",
    title: "MongoDB Documentation",
    link: "https://www.mongodb.com/docs/",
    type: "link",
  },
  {
    id: "9",
    title: "Bun.sh Docs",
    link: "https://bun.sh/docs",
    type: "link",
  },
  {
    id: "10",
    title: "Vercel - Deploy Your App",
    link: "https://vercel.com/docs",
    type: "link",
  },
];

export const youtubeDocuments: Documents[] = [
  {
    id: "1",
    title: "Learn JavaScript in 1 Hour",
    link: "https://www.youtube.com/embed/W6NZfCO5SIk",
    type: "youtube",
  },
  {
    id: "2",
    title: "React JS Crash Course",
    link: "https://www.youtube.com/embed/w7ejDZ8SWv8",
    type: "youtube",
  },
  {
    id: "3",
    title: "Node.js Tutorial for Beginners",
    link: "https://www.youtube.com/embed/TlB_eWDSMt4",
    type: "youtube",
  },
  {
    id: "4",
    title: "MongoDB Full Course",
    link: "https://www.youtube.com/embed/-56x56UppqQ",
    type: "youtube",
  },
  {
    id: "5",
    title: "Express.js Crash Course",
    link: "https://www.youtube.com/embed/L72fhGm1tfE",
    type: "youtube",
  },
  {
    id: "6",
    title: "Tailwind CSS Full Course",
    link: "https://www.youtube.com/embed/UBOj6rqRUME",
    type: "youtube",
  },
  {
    id: "7",
    title: "TypeScript in 100 Seconds",
    link: "https://www.youtube.com/embed/zQnBQ4tB3ZA",
    type: "youtube",
  },
  {
    id: "8",
    title: "Git & GitHub Crash Course",
    link: "https://www.youtube.com/embed/RGOj5yH7evk",
    type: "youtube",
  },
  {
    id: "9",
    title: "Next.js 13 Tutorial",
    link: "https://www.youtube.com/embed/8aGhZQkoFbQ",
    type: "youtube",
  },
  {
    id: "10",
    title: "Understanding Async JavaScript",
    link: "https://www.youtube.com/embed/PoRJizFvM7s",
    type: "youtube",
  },
];

export const xDocuments: Documents[] = [
  {
    id: "1",
    title: "Theo on Dyson V11 Vacuum Deal (Day 2)",
    link: "https://x.com/theo/status/1942886394483097961",
    type: "x",
  },
  {
    id: "2",
    title: "Theo on AirPods Pro 2 Deal (Day 1)",
    link: "https://x.com/theo/status/1942480366746415598",
    type: "x",
  },
  {
    id: "3",
    title: "Theo on Eero Mesh Set Deal (Day 1)",
    link: "https://x.com/theo/status/1942480803025375536",
    type: "x",
  },
  {
    id: "4",
    title: "Theo on WD_BLACK 8TB NVMe Deal (Day 1)",
    link: "https://x.com/theo/status/1942481203367416260",
    type: "x",
  },
  {
    id: "5",
    title: "Theo on Dyson V8 Vacuum Deal (Day 1)",
    link: "https://x.com/theo/status/1942482723903287762",
    type: "x",
  },
  {
    id: "6",
    title: "Theo on Roborock Vacuum Deal (Day 1)",
    link: "https://x.com/theo/status/1942483117945594310",
    type: "x",
  },
  {
    id: "7",
    title: "Theo on Dyson AirWrap Deal (Day 1)",
    link: "https://x.com/theo/status/1942483648411828347",
    type: "x",
  },
  {
    id: "8",
    title: "Theo on iPad 11-inch Deal (Day 1)",
    link: "https://x.com/theo/status/1942485023858520245",
    type: "x",
  },
  {
    id: "9",
    title: "Theo on Sonicare Toothbrush Deal (Day 1)",
    link: "https://x.com/theo/status/1942485643126247573",
    type: "x",
  },
  {
    id: "10",
    title: "Theo on Prime Day Day 2 Overview",
    link: "https://x.com/theo/status/1942886367794700549",
    type: "x",
  },
];

export const noteDocuments: Documents[] = [
  {
    id: "1",
    title: "Understanding useEffect",
    description: "Explains how useEffect works with dependency arrays.",
    type: "note",
  },
  {
    id: "2",
    title: "Props vs State",
    description: "Differences between props and state in React components.",
    type: "note",
  },
  {
    id: "3",
    title: "JavaScript Event Loop",
    description:
      "Describes how JavaScript handles async operations using the event loop.",
    type: "note",
  },
  {
    id: "4",
    title: "Closures in JavaScript",
    description:
      "Closures let functions access variables from their parent scope even after execution.",
    type: "note",
  },
  {
    id: "5",
    title: "Flexbox Cheatsheet",
    description:
      "Quick reference to CSS Flexbox properties and layout patterns.",
    type: "note",
  },
  {
    id: "6",
    title: "Next.js Routing",
    description: "Difference between App Router and Pages Router in Next.js.",
    type: "note",
  },
  {
    id: "7",
    title: "MERN Stack Overview",
    description: "Basic overview of MongoDB, Express, React, and Node.js.",
    type: "note",
  },
  {
    id: "8",
    title: "Bun vs Node",
    description:
      "Pros and cons of using Bun instead of Node.js for backend apps.",
    type: "note",
  },
  {
    id: "9",
    title: "Debounce vs Throttle",
    description:
      "Difference and use-cases of debounce and throttle in input events.",
    type: "note",
  },
  {
    id: "10",
    title: "React Performance Optimization",
    description:
      "Memoization, lazy loading, and avoiding unnecessary re-renders.",
    type: "note",
  },
];
