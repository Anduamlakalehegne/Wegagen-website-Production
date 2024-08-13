// // src/components/Pages/JinglePlayer.js
// import React, { useEffect, useState } from 'react';
// import ReactPlayer from 'react-player';

// const JinglePlayer = () => {

//   const [isPlaying, setIsPlaying] = useState(false);

//   useEffect(() => {
//     setIsPlaying(true);
//   }, []);

//   return (
//     <ReactPlayer
//       url="/jingle2.mp3"
//       playing={isPlaying}
//       loop
//       volume={0.5}
//       width="100%"
//       height="50px"
//       controls
//     />
//   );
// };

// export default JinglePlayer;