![UI Components Library](./public/og-image.png)

This is a collection of UI components built with Shadcn UI. The project currently focuses on providing a customizable Icon Picker component with different implementation options.

## Features

### Icon Picker Components

- **Basic Icon Picker**: A simple icon picker component with search functionality
- **Icon Picker with Multiple Selection**: Allow users to select multiple icons at once, useful for building icon collections or when multiple icons are needed.
- **Virtualized Icon Picker**: Performance-optimized version using virtualization for handling large icon sets
- **Icon Picker Popover**: Implementation with a popover interface for easy integration
- **Icon Picker with Color Customization**: Allow users to change the icon color when selecting.

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

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd ui

# Install dependencies
npm install
# or
yarn install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Component Usage

### Basic Icon Picker

```tsx
import IconPicker from "@/registry/icon-picker/icon-picker";

function MyComponent() {
  const [selectedIcon, setSelectedIcon] = React.useState<string | null>(null);

  return (
    <IconPicker
      selectedIcon={selectedIcon}
      onSelectIcon={setSelectedIcon}
    />
  );
}
```

### Icon Picker with Popover

```tsx
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import IconPicker from "@/registry/icon-picker/icon-picker";

function MyComponent() {
  const [selectedIcon, setSelectedIcon] = React.useState<string | null>(null);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>
          Icon Picker
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-fit p-0">
        <IconPicker
          selectedIcon={selectedIcon}
          onSelectIcon={setSelectedIcon}
          className="bg-transparent border-none"
        />
      </PopoverContent>
    </Popover>
  );
}
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Shadcn UI](https://ui.shadcn.com/)
- [Lucide React](https://lucide.dev/)
