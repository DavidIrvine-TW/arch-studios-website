import arrow from "../../public/assets/icons/icon-arrow.svg";
import logowhite from "../../public/assets/logowhite.svg";
import { Link } from "react-router-dom";

function Footer({ scrollToTop }) {
  return (
    <footer className="mt-[8.25rem] desktop:mt-[12.5rem] bg-lgray relative pb-[3rem] tablet:w-[612px] tablet:h-[120px] desktop:h-[200px] tablet:pb-[0rem] tablet:inline-flex desktop:w-[950px] desktop:ml-[10.5rem] items-center mx-auto">
      <div className="w-[120px] h-[120px] desktop:w-[200px] desktop:h-[200px] bg-vdblue flex items-center justify-center relative top-[-60px] mx-auto tablet:static tablet:mx-[0px] ">
        <img className="w-[58px] h-[24px] desktop:w-[96px] desktop:h-[40px]" src={logowhite} />
      </div>

      <ul className="px-[9rem] tablet:px-[0px] tablet:mx-[2.5rem] desktop:mx-[5rem] tablet:w-[313px] text-center flex flex-col gap-[2rem] desktop:gap-[3.813rem] font-bold text-body text-dgray cursor-pointer  tablet:flex-row tablet:justify-evenly">
        <li className="hover:text-vdblue">
          <Link onClick={scrollToTop} to="/portfolio">
            Portfolio
          </Link>
        </li>
        <li className="hover:text-vdblue">
          <Link onClick={scrollToTop} to="/about">
            About
          </Link>
        </li>
        <li className="hover:text-vdblue">
          <Link onClick={scrollToTop} to="/contact">
            Contact
          </Link>
        </li>
      </ul>

      <div className=" w-[252px] h-[72px] mt-[3.25rem] tablet:absolute tablet:top-[-28px] desktop:top-[10px] tablet:right-[-155px] mx-auto">
        <Link onClick={scrollToTop} to="/portfolio">
          <button className="hover:bg-dgray flex items-center justify-center w-full h-full gap-[1.5rem] bg-vdblue text-white font-bold mx-auto">
            See Our Portfolio
            <img src={arrow} />
          </button>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
