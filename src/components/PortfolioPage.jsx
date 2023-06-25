import PortfolioPagePortfolio from "./PortfolioPagePortfolio";
import Footer from "./Footer";

function PortfolioPage({scrollToTop }) {
  return (
    <section className="fade-in w-[375px] tablet:w-[768px] desktop:w-[1440px] overflow-hidden mx-auto">
      <PortfolioPagePortfolio />
      <Footer scrollToTop={scrollToTop}/>
    </section>
  );
}

export default PortfolioPage;
