import {
  IconPickerExample,
  IconPickerExampleCustomColor,
  IconPickerExampleMultiple,
  IconPickerExamplePopover,
  IconPickerExampleTanstack,
  IconPickerExampleVirtua,
  IconPickerExampleVirtualized,
} from "@/components/examples/icon-picker";

import {
  GithubContributionsAdvancedExample,
  GithubContributionsAdvancedFetcherExample,
  GithubContributionsExample,
  GithubContributionsFetcherExample,
} from "@/components/examples/github-contributions";

import {
  MusicPlayerAppleExample,
  MusicPlayerExample,
  MusicPlayerSpotifyExample,
} from "@/components/examples/music-player";

import {
  SearchBarExample,
  SearchBarSuggestionsExample,
} from "@/components/examples/search-bar";

import {
  BasicRatingExample,
  CustomIconRatingExample,
  HalfStarRatingExample,
  HeartRatingExample,
  ReadOnlyRatingExample,
} from "@/components/examples/rating-group";

import ThemeSwitchButton from "@/registry/theme-switch/theme-switch";
import ThemeSwitchToggle from "@/registry/theme-switch/theme-switch-toggle";

export interface Components {
  [key: string]: {
    title: string;
    components: {
      name: string;
      description: string;
      registry: string;
      component: React.FC;
    }[];
  };
}

export const components = {
  "icon-picker": {
    title: "Icon Picker",
    components: [
      {
        name: "Icon Picker",
        description:
          "A simple icon picker component with search functionality.",
        registry: "icon-picker/icon-picker.json",
        component: IconPickerExample,
      },
      {
        name: "Icon Picker Multiple",
        description:
          "Allows selection of multiple icons for building icon collections.",
        registry: "icon-picker/icon-picker-multiple.json",
        component: IconPickerExampleMultiple,
      },
      {
        name: "Icon Picker Custom Color",
        description: "Enables icon selection with color customization.",
        registry: "icon-picker/icon-picker-custom-color.json",
        component: IconPickerExampleCustomColor,
      },
      {
        name: "Icon Picker Virtua",
        description:
          "A virtualization implementation using the `virtua` library.",
        registry: "icon-picker/icon-picker-virtua.json",
        component: IconPickerExampleVirtua,
      },
      {
        name: "Icon Picker Tanstack",
        description:
          "A virtualization implementation using '@tanstack/react-virtual'.",
        registry: "icon-picker/icon-picker-tanstack.json",
        component: IconPickerExampleTanstack,
      },
      {
        name: "Icon Picker Virtualized",
        description:
          "A virtualization implementation using 'react-virtualized'.",
        registry: "icon-picker/icon-picker-virtualized.json",
        component: IconPickerExampleVirtualized,
      },
      {
        name: "Icon Picker Popover",
        description:
          "An implementation integrated within a popover for compact UI.",
        registry: "icon-picker/icon-picker-popover.json",
        component: IconPickerExamplePopover,
      },
    ],
  },
  "github-contributions": {
    title: "Github Contributions",
    components: [
      {
        name: "Github Contributions",
        description: "A simple Github contributions table.",
        registry: "github-contributions/github-contributions.json",
        component: GithubContributionsExample,
      },
      {
        name: "Github Contributions Advanced",
        description: "An advanced Github contributions table.",
        registry: "github-contributions/github-contributions-advanced.json",
        component: GithubContributionsAdvancedExample,
      },
      {
        name: "Github Contributions Fetcher",
        description: "A Github contributions table with client-side fetcher.",
        registry: "github-contributions/github-contributions-fetcher.json",
        component: GithubContributionsFetcherExample,
      },
      {
        name: "Github Contributions Advanced Fetcher",
        description:
          "An advanced Github contributions table with client-side fetcher.",
        registry:
          "github-contributions/github-contributions-advanced-fetcher.json",
        component: GithubContributionsAdvancedFetcherExample,
      },
    ],
  },
  "music-player": {
    title: "Music Player",
    components: [
      {
        name: "Music Player",
        description:
          "A music player component featuring essential playback controls and a progress slider.",
        registry: "music-player/music-player.json",
        component: MusicPlayerExample,
      },
      {
        name: "Spotify Music Player",
        description:
          "A music player component with a design inspired by Spotify.",
        registry: "music-player/music-player-spotify.json",
        component: MusicPlayerSpotifyExample,
      },
      {
        name: "Apple Music Player",
        description:
          "A music player component with a design inspired by Apple Music.",
        registry: "music-player/music-player-apple.json",
        component: MusicPlayerAppleExample,
      },
    ],
  },
  "search-bar": {
    title: "Search Bar",
    components: [
      {
        name: "Search Bar",
        description: "Search bar managing URL queries client-side (Nuqs).",
        registry: "search-bar/search-bar.json",
        component: SearchBarExample,
      },
      {
        name: "Search Bar Suggestions",
        description: "Search bar featuring autosuggestions (Nuqs).",
        registry: "search-bar/search-bar-suggestions.json",
        component: SearchBarSuggestionsExample,
      },
    ],
  },
  "rating-group": {
    title: "Rating Group",
    components: [
      {
        name: "Rating Group",
        description: "A star rating component for user feedback.",
        registry: "rating-group/rating-group.json",
        component: BasicRatingExample,
      },
      {
        name: "Half Star Rating",
        description:
          "Advanced example: Rating component that supports half-star ratings.",
        registry: "rating-group/rating-group-advanced.json",
        component: HalfStarRatingExample,
      },
      {
        name: "Heart Rating",
        description:
          "Advanced example: Heart-themed rating component with custom colors.",
        registry: "rating-group/rating-group-advanced.json",
        component: HeartRatingExample,
      },
      {
        name: "Read-only Rating",
        description:
          "Advanced example: Display-only rating component for showing scores.",
        registry: "rating-group/rating-group-advanced.json",
        component: ReadOnlyRatingExample,
      },
      {
        name: "Custom Icon Rating",
        description:
          "Advanced example: Rating with completely custom icons and styling.",
        registry: "rating-group/rating-group-advanced.json",
        component: CustomIconRatingExample,
      },
    ],
  },
  "theme-switch": {
    title: "Theme Switch",
    components: [
      {
        name: "Theme Switch Button",
        description: "A simple theme switcher button component.",
        registry: "theme-switch/theme-switch.json",
        component: ThemeSwitchButton,
      },
      {
        name: "Theme Switch Toggle",
        description: "A simple theme switcher toggle component.",
        registry: "theme-switch/theme-switch-toggle.json",
        component: ThemeSwitchToggle,
      },
    ],
  },
};
