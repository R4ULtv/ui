import MusicPlayer from "@/registry/music-player/music-player";

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
