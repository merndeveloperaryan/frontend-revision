import React from "react";

const SongCard = ({index, obj, handlePlaylist}) => {

  const {songName, artistName, image, isAdded} = obj;



  return (
    <div className="relative w-60 p-4 rounded-lg bg-zinc-500 text-white flex gap-2">
      <div className="w-20 h-20 rounded-xl bg-orange-400 overflow-hidden">
        <img src={image} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="w-44 p-1">
        <h2 className="font-semibold">{songName}</h2>
        <h3 className="text-zinc-300">{artistName}</h3>
      </div>
      <div onClick={()=> handlePlaylist(index)} className="absolute bottom-[-15%] left-[25%] w-fit px-3 py-2 rounded-full bg-orange-400 text-xs cursor-pointer">{isAdded? 'Remove song': 'Add to Favourite'}</div>
    </div>
  );
};

export default SongCard;
