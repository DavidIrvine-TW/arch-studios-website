import PortfolioPagePortfolio from "./PortfolioPagePortfolio";
import Footer from "./Footer";

function PortfolioPage({ burgerMenu, setBurgerMenu, scrollToTop }) {
  return (
    <section className="fade-in w-[375px] tablet:w-[768px] desktop:w-[1440px] overflow-hidden mx-auto">
      <PortfolioPagePortfolio burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu}/>
      <Footer scrollToTop={scrollToTop}/>
    </section>
  );
}

export default PortfolioPage;
