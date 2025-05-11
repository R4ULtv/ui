"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  PauseIcon,
  RepeatIcon,
  ShuffleIcon,
  SkipBackIcon,
  SkipForwardIcon,
  MusicIcon,
  PlayIcon,
  Repeat1Icon,
} from "lucide-react";
import { useMusicPlayer, Song } from "@/hooks/use-music-player";

export default function MusicPlayerApple({ song }: { song: Song }) {
  const {
    isPlaying,
    duration,
    progressPercentage,
    formattedCurrentTime,
    formattedDuration,
    isShuffling,
    repeatMode,
    togglePlayPause,
    handleSliderChange,
    toggleShuffle,
    toggleRepeat,
  } = useMusicPlayer({ song });

  return (
    <div className="md:max-w-lg w-full flex flex-col gap-2.5 bg-popover border rounded-xl p-4">
      <div className="flex items-start md:items-center flex-col md:flex-row gap-4 min-w-0">
        {song.album.image ? (
          <img
            src={song.album.image}
            alt={`${song.name} by ${song.artists.join(", ")}`}
            className="size-full md:size-14 rounded-md object-cover"
            aria-hidden="true"
          />
        ) : (
          <div
            className="size-full md:size-16 rounded-md bg-muted flex items-center justify-center"
            aria-hidden="true"
          >
            <MusicIcon className="size-8 text-muted-foreground" />
          </div>
        )}
        <div className="w-full">
          <p className="text-lg font-semibold truncate">{song.name}</p>
          <p className="text-sm text-muted-foreground truncate">
            {song.artists.join(", ")}
          </p>
        </div>
        <div className="flex items-center justify-center gap-1 w-full">
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "size-7 mr-1.5 rounded-full",
              isShuffling
                ? "text-apple hover:text-apple"
                : "text-muted-foreground",
            )}
            aria-label={`Shuffle ${isShuffling ? "on" : "off"}`}
            onClick={toggleShuffle}
          >
            <ShuffleIcon className="size-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="size-8 rounded-full"
            aria-label="Skip backwords"
          >
            <SkipBackIcon className="size-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="size-8 rounded-full"
            onClick={togglePlayPause}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <PauseIcon className="size-5 text-apple" />
            ) : (
              <PlayIcon className="size-5 text-apple" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="size-8 rounded-full"
            aria-label="Skip forward"
          >
            <SkipForwardIcon className="size-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "size-7 ml-1.5 rounded-full",
              repeatMode !== "off"
                ? "text-apple hover:text-apple"
                : "text-muted-foreground",
            )}
            aria-label={`Repeat: ${repeatMode}`}
            onClick={toggleRepeat}
          >
            {repeatMode === "track" ? (
              <Repeat1Icon className="size-3.5" />
            ) : (
              <RepeatIcon className="size-3.5" />
            )}
          </Button>
        </div>
      </div>
      <div className="flex mt-2 md:mt-0 items-center gap-2 relative">
        <span className="text-xs text-muted-foreground">
          {formattedCurrentTime}
        </span>
        <Slider
          value={[progressPercentage]}
          max={100}
          step={1}
          aria-label="Music progress slider"
          onValueChange={handleSliderChange}
          disabled={duration === 0}
          style={{ "--primary": "var(--apple)" } as React.CSSProperties}
        />
        <span className="text-xs text-muted-foreground">
          {formattedDuration}
        </span>
      </div>
    </div>
  );
}
