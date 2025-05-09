import MusicPlayer from "@/registry/music-player/music-player";
import MusicPlayerSpotify from "@/registry/music-player/music-player-spotify";

export const MusicPlayerExample = () => {
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
};

export const MusicPlayerSpotifyExample = () => {
  return (
    <MusicPlayerSpotify
      song={{
        name: "Plug Walk",
        artists: ["Rich The Kid"],
        album: {
          name: "The World Is Yours",
          image:
            "https://i.scdn.co/image/ab67616d00001e0264353426de6dfe0206f6d1d3",
        },
        duration: 175,
      }}
    />
  );
};
