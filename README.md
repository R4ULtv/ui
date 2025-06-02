![UI Components Library](./public/og-image.png)

This is a collection of UI components built with Shadcn UI, featuring customizable Icon Picker and Github Contributions components.

## Features

### Icon Picker Variants

- **Basic Icon Picker**: A simple icon picker component with search functionality.
- **Icon Picker Multiple**: Allows selection of multiple icons for building icon collections.
- **Icon Picker Custom Color**: Enables icon selection with color customization.
- **Icon Picker Virtua**: A virtualization implementation using the "virtua" library.
- **Icon Picker Tanstack**: A virtualization implementation using "@tanstack/react-virtual".
- **Icon Picker Virtualized**: A virtualization implementation using "react-virtualized".
- **Icon Picker Popover**: An implementation integrated within a popover for compact UI.

### Github Contributions Components

- **Basic Github Contributions**: Displays contributions in a calendar-like grid.
- **Advanced Github Contributions**: Extends the basic component with additional stats.
- **Github Contributions Fetcher**: A Github contributions table with client-side fetcher.
- **Github Contributions Advanced Fetcher**: An advanced Github contributions table with client-side fetcher.

### Music Player Components

- **Music Player**: A music player component featuring essential playback controls and a progress slider.
- **Spotify Music Player**: A music player component with a design inspired by Spotify.
- **Apple Music Player**: A music player component with a design inspired by Apple.

### Search Bar Components

- **Search Bar**: A search bar component managing URL queries client-side (Nuqs).
- **Search Bar Suggestions**: A search bar component featuring autosuggestions (Nuqs).

### Rating Group Components

- **Rating Group**: A star rating component for user feedback.
- **Rating Group Advanced**: A star rating component offering half-ratings, read-only mode, and customizable icons and colors.

## Technologies

- Next.js (App Router) v15
- React v19
- TypeScript
- Tailwind CSS v4
- Shadcn UI
- Lucide React (for icons)

## Getting Started

### Prerequisites

- Node.js
- pnpm or npm or yarn

### Installation

Clone the repository then install dependencies:

```bash
git clone https://github.com/r4ultv/ui
cd ui
pnpm install
```

### Adding Components via Registry

You can add any variant using shadcn/cli. For example:

```bash
pnpx shadcn@latest add https://ui.raulcarini.dev/r/icon-picker.json
pnpx shadcn@latest add https://ui.raulcarini.dev/r/github-contributions.json
pnpx shadcn@latest add https://ui.raulcarini.dev/r/music-player.json
pnpx shadcn@latest add https://ui.raulcarini.dev/r/search-bar.json
pnpx shadcn@latest add https://ui.raulcarini.dev/r/rating-group.json
```

### Running the Development Server

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Component Usage

Check the examples below for an overview of how to integrate each variant:

> NOTE: For optimal performance and to reduce initial bundle size, it is recommended to use dynamic import.

```tsx
const IconPicker = dynamic(() => import("@/components/icon-picker"));
```

### Basic Icon Picker

```tsx
import IconPicker from "@/components/icon-picker";

function MyComponent() {
  const [selectedIcon, setSelectedIcon] = React.useState<string | null>(null);
  return (
    <IconPicker selectedIcon={selectedIcon} setSelectedIcon={setSelectedIcon} />
  );
}
```

### Icon Picker Multiple

```tsx
import IconPicker from "@/components/icon-picker-multiple";

function MyComponent() {
  const [selectedIcons, setSelectedIcons] = React.useState<string[]>([]);
  return (
    <IconPicker
      selectedIcons={selectedIcons}
      setSelectedIcons={setSelectedIcons}
    />
  );
}
```

### Icon Picker Custom Color

```tsx
import IconPicker from "@/components/icon-picker-custom-color";

function MyComponent() {
  const [selectedIcon, setSelectedIcon] = React.useState<string | null>(null);
  const [selectedColor, setSelectedColor] = React.useState<string>(
    "oklch(62.3% 0.214 259.815)"
  );
  return (
    <IconPicker
      selectedIcon={selectedIcon}
      setSelectedIcon={setSelectedIcon}
      selectedColor={selectedColor}
      setSelectedColor={setSelectedColor}
    />
  );
}
```

### Virtualized Implementations

Replace imports with the desired version:

- **Virtua Version:**
  `import IconPicker from "@/components/icon-picker-virtua";`
- **Tanstack Version:**
  `import IconPicker from "@/components/icon-picker-tanstack";`
- **React-Virtualized Version:**
  `import IconPicker from "@/componentsicon-picker-virtualized";`

### Icon Picker Popover

```tsx
import IconPicker from "@/components/icon-picker-popover";

function MyComponent() {
  return <IconPicker />;
}
```

### Github Contributions

```tsx
import GithubContributions from "@/components/github-contributions";

function MyComponent() {
  // Example data - replace with your actual contribution data
  const dummyData = [
    // ... your contribution data array here
    { date: "2023-10-26", count: 1, level: 1 },
    { date: "2023-10-27", count: 3, level: 3 },
    { date: "2023-10-28", count: 0, level: 0 },
    // ... more data
  ];

  return <GithubContributions data={dummyData} />;
}
```

### Github Contributions Fetcher

```tsx
import GithubContributionsFetcher from "@/components/github-contributions-fetcher";

function MyComponent() {
  return <GithubContributionsFetcher username="R4ULtv" />;
}
```

### Music Player

```tsx
import MusicPlayer from "@/components/music-player";

function MyComponent() {
  return (
    <MusicPlayer
      song={{
        name: "Bean (Kobe) [feat. Chief Keef]",
        artists: ["Lil Uzi Vert", "Chief Keef"],
        album: {
          name: "Eternal Atake (Deluxe) - LUV vs. The World 2",
          image:
            "https://i.scdn.co/image/ab67616d00001e02bd5f03953f9f1d3b833369c0",
        },
        duration: 238,
      }}
    />
  );
}
```

### Search Bar

```tsx
import { NuqsAdapter } from "nuqs/adapters/next/app";
import SearchBar from "@/components/search-bar";

function MyComponent() {
  return (
    <NuqsAdapter>
      <SearchBar />
    </NuqsAdapter>
  );
}
```

### Rating Group

```tsx
import RatingGroup from "@/components/rating-group";

function MyComponent() {
  const [rating, setRating] = React.useState<number>(0);
  return (
    <RatingGroup
      value={rating}
      onValueChange={setRating}
      maxRating={5}
    />
  );
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Shadcn UI](https://ui.shadcn.com/)
- [Lucide React](https://lucide.dev/)
- [Virtua](https://github.com/inokawa/virtua)
- [Tanstack Virtual](https://tanstack.com/virtual/latest)
- [React Virtualized](https://github.com/bvaughn/react-virtualized)
- [Github Contributions API](https://github.com/grubersjoe/github-contributions-api)
- [Nuqs](https://nuqs.47ng.com/)
