import arrow from "../../public/assets/icons/icon-arrow.svg";
import { Link } from "react-router-dom";
import heroImg from "../../public/assets/home/mobile/image-hero-federal.jpg";
import heroImgTab from "../../public/assets/home/tablet/image-hero-federal.jpg";
import heroImgDesk from "../../public/assets/home/desktop/image-hero-federal.jpg";

function HomePageHeroSlideThree({ scrollToTop }) {
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
          Federal II Tower
        </h1>
        <p className="text-white text-body desktop:w-[445px]">
          A sequel theme project for a tower originally built in the 1800s. We
          achieved this with a striking look of brutal minimalism with modern
          touches.
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

export default HomePageHeroSlideThree;
