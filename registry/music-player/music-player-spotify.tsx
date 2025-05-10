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

export default function MusicPlayerSpotify({ song }: { song: Song }) {
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
    <div className="md:max-w-md w-full flex flex-col gap-2 bg-popover border rounded-2xl p-4">
      <div className="flex items-start md:items-center flex-col md:flex-row gap-2 md:gap-4">
        {song.album.image ? (
          <img
            src={song.album.image}
            alt={`${song.name} by ${song.artists.join(", ")}`}
            className="size-full md:size-16 rounded-md object-cover"
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
        <div>
          <p className="text-lg font-semibold">{song.name}</p>
          <p className="text-sm text-muted-foreground">
            {song.artists.join(", ")}
          </p>
        </div>
      </div>
      <div className="md:order-2 md:flex mt-2 md:mt-0 items-center gap-2 relative">
        <span className="text-xs text-muted-foreground hidden md:block">
          {formattedCurrentTime}
        </span>
        <Slider
          value={[progressPercentage]}
          max={100}
          step={1}
          aria-label="Music progress slider"
          onValueChange={handleSliderChange}
          disabled={duration === 0}
          style={{ "--primary": "var(--spotify)" } as React.CSSProperties}
        />
        <span className="text-xs text-muted-foreground hidden md:block">
          {formattedDuration}
        </span>
        <div className="w-full flex justify-between mt-1.5 text-xs text-muted-foreground md:hidden">
          <span>{formattedCurrentTime}</span>
          <span>{formattedDuration}</span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "size-7 relative rounded-full",
            isShuffling
              ? "text-spotify hover:text-spotify"
              : "text-muted-foreground",
          )}
          aria-label={`Shuffle ${isShuffling ? "on" : "off"}`}
          onClick={toggleShuffle}
        >
          <ShuffleIcon className="size-3.5" />
          {isShuffling && (
            <div className="size-1 bg-spotify rounded-full absolute bottom-0" />
          )}
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
          variant="default"
          size="icon"
          className="rounded-full mx-2"
          onClick={togglePlayPause}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <PauseIcon className="size-5" />
          ) : (
            <PlayIcon className="size-5" />
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
            "size-7 relative rounded-full",
            repeatMode !== "off"
              ? "text-spotify hover:text-spotify"
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
          {repeatMode !== "off" && (
            <div className="size-1 bg-spotify rounded-full absolute bottom-0" />
          )}
        </Button>
      </div>
    </div>
  );
}
