"use server";

export interface Framework {
  id: string;
  name: string;
  description: string;
}

interface InternalFramework extends Framework {
  lowerName: string;
  lowerDescription: string;
}

const rawFrameworks: Framework[] = [
  {
    id: "nextjs",
    name: "Next.js",
    description: "The React Framework for the Web.",
  },
  {
    id: "react",
    name: "React",
    description: "A JavaScript library for building user interfaces.",
  },
  {
    id: "vue",
    name: "Vue",
    description: "The Progressive JavaScript Framework.",
  },
  {
    id: "angular",
    name: "Angular",
    description: "A platform for building mobile and desktop web applications.",
  },
  {
    id: "svelte",
    name: "Svelte",
    description: "Cybernetically enhanced web apps.",
  },
  {
    id: "astro",
    name: "Astro",
    description: "Build faster websites with less client-side Javascript.",
  },
  {
    id: "remix",
    name: "Remix",
    description: "Full stack web framework for React.",
  },
  {
    id: "solidjs",
    name: "SolidJS",
    description:
      "Simple and performant reactivity for building user interfaces.",
  },
  {
    id: "qwik",
    name: "Qwik",
    description: "The HTML-first framework. Resumable, SSR, Lazy Loading.",
  },
  {
    id: "nuxt",
    name: "Nuxt",
    description: "The Intuitive Vue Framework.",
  },
  {
    id: "sveltekit",
    name: "SvelteKit",
    description: "The fastest way to build Svelte apps.",
  },
  {
    id: "django",
    name: "Django",
    description: "The web framework for perfectionists with deadlines.",
  },
  {
    id: "laravel",
    name: "Laravel",
    description: "The PHP Framework For Web Artisans.",
  },
  {
    id: "rubyonrails",
    name: "Ruby on Rails",
    description:
      "A web-application framework that includes everything needed to create database-backed web applications.",
  },
  {
    id: "springboot",
    name: "Spring Boot",
    description:
      "Framework to ease the creation of production-grade, stand-alone Spring based Applications.",
  },
  {
    id: "aspnetcore",
    name: "ASP.NET Core",
    description:
      "A cross-platform, high-performance, open-source framework for building modern, cloud-enabled, Internet-connected apps.",
  },
];

const allFrameworks: InternalFramework[] = rawFrameworks.map((framework) => ({
  ...framework,
  lowerName: framework.name.toLowerCase(),
  lowerDescription: framework.description.toLowerCase(),
}));

export async function searchFrameworks(query: string): Promise<Framework[]> {
  if (!query) {
    return [];
  }

  const lowerCaseQuery = query.toLowerCase();

  const results = allFrameworks.filter(
    (framework) =>
      framework.id.includes(lowerCaseQuery) ||
      framework.lowerName.includes(lowerCaseQuery) ||
      framework.lowerDescription.includes(lowerCaseQuery),
  );

  // Limit the results to the first 5 elements
  const limitedResults = results.slice(0, 5);

  return limitedResults.map((framework) => ({
    id: framework.id,
    name: framework.name,
    description: framework.description,
  }));
}
