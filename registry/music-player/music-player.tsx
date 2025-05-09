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

export default function MusicPlayer({ song }: { song: Song }) {
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
    <div className="md:max-w-md w-full flex flex-col gap-4 bg-popover border rounded-lg p-4">
      <div className="flex items-start md:items-center flex-col md:flex-row gap-4 min-w-0">
        {song.album.image ? (
          <img
            src={song.album.image}
            alt={`${song.name} by ${song.artists.join(", ")}`}
            className="size-full md:size-16 rounded-md object-cover"
            aria-hidden="true"
          />
        ) : (
          <div
            className="size-16 rounded-md bg-muted flex items-center justify-center"
            aria-hidden="true"
          >
            <MusicIcon className="size-8 text-muted-foreground" />
          </div>
        )}
        <div className="w-full">
          <h2 className="text-lg font-semibold truncate">{song.name}</h2>
          <p className="text-sm text-muted-foreground truncate">
            {song.artists.join(", ")}
          </p>
          <p className="text-sm text-muted-foreground truncate">
            {song.album.name}
          </p>
        </div>
      </div>
      <div className="relative">
        <Slider
          value={[progressPercentage]}
          max={100}
          step={1}
          aria-label="Music progress slider"
          onValueChange={handleSliderChange}
          disabled={duration === 0}
        />
        <div className="w-full flex justify-between mt-1.5 text-xs text-muted-foreground">
          <span>{formattedCurrentTime}</span>
          <span>{formattedDuration}</span>
        </div>
      </div>
      <div className="flex items-center justify-center -mt-2 -mb-1">
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "size-7 mr-1.5",
            isShuffling ? "text-primary" : "text-muted-foreground",
          )}
          aria-label={`Shuffle ${isShuffling ? "on" : "off"}`}
          onClick={toggleShuffle}
        >
          <ShuffleIcon className="size-3.5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="size-8"
          aria-label="Skip backwords"
        >
          <SkipBackIcon className="size-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="size-8"
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
          className="size-8"
          aria-label="Skip forward"
        >
          <SkipForwardIcon className="size-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "size-7 ml-1.5",
            repeatMode !== "off" ? "text-primary" : "text-muted-foreground",
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
  );
}
