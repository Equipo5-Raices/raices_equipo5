/* eslint-disable react/jsx-no-comment-textnodes */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="./Logo/Logo.jsx">
          <img src="/src/assets/logo marca personal negocio elegante profesional (4).png" alt="Logo" />
        </a>
        </div>

        <form className="form-search">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="currentColor" d="m479.6 399.716l-81.084-81.084l-62.368-25.767A175.014 175.014 0 0 0 368 192c0-97.047-78.953-176-176-176S16 94.953 16 192s78.953 176 176 176a175.034 175.034 0 0 0 101.619-32.377l25.7 62.2l81.081 81.088a56 56 0 1 0 79.2-79.195ZM48 192c0-79.4 64.6-144 144-144s144 64.6 144 144s-64.6 144-144 144S48 271.4 48 192Zm408.971 264.284a24.028 24.028 0 0 1-33.942 0l-76.572-76.572l-23.894-57.835l57.837 23.894l76.573 76.572a24.028 24.028 0 0 1-.002 33.941Z"/></svg>
           <input type="text" placeholder="Buscar"/>
        </form>

        <div className="bell">
          <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="currentColor" d="M223.05 69.33a6 6 0 0 1-8.05-2.57a96 96 0 0 0-34.2-37.68a6 6 0 0 1 6.4-10.15a109.26 109.26 0 0 1 38.41 42.31a6 6 0 0 1-2.56 8.09ZM41 66.76a96 96 0 0 1 34.2-37.68a6 6 0 0 0-6.4-10.15a109.26 109.26 0 0 0-38.41 42.31A6 6 0 1 0 41 66.76Zm179 110.18A14 14 0 0 1 208 198h-42.5a38 38 0 0 1-75 0H48a14 14 0 0 1-12.06-21.06C45.13 161.09 50 138.63 50 112a78 78 0 0 1 156 0c0 27 4.74 48.86 14.08 64.94ZM153.29 198h-50.58a26 26 0 0 0 50.58 0Zm56.42-15C199.29 165 194 141.15 194 112a66 66 0 0 0-132 0c0 29.16-5.29 53-15.71 71a2 2 0 0 0 0 2a1.9 1.9 0 0 0 1.7 1H208a1.9 1.9 0 0 0 1.7-1a2 2 0 0 0 .01-2Z"/></svg>
          </a>
        </div>
    </nav>
  );
}

export { NavBar };



// // eslint-disable-next-line no-unused-vars
// import React from 'react';
// import './NavBar.css';

// function NavBar() {
//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <a href="./Logo/Logo.jsx">
//           <img src="/src/assets/logo marca personal negocio elegante profesional (4).png" alt="Logo"/>
//         </a>

//         <form className="form-search">
//         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="currentColor" d="m479.6 399.716l-81.084-81.084l-62.368-25.767A175.014 175.014 0 0 0 368 192c0-97.047-78.953-176-176-176S16 94.953 16 192s78.953 176 176 176a175.034 175.034 0 0 0 101.619-32.377l25.7 62.2l81.081 81.088a56 56 0 1 0 79.2-79.195ZM48 192c0-79.4 64.6-144 144-144s144 64.6 144 144s-64.6 144-144 144S48 271.4 48 192Zm408.971 264.284a24.028 24.028 0 0 1-33.942 0l-76.572-76.572l-23.894-57.835l57.837 23.894l76.573 76.572a24.028 24.028 0 0 1-.002 33.941Z"/></svg>
//           <input type="text" placeholder="Buscar" />
//         </form>

//         <div className="bell">
//           <a href="#">
//           <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="currentColor" d="M223.05 69.33a6 6 0 0 1-8.05-2.57a96 96 0 0 0-34.2-37.68a6 6 0 0 1 6.4-10.15a109.26 109.26 0 0 1 38.41 42.31a6 6 0 0 1-2.56 8.09ZM41 66.76a96 96 0 0 1 34.2-37.68a6 6 0 0 0-6.4-10.15a109.26 109.26 0 0 0-38.41 42.31A6 6 0 1 0 41 66.76Zm179 110.18A14 14 0 0 1 208 198h-42.5a38 38 0 0 1-75 0H48a14 14 0 0 1-12.06-21.06C45.13 161.09 50 138.63 50 112a78 78 0 0 1 156 0c0 27 4.74 48.86 14.08 64.94ZM153.29 198h-50.58a26 26 0 0 0 50.58 0Zm56.42-15C199.29 165 194 141.15 194 112a66 66 0 0 0-132 0c0 29.16-5.29 53-15.71 71a2 2 0 0 0 0 2a1.9 1.9 0 0 0 1.7 1H208a1.9 1.9 0 0 0 1.7-1a2 2 0 0 0 .01-2Z"/></svg>
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export { NavBar };












