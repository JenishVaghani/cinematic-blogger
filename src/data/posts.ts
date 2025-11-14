import blog1 from "../assets/blog-1.webp";
import blog2 from "../assets/blog-2.webp";
import blog3 from "../assets/blog-3.webp";
import blog4 from "../assets/blog-4.webp";
import blog5 from "../assets/blog-5.webp";
import blog6 from "../assets/blog-6.webp";
import blog7 from "../assets/blog-7.webp";
import blog8 from "../assets/blog-8.webp";
import blog9 from "../assets/blog-9.webp";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  readingTime: number;
  featured?: boolean;
}

export const posts: BlogPost[] = [
  {
    id: "1",
    title: "Design Psychology: How Users Think, Feel & Interact",
    slug: "design-psychology-uiux",
    excerpt:
      "Discover the psychology behind user behavior and learn how to design digital experiences that feel intuitive, effortless, and emotionally engaging.",
    content: `
# Design Psychology: How Users Think, Feel & Interact

Design isn't just visuals — it's *behavior science*. Every color, shape, animation, and spacing choice influences how users feel and act.

## Cognitive Load Matters
Users make quick decisions. Too much information = confusion.

- Keep layouts predictable  
- Use visual hierarchy  
- Reduce mental effort  

## Emotional Design
Great designs make users *feel* good:

- Warm colors evoke trust  
- Rounded corners feel friendly  
- Micro-animations build delight  

## Choices & Decision Making
Hick’s Law: fewer choices = faster decisions.

Keep your UI clean, focused, and distraction-free.

## Conclusion
Understand the mind → design better experiences.
  `,
    coverImage: blog1,
    category: "Design",
    tags: ["Psychology", "UI/UX", "Behavior Design"],
    author: {
      name: "Editorial Team",
      avatar: "/placeholder.svg",
    },
    publishedAt: "2024-02-22",
    readingTime: 7,
    featured: true,
  },
  {
    id: "3",
    title: "The Fascinating World of Animals: Survival, Behavior & Evolution",
    slug: "fascinating-world-of-animals",
    excerpt:
      "Explore how animals think, survive, communicate, and adapt across different habitats — from oceans to deserts.",
    content: `
# The Fascinating World of Animals: Survival, Behavior & Evolution

Animals duniya nu ek adbhut hissa chhe — pratyek species potana environment ma survive karva unique skills saathe evolve thay chhe.

## How Animals Survive

Different animals have different survival strategies:

- **Camouflage** – Tigers, chameleons, insects blend with surroundings  
- **Speed & Strength** – Cheetah, lions, wolves  
- **Defense Mechanisms** – Porcupine quills, octopus ink, turtle shells  
- **Migration** – Birds ane whales long journeys karta hoy chhe

## Animal Communication

Animals pan potana method thi communicate kare chhe:

- **Sounds** – Birds songs, lion roar  
- **Body Movement** – Bees waggle dance  
- **Chemical signals** – Ants pheromones  
- **Light signals** – Fireflies flashing patterns  

Aa communication survival, mating, danger detection mate essential chhe.

## Evolution & Adaptation

Animals evolve thai ne millions of years ma changes laave chhe:

- **Polar bears** – Thick fur & fat for extreme cold  
- **Giraffes** – Long neck for tall tree leaves  
- **Dolphins** – High intelligence ane sonar-like echolocation  
- **Desert animals** – Water conserve karva unique body systems  

Environment jevo, adaptation evo!

## Why Animals Matter

Animals ecosystem ma major role play kare chhe:

- Bees → pollination  
- Wolves → maintain food chain balance  
- Elephants → forest regeneration  
- Marine animals → ocean health maintain  

Animals ne preserve karvu planet health mate necessary chhe.

## Tip

Animal documentaries (Planet Earth, Nat Geo, Animal Planet) regularly jovathi tame wildlife behavior, survival patterns ane nature ni beauty understand kari shako.

    `,
    coverImage: blog4,
    category: "Animals",
    tags: ["Wildlife", "Nature", "Animal Kingdom"],
    author: {
      name: "Editorial Team",
      avatar: "/placeholder.svg",
    },
    publishedAt: "2024-04-01",
    readingTime: 8,
    featured: true,
  },
  {
    id: "2",
    title: "The Art of Minimalist Design in Digital Products",
    slug: "minimalist-design-digital-products",
    excerpt:
      "Learn how less can be more when it comes to creating beautiful, functional digital experiences that users love.",
    content: `
# The Art of Minimalist Design in Digital Products

Minimalism in design isn't about removing features or making things bare. It's about **intentionality** - every element should serve a purpose.

## Core Principles

### 1. Purposeful Simplicity
Every element in your design should have a clear reason for existing. Ask yourself: "What problem does this solve for the user?"

### 2. Generous Whitespace
Whitespace isn't empty space - it's a powerful design tool that:
- Creates visual hierarchy
- Improves readability
- Reduces cognitive load
- Adds elegance and sophistication

### 3. Focused Color Palette
Limit your colors to create cohesion:
- 1-2 primary colors for brand identity
- 2-3 supporting colors for hierarchy
- Neutrals for text and backgrounds

## Minimalism in Practice

\`\`\`css
/* Instead of this cluttered approach */
.card {
  background: linear-gradient(45deg, red, blue, green);
  border: 3px solid purple;
  box-shadow: 0 0 10px red, 0 0 20px blue;
  padding: 5px;
}

/* Embrace simplicity */
.card {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  padding: 2rem;
}
\`\`\`

## Benefits for Users

Minimalist design creates better user experiences:

- **Faster loading times** - Less complexity means faster performance
- **Clearer communication** - Users understand content immediately
- **Reduced decision fatigue** - Fewer choices lead to easier decisions
- **Timeless aesthetics** - Minimal designs age gracefully

## The Balance

The challenge is finding the sweet spot between minimal and sterile. Add personality through:

- **Typography** - Choose distinctive, readable fonts
- **Microinteractions** - Subtle animations that delight
- **Photography** - High-quality, purposeful imagery
- **Whitespace rhythm** - Varied spacing creates visual interest

## Conclusion

Minimalism is a design philosophy that respects your users' time and attention. It's not about doing less work - it's about being more thoughtful with every design decision.
    `,
    coverImage: blog2,
    category: "Design",
    tags: ["UI/UX", "Minimalism", "Design Systems"],
    author: {
      name: "Editorial Team",
      avatar: "/placeholder.svg",
    },
    publishedAt: "2024-03-10",
    readingTime: 6,
    featured: true,
  },

  {
    id: "4",
    title: "Building Modern Web Experiences with React & Three.js",
    slug: "modern-web-experiences-react-threejs",
    excerpt:
      "Explore how combining React with Three.js creates immersive, performant web experiences that push the boundaries of what's possible in the browser.",
    content: `
# Building Modern Web Experiences with React & Three.js

The web has evolved tremendously over the past decade. What started as static documents has transformed into rich, interactive applications that rival native software. One of the most exciting frontiers is **3D on the web**.

## Why 3D on the Web?

Three-dimensional experiences bring a new level of engagement and storytelling to web applications. From product showcases to data visualizations, 3D graphics can:

- **Enhance user engagement** through interactive experiences
- **Communicate complex ideas** more effectively
- **Create memorable brand experiences** that stand out
- **Enable new forms of storytelling** and content presentation

## The Power of React Three Fiber

React Three Fiber (R3F) brings the declarative power of React to Three.js. Instead of managing imperative Three.js code, you can write JSX:

\`\`\`jsx
function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  )
}
\`\`\`

This approach makes 3D development more accessible and maintainable, especially for React developers.

## Performance Considerations

When building 3D experiences, performance is crucial:

1. **Optimize geometry** - Use LOD (Level of Detail) for complex models
2. **Manage materials** - Reuse materials and textures
3. **Control rendering** - Use React Three Fiber's automatic optimization
4. **Lazy load assets** - Load 3D models progressively

## Real-World Applications

Modern web applications are leveraging 3D in creative ways:

- **E-commerce** - Interactive product viewers
- **Education** - Immersive learning experiences
- **Data visualization** - Complex datasets in 3D space
- **Gaming** - Browser-based games without plugins

## Getting Started

The barrier to entry has never been lower. With tools like R3F, Drei (helper library), and comprehensive documentation, anyone can start building 3D web experiences today.

The future of the web is spatial, interactive, and incredibly exciting.
    `,
    coverImage: blog3,
    category: "Development",
    tags: ["React", "Three.js", "WebGL", "3D"],
    author: {
      name: "Editorial Team",
      avatar: "/placeholder.svg",
    },
    publishedAt: "2024-03-15",
    readingTime: 8,
    // featured: true,
  },
  {
    id: "5",
    title: "The Evolution of Modern Cricket & Power-Hitting Era",
    slug: "modern-cricket-power-hitting-era",
    excerpt:
      "How T20 leagues, technology, and new batting styles are reshaping world cricket.",
    content: `
# The Evolution of Modern Cricket & Power-Hitting Era

Cricket pacha na dashak thi khub badlaay gayo chhe. T20 cricket e aggression, power-hitting ane fast-paced gameplay ne center stage par muki didhu.

## What’s Changing in Modern Cricket?

- T20 leagues nu vadhare influence  
- Power-hitting techniques no vadharo  
- Technology-based decision making (DRS, Hawk-Eye)  
- Fitness & strength training ma revolution  
- Spin bowlers mate navu challenge  

## Impact on Players

Aaj kaal players ne **360-degree** batting, **explosive fitness**, ane **quick decision-making** ni jarur pade chhe.  
Bowlers pan yorkers, slower balls, cutters, ane variations par heavily dependent thai gaya chhe.

## Strengths & Weaknesses

- **Strengths:** More entertainment, high scoring matches, global reach, young talent exposure  
- **Weaknesses:** Traditional test cricket ni popularity ma thodo drop, bowlers par pressure vadhelo

## Tip

Cricket ma safal thava mate “Aggression + Smartness + Fitness” ni perfect combination jaruri chhe.
  `,
    coverImage: blog5,
    category: "Sports",
    tags: ["Cricket", "T20 Era", "Sports Analysis"],
    author: {
      name: "Editorial Team",
      avatar: "/placeholder.svg",
    },
    publishedAt: "2024-03-10",
    readingTime: 6,
    featured: true,
  },
  {
    id: "6",
    title: "The Evolution of JavaScript Frameworks",
    slug: "evolution-js-frameworks",
    excerpt:
      "From jQuery to React, Vue, and modern meta-frameworks — explore how the JavaScript world transformed.",
    content: `
# The Evolution of JavaScript Frameworks

JavaScript frameworks have evolved rapidly over the last decade.

## Key Generations
1. jQuery Era  
2. SPA Frameworks (React, Vue, Angular)  
3. Meta-frameworks (Next.js, Nuxt)  
4. Compiler-first frameworks (Svelte, Solid)  

## What’s Next?
Frameworks that blur the line between client, server, and AI-driven UI generation.

Web development keeps getting smarter.
  `,
    coverImage: blog6,
    category: "Technology",
    tags: ["JavaScript", "Frontend", "Frameworks"],
    author: {
      name: "Editorial Team",
      avatar: "/placeholder.svg",
    },
    publishedAt: "2024-01-28",
    readingTime: 8,
    featured: true,
  },
  {
    id: "7",
    title: "The Creative Process: From Idea to Execution",
    slug: "creative-process-execution",
    excerpt:
      "Understand how great ideas are born, refined, and transformed into polished creative work.",
    content: `
# The Creative Process

Creativity is not magic — it's a system.

## Stages
1. Inspiration  
2. Exploration  
3. Refinement  
4. Execution  
5. Iteration  

## Tips
- Keep a daily inspiration log  
- Create low-pressure sketches  
- Experiment with formats  

Creativity grows with practice.
  `,
    coverImage: blog7,
    category: "Creative",
    tags: ["Creativity", "Process", "Inspiration"],
    author: {
      name: "Editorial Team",
      avatar: "/placeholder.svg",
    },
    publishedAt: "2024-01-12",
    readingTime: 6,
  },
  {
    id: "8",
    title: "Designing Cinematic Web Experiences",
    slug: "cinematic-web-experiences",
    excerpt:
      "Learn how to create immersive, movie-like web experiences with lighting, sound, and 3D transitions.",
    content: `
# Cinematic Web Experiences

Cinematic design makes websites feel like films.

## Key Elements
- Depth  
- Lighting  
- Sound cues  
- Parallax layers  
- Atmospheric effects  

Blend art + tech to build unforgettable web moments.
  `,
    coverImage: blog8,
    category: "Creative",
    tags: ["Cinematic", "3D", "Experience Design"],
    author: {
      name: "Editorial Team",
      avatar: "/placeholder.svg",
    },
    publishedAt: "2024-01-18",
    readingTime: 7,
  },
  {
    id: "9",
    title: "Planet Earth: The Only Living World in Our Solar System",
    slug: "planet-earth-living-world",
    excerpt:
      "Explore the mysteries of Earth — its atmosphere, ecosystems, water cycle, and the features that make life possible.",
    content: `
# Planet Earth: The Only Living World in Our Solar System

Earth ek matra known planet chhe jya life exist kare chhe. Water, atmosphere, climate, ane biodiversity — aa badha factors Earth ne unique banave chhe.

## Why Earth Supports Life?

Earth par life possible bani chhe karan ke:

- **Perfect Distance from Sun** – Not too hot, not too cold  
- **Atmosphere** – Oxygen, nitrogen, carbon dioxide ni perfect balance  
- **Liquid Water** – 70% surface water thi covered  
- **Magnetic Field** – Harmful solar radiation thi protect kare chhe  

Aa combination biji koi planet par nathi!

## Earth’s Amazing Layers

Earth 4 major layers thi bani chhe:

1. **Crust** – Je par tame hu rahie chhie  
2. **Mantle** – Semi-solid rock layer  
3. **Outer Core** – Liquid metal  
4. **Inner Core** – Solid iron sphere  

Aa layers Earth nu temperature, volcanic activity, ane magnetic field control kare chhe.

## Life on Earth

Earth biodiversity thi bharpur chhe:

- **Oceans** – Coral reefs, sharks, whales  
- **Forests** – Tigers, elephants, parrots  
- **Deserts** – Camels, reptiles  
- **Polar Regions** – Penguins, polar bears  

Each species ecosystem ni balance maintain kare chhe.

## The Water Cycle

Earth par water constant cycle ma chalta hoy chhe:

- Evaporation  
- Condensation  
- Precipitation  
- Run-off  

Aa cycle oceans, rivers, lakes, ane rainfall maintain kare chhe.

## Climate & Weather

Earth climate zones — tropical, temperate, polar — alag alag weather patterns create kare chhe. Seasonal changes tilt of Earth ne cause thay chhe.

## Protecting Our Planet

Aaj lifestyle thi Earth par pressure vadhyu chhe:

- Pollution  
- Deforestation  
- Global warming  
- Plastic waste  

Small steps thi Earth protect thai shake chhe:

- Reuse & recycle  
- Save water  
- Plant trees  
- Reduce pollution  

## Tip

Earth documentaries (Our Planet, Planet Earth II, One Strange Rock) joi ne tame planet ni beauty ane danger banne samjhi shako.

    `,
    coverImage: blog9,
    category: "Science",
    tags: ["Earth", "Planet", "Solar System", "Environment"],
    author: {
      name: "Editorial Team",
      avatar: "/placeholder.svg",
    },
    publishedAt: "2024-04-10",
    readingTime: 8,
    featured: true,
  },
];

export const categories = [
  { name: "All", slug: "all" },
  { name: "Development", slug: "development" },
  { name: "Design", slug: "design" },
  { name: "Technology", slug: "technology" },
  { name: "Creative", slug: "creative" },
];

export const tags = [
  "React",
  "Three.js",
  "WebGL",
  "3D",
  "UI/UX",
  "Minimalism",
  "Design Systems",
  "Performance",
  "Web Vitals",
  "Optimization",
  "TypeScript",
  "Tailwind CSS",
];
