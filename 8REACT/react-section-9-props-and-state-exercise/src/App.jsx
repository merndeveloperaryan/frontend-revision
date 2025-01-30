import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SongCard from "./components/SongCard";

// App Component Starts Here
const App = () => {
  const songsData = [
    {
      songName: "O re piya",
      artistName: "Rahat Fateh Ali Khan",
      image:
        "https://plus.unsplash.com/premium_photo-1720794774002-53c5bb1b18ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29uZ3MlMjBhbGJ1bSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
      isAdded: false,
    },
    {
      songName: "aaj se meri galiya ",
      artistName: "Arijit Singh",
      image:
        "https://images.unsplash.com/photo-1624535243357-34369104228c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29uZ3MlMjBhbGJ1bSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
      isAdded: false,
    },
    {
      songName: "Hua hai aaj pehli baar",
      artistName: "Armaan Malik",
      image:
        "https://plus.unsplash.com/premium_photo-1730112244094-9a79bb0c473d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c29uZ3MlMjBhbGJ1bSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
      isAdded: false,
    },
    {
      songName: "Tere bin nahi lagda",
      artistName: "Nusrat Fateh Ali Khan",
      image:
        "https://images.unsplash.com/photo-1500099817043-86d46000d58f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c29uZ3MlMjBhbGJ1bSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
      isAdded: false,
    },
    {
      songName: "Tum hi ho",
      artistName: "Arijit Singh",
      image:
        "https://images.unsplash.com/photo-1528569937393-ee892b976859?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNvbmdzJTIwYWxidW0lMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
      isAdded: false,
    },
  ];

  const [songs, setSongs] = useState(songsData);

  const handlePlaylist = (index) => {

    setSongs(
      songs.map((song, ind) => {
        return index === ind ? { ...song, isAdded: !song.isAdded } : song;
      })
    );
  };

  

  return (
    <div className="w-full h-screen bg-zinc-400 px-5">
      <Navbar songs={songs} />
      <div className="w-full p-5 flex flex-wrap gap-5">
        {songs.map((song, index) => (
          <SongCard
            key={index}
            index={index}
            obj={song}
            handlePlaylist={handlePlaylist}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
