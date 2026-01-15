import '../styles/global.css';
import { ReactNode } from 'react';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;300;400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.4.2/uicons-brands/css/uicons-brands.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.4.2/uicons-solid-straight/css/uicons-solid-straight.css"
        />
      </head>
      <body>
        <header>
          <nav className="siteNav">
            <a href="#home" className="siteBrand">Nadya</a>
            <div className="siteLinks">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="siteIcons">
              <a href="https://github.com/nadshafy" target="_blank" rel="noreferrer" aria-label="GitHub">
                <i className="fi fi-brands-github"></i>
              </a>
              <a href="mailto:nadshafy@gmail.com" aria-label="Email">
                <i className="fi fi-ss-envelope"></i>
              </a>
            </div>
          </nav>
        </header>

        <main>{children}</main> 

        <footer className="siteFooter">
          <p>© {new Date().getFullYear()} Nadya Shafwah Yusuf. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
