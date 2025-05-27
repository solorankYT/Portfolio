// import { useEffect, useState } from "react";

// export default function CursorLight() {
//   const [position, setPosition] = useState({ x: -100, y: -100 });

//   // useEffect(() => {
//   //   const moveLight = (e) => {
//   //     setPosition({ x: e.clientX, y: e.clientY });
//   //   };
//   //   window.addEventListener("mousemove", moveLight);
//   //   return () => {
//   //     window.removeEventListener("mousemove", moveLight);
//   //   };
//   // }, []);

//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: position.y,
//         left: position.x,
//         width: 150,
//         height: 150,
//         pointerEvents: "none",
//         borderRadius: "50%",
//         transform: "translate(-50%, -50%)",
//         background:
//           "radial-gradient(circle, rgba(255, 255, 200, 0.6) 0%, rgba(255,255,200,0) 70%)",
//         mixBlendMode: "screen",
//         transition: "top 0.1s ease, left 0.1s ease",
//         zIndex: 9999,
//       }}
//     />
//   );
// }
