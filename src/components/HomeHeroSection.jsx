import { Link } from "react-router-dom";
import heroImg from "../../public/assets/home/mobile/image-hero-paramour.jpg";
import heroImgTab from "../../public/assets/home/tablet/image-hero-paramour.jpg";
import heroImgDesk from "../../public/assets/home/desktop/image-hero-paramour.jpg";
import arrow from "../../public/assets/icons/icon-arrow.svg";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import HomePageHeroSlideOne from "./HomePageHeroSlideOne";
import HomePageHeroSlideTwo from "./HomePageHeroSlideTwo";
import HomePageHeroSlideThree from "./HomePageHeroSlidethree";
import HomePageHeroSlideFour from "./HomePageHeroSlideFour";

function HomeHeroSection({ burgerMenu, setBurgerMenu, scrollToTop }) {
  const [currentSlide, setCurrentSlide] = useState(1);

  const activeBtnStyles = "bg-vdblue text-white";

  const slideHandler = (buttonId) => {
    setCurrentSlide(buttonId);
    console.log("clicked");
  };

  return (
    <div>
      <div
        id="vertical-container"
        className="absolute top-0 w-[24px] flex flex-col gap-[2.5rem] items-center ml-[2rem]"
      >
        <div id="vertical-line" className="border-l-2 h-[105px]"></div>
        <div
          id="vertical-text"
          className="text-[1.125rem] tracking-[18px] leading-[24px] text-mgray"
        >
          HOME
        </div>
      </div>
      <article className="desktop:hidden relative w-[375px] h-[560px] tablet:w-[573px] tablet:h-[720px] desktop:w-[1110px] mx-auto overflow-hidden font-sparta">
        <picture>
          <source srcSet={heroImgDesk} media="(min-width: 1440px)" />
          <source srcSet={heroImgTab} media="(min-width: 768px)" />
          <img className="absolute z-[-10]" src={heroImg} />
        </picture>

        <div className="absolute inset-0 bg-overlay z-[-9]" />

        <div className="absolute top-0 pt-[7.25rem] px-[2rem] tablet:mx-[3.625rem] desktop:mx-[0px] desktop:ml-[11.8rem] tablet:pt-[11.5rem] desktop:w-[544px]">
          <h1 className="text-hero text-white mb-[0.6875rem] tablet:text-l">
            Project Paramour
          </h1>
          <p className="text-white text-body desktop:w-[445px]">
            Project made for an art museum near Southwest London. Project
            Paramour is a statement of bold, modern architecture.
          </p>
          <Link onClick={scrollToTop} to="/portfolio">
            <button className="hover:bg-dgray flex items-center justify-center gap-[1.5rem] w-[252px] h-[72px] mt-[5.1875rem] tablet:mt-[2.5rem] bg-vdblue text-white font-bold text-body">
              See Our Portfolio
              <img src={arrow} />
            </button>
          </Link>
        </div>

        <MobileMenu burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu}/>
      </article>

      <article className=" hidden desktop:block relative w-[375px] h-[560px] tablet:w-[573px] tablet:h-[720px] desktop:w-[1110px] mx-auto overflow-hidden font-sparta">
        {currentSlide === 1 && (
          <HomePageHeroSlideOne scrollToTop={scrollToTop} />
        )}
        {currentSlide === 2 && (
          <HomePageHeroSlideTwo scrollToTop={scrollToTop} />
        )}
        {currentSlide === 3 && (
          <HomePageHeroSlideThree scrollToTop={scrollToTop} />
        )}
        {currentSlide === 4 && (
          <HomePageHeroSlideFour scrollToTop={scrollToTop} />
        )}
      </article>

      <div className="hidden desktop:inline-flex relative top-[-80px] left-[85px]">
        <button
          onClick={() => slideHandler(1)}
          className={` w-[80px] h-[80px] flex justify-center items-center  font-bold ${
            currentSlide === 1 ? "bg-vdblue text-white" : "bg-white text-dgray hover:bg-vlgray hover:text-vdblue"
          }`}
        >
          01
        </button>
        <button
          onClick={() => slideHandler(2)}
          className={` w-[80px] h-[80px] flex justify-center items-center  font-bold ${
            currentSlide === 2 ? "bg-vdblue text-white" : "bg-white text-dgray hover:bg-vlgray hover:text-vdblue"
          }`}
        >
          02
        </button>
        <button
          onClick={() => slideHandler(3)}
          className={` w-[80px] h-[80px] flex justify-center items-center font-bold ${
            currentSlide === 3 ? "bg-vdblue text-white" : "bg-white text-dgray hover:bg-vlgray hover:text-vdblue"
          }`}
        >
          03
        </button>
        <button
          onClick={() => slideHandler(4)}
          className={` w-[80px] h-[80px] flex justify-center items-center font-bold ${
            currentSlide === 4 ? "bg-vdblue text-white" : "bg-white text-dgray"
          }`}
        >
          04
        </button>
      </div>
    </div>
  );
}

export default HomeHeroSection;
