"use client";

import * as React from "react";

export interface Song {
  name: string;
  artists: Array<string>;
  album: { name: string; image: string };
  duration: number; // Duration in seconds
}

// Helper function to format time from seconds to MM:SS
export const formatTime = (timeInSeconds: number): string => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

export type RepeatMode = "off" | "track" | "context";

export interface UseMusicPlayerProps {
  song: Song | null;
}

export interface UseMusicPlayerReturn {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  progressPercentage: number;
  formattedCurrentTime: string;
  formattedDuration: string;
  isShuffling: boolean;
  repeatMode: RepeatMode;
  togglePlayPause: () => void;
  handleSliderChange: (value: number[]) => void;
  toggleShuffle: () => void;
  toggleRepeat: () => void;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
}

export function useMusicPlayer({
  song,
}: UseMusicPlayerProps): UseMusicPlayerReturn {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [isShuffling, setIsShuffling] = React.useState(false);
  const [repeatMode, setRepeatMode] = React.useState<RepeatMode>("off");

  const songDuration = song?.duration ?? 0;

  // Effect to handle song playback timing
  React.useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isPlaying && currentTime < songDuration) {
      interval = setInterval(() => {
        setCurrentTime((prevTime) => {
          if (prevTime < songDuration - 1) {
            return prevTime + 1;
          }
          if (repeatMode === "track") {
            return 0; // Restart track
          } else {
            // For "off" and "context", we'd normally move to next song or stop.
            // For now, just stop and set to duration.
            // "context" repeat would be handled by a playlist manager.
            setIsPlaying(false);
            return songDuration;
          }
        });
      }, 1000);
    } else if (currentTime >= songDuration && songDuration > 0) {
      if (repeatMode === "track" && isPlaying) {
        // If it was playing and repeat track is on
        setCurrentTime(0); // Restart
        // setIsPlaying(true); // It's already true, interval will pick it up.
      } else {
        setIsPlaying(false);
      }
    }

    return () => {
      clearInterval(interval);
    };
  }, [isPlaying, songDuration, currentTime, repeatMode]);

  React.useEffect(() => {
    if (song) {
      setCurrentTime(0); // Reset to beginning when song changes
      setIsPlaying(true); // Autoplay new song
    } else {
      // No song, reset state
      setCurrentTime(0);
      setIsPlaying(false);
    }
  }, [song]);

  const togglePlayPause = React.useCallback(() => {
    if (!song) return;

    if (currentTime >= songDuration && !isPlaying && songDuration > 0) {
      setCurrentTime(0);
      setIsPlaying(true);
    } else {
      setIsPlaying((prevIsPlaying) => !prevIsPlaying);
    }
  }, [currentTime, songDuration, isPlaying, song]);

  const handleSliderChangeExternal = (value: number[]) => {
    if (!song) return;
    const newTime = Math.floor((value[0] / 100) * songDuration);
    setCurrentTime(newTime);
    if (!isPlaying && newTime < songDuration) {
      setIsPlaying(true);
    }
  };

  const progressPercentage =
    songDuration > 0 ? (currentTime / songDuration) * 100 : 0;

  const toggleShuffle = React.useCallback(() => {
    setIsShuffling((prev) => !prev);
  }, []);

  const toggleRepeat = React.useCallback(() => {
    setRepeatMode((prevMode) => {
      if (prevMode === "off") return "context";
      if (prevMode === "context") return "track";
      return "off";
    });
  }, []);

  return {
    isPlaying,
    currentTime,
    duration: songDuration,
    progressPercentage,
    formattedCurrentTime: formatTime(currentTime),
    formattedDuration: formatTime(songDuration),
    isShuffling,
    repeatMode,
    togglePlayPause,
    handleSliderChange: handleSliderChangeExternal,
    toggleShuffle,
    toggleRepeat,
    setIsPlaying, // Exposing these if direct manipulation is needed
    setCurrentTime, // Exposing these if direct manipulation is needed
  };
}
