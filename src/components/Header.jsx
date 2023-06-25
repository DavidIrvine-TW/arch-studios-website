import logo from "../../public/assets/logo.svg";
import { Link } from "react-router-dom";

function Header(props) {
  const { burgerMenu, setBurgerMenu } = props;

  const burgerMenuState = burgerMenu ? "cross" : " ";

  const burgerMenuHandler = () => {
    setBurgerMenu((prev) => !prev);
    console.log('hello')
  };
  const homeButtonHandlder = () => {
    setBurgerMenu(false);
  };

  return (
    <header className="p-[2rem] relative mx-auto tablet:px-[44px] tablet:py-[3.5rem]">
     
      <nav className="flex justify-between items-center tablet:w-[573px] desktop:w-[1110px] mx-auto">
        <div className="flex tablet:w-[573px] desktop:w-[555px] items-center justify-between gap-[5rem]">

       
          <Link onClick={homeButtonHandlder} to="/">
            <img className="w-[77px] h-[33px]" src={logo} />
          </Link>
          <ul id="header-menu" className="flex flex-row gap-[3.8rem] text-body text-mgray font-bold ">
            <li className="cursor-pointer  hover:text-vdblue"><Link to="/portfolio">Portfolio</Link></li>
            <li className="cursor-pointer  hover:text-vdblue"><Link to="/about">About Us</Link></li>
            <li className="cursor-pointer  hover:text-vdblue"><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div
          onClick={burgerMenuHandler}
          className={`${burgerMenuState} relative hamburger-menu`}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
