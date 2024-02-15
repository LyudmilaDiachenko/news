// Якщо виводимо одне фото
// import React from 'react'
// import baner from "../assets/193729991.webp"

// export default function Baner() {
//   return (
//     <div>
//         <img src={baner} alt="Photo" />
//     </div>
//   )
// }

// Якщо виводимо багато фото
import React from "react";
import images from "../utils/images.js";
const Baner = () => {
  const selectedImage = images[0];
  const selectedImage2 = images[1];
  const selectedImage3 = images[2];
  return (
    <div>
      <img src={selectedImage} alt="" />
      <img src={selectedImage2} alt="" />
      <img src={selectedImage3} alt="" />
    </div>
  );
};
export default Baner