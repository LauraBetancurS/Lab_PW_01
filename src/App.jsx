import Navbar from "./components/Navbar/Navbar.jsx";
import { navbarData } from "./data/navLinks.js";


function App() {
  return (
    <div>

      
      <Navbar
        logoSrc={navbarData.logo.src}
        logoAlt={navbarData.logo.alt}
        links={navbarData.links}
      />

      <main>
        
      </main>
    </div>
  );
}

export default App;
