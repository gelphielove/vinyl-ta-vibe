
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function VinylApp() {
  const [track, setTrack] = useState({
    name: "Nom de la chanson",
    artist: "Nom de l'artiste",
    albumCover: "/placeholder.jpg",
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f4f4f4] to-[#eaeaea]">
      <div className="relative w-[300px] h-[300px]">
        <motion.div
          className="absolute rounded-full w-full h-full bg-black overflow-hidden shadow-xl"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          style={{
            backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.4), transparent 70%), url('/grain.png')`,
            backgroundSize: "cover",
          }}
        >
          <div className="absolute top-1/2 left-1/2 w-[100px] h-[100px] -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden border-[4px] border-white shadow-inner">
            <img
              src={track.albumCover}
              alt="album cover"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
        <div className="absolute bottom-[-60px] w-full text-center">
          <p className="text-sm font-medium text-black/80">
            {track.name} - {track.artist}
          </p>
        </div>
      </div>
    </div>
  );
}
