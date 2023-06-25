import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import PortfolioPage from "./components/PortfolioPage";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [burgerMenu, setBurgerMenu] = useState(false);
  // remove vertical scroll when mobile menu is visible
  const mobileMenuOverflowScreen = burgerMenu ? "h-screen" : "min-h-screen ";

  // return to top of each page when button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      id="wrapper"
      className={`${mobileMenuOverflowScreen}  overflow-hidden mx-auto desktop:w-[1440px] border`}
    >
      <Header burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
      <MobileMenu burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu}/>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                burgerMenu={burgerMenu}
                setBurgerMenu={setBurgerMenu}
                scrollToTop={scrollToTop}
              />
            }
          />
          <Route
            path="/portfolio"
            element={
              <PortfolioPage
                burgerMenu={burgerMenu}
                setBurgerMenu={setBurgerMenu}
                scrollToTop={scrollToTop}
              />
            }
          />
          <Route
            path="/about"
            element={
              <AboutPage
                burgerMenu={burgerMenu}
                setBurgerMenu={setBurgerMenu}
                scrollToTop={scrollToTop}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <ContactPage
                burgerMenu={burgerMenu}
                setBurgerMenu={setBurgerMenu}
                scrollToTop={scrollToTop}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
