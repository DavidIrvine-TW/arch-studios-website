import { Link } from "react-router-dom";
import heroImg from "../../public/assets/home/mobile/image-hero-paramour.jpg";
import heroImgTab from "../../public/assets/home/tablet/image-hero-paramour.jpg"
import heroImgDesk from "../../public/assets/home/desktop/image-hero-paramour.jpg"
import arrow from "../../public/assets/icons/icon-arrow.svg";

function HomePageHeroSlideOne({scrollToTop}) {
  return (
    <div className="fade-in">
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
          Project made for an art museum near Southwest London. Project Paramour
          is a statement of bold, modern architecture.
        </p>
        <Link onClick={scrollToTop} to="/portfolio">
          <button className="hover:bg-dgray flex items-center justify-center gap-[1.5rem] w-[252px] h-[72px] mt-[5.1875rem] tablet:mt-[2.5rem] bg-vdblue text-white font-bold text-body">
            See Our Portfolio
            <img src={arrow} />
          </button>
        </Link>
      </div>
      </div>
  );
}

export default HomePageHeroSlideOne;
