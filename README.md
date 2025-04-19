![UI Components Library](./public/og-image.png)

This is a collection of UI components built with Shadcn UI. The project currently focuses on providing customizable Icon Picker components implemented in several different ways.

## Features

### Icon Picker Variants

- **Basic Icon Picker**: A simple icon picker component with search functionality.
- **Icon Picker Multiple**: Allows selection of multiple icons for building icon collections.
- **Icon Picker Custom Color**: Enables icon selection with color customization.
- **Icon Picker Virtua**: A virtualization implementation using the "virtua" library.
- **Icon Picker Tanstack**: A virtualization implementation using "@tanstack/react-virtual".
- **Icon Picker Virtualized**: A virtualization implementation using "react-virtualized".
- **Icon Picker Popover**: An implementation integrated within a popover for compact UI.

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
- npm or yarn

### Installation

Clone the repository then install dependencies:

```bash
git clone https://github.com/r4ultv/ui
cd ui
npm install
# or
yarn install
```

### Adding Components via Registry

You can add any variant using shadcn/cli. For example:

```bash
npx shadcn@latest add https://ui.raulcarini.dev/r/icon-picker.json
npx shadcn@latest add https://ui.raulcarini.dev/r/icon-picker-multiple.json
npx shadcn@latest add https://ui.raulcarini.dev/r/icon-picker-custom-color.json
npx shadcn@latest add https://ui.raulcarini.dev/r/icon-picker-virtua.json
npx shadcn@latest add https://ui.raulcarini.dev/r/icon-picker-tanstack.json
npx shadcn@latest add https://ui.raulcarini.dev/r/icon-picker-virtualized.json
npx shadcn@latest add https://ui.raulcarini.dev/r/icon-picker-popover.json
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Component Usage

Check the examples below for an overview of how to integrate each variant:
> NOTE: For optimal performance and to reduce initial bundle size, it is recommended to use dynamic import.
  ```jsx title="IconPicker Example"
  const IconPicker = dynamic(() => import("@/components/icon-picker"));
  ```


### Basic Icon Picker

```tsx
import IconPicker from "@/components/icon-picker";

function MyComponent() {
  const [selectedIcon, setSelectedIcon] = React.useState<string | null>(null);
  return (
    <IconPicker
      selectedIcon={selectedIcon}
      setSelectedIcon={setSelectedIcon}
    />
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
import IconPicker from "@/registry/icon-picker/icon-picker-custom-color";

function MyComponent() {
  const [selectedIcon, setSelectedIcon] = React.useState<string | null>(null);
  const [selectedColor, setSelectedColor] = React.useState<string>("oklch(62.3% 0.214 259.815)");
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

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Shadcn UI](https://ui.shadcn.com/)
- [Lucide React](https://lucide.dev/)
- [Virtua](https://github.com/inokawa/virtua)
- [Tanstack Virtual](https://tanstack.com/virtual/latest)
- [React Virtualized](https://github.com/bvaughn/react-virtualized)
