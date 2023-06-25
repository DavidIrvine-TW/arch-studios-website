import HomeHeroSection from "./HomeHeroSection";
import HomePageBigIdeas from "./HomePageBigIdeas";
import HomePageFeatured from "./HomePageFeatured";
import HomeWelcomeSection from "./HomeWelcomeSection";
import Footer from "./Footer";

function HomePage({scrollToTop }) {
  
  return (
    <section className="fade-in w-[375px] tablet:w-[768px] desktop:w-[1440px] overflow-hidden mx-auto">
      <HomeHeroSection  scrollToTop={scrollToTop}/>
      <HomeWelcomeSection scrollToTop={scrollToTop}/>
      <HomePageBigIdeas scrollToTop={scrollToTop}/>
      <HomePageFeatured scrollToTop={scrollToTop}/>
      <Footer scrollToTop={scrollToTop}/>
    </section>
  );
}

export default HomePage;
