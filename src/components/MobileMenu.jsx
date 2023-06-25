import { Link } from "react-router-dom";
import { useEffect } from "react";

function MobileMenu({ burgerMenu, setBurgerMenu }) {
  const burgerMenuSlide = burgerMenu ? "slide-in " : "slide-out";
  const burgerMenuVisible = burgerMenu ? "" : "hidden";
  const overlayVisible = burgerMenu ? "" : "hidden";

  
  const burgerMenuHandler = () => {
    setBurgerMenu((prev) => !prev); 
  };

  useEffect(() => {
    return () => {
      burgerMenuHandler();
    };
  }, []);

  return (
    <>
      <div
        className={`${overlayVisible} top-0 bottom-0 left-0 right-0 bg-overlay absolute z-[99] menu-overlay`}
      />
      <ul
        className={`menu-list ${burgerMenuSlide} ${burgerMenuVisible} relative z-[100] w-[343px] font-sparta text-s font-bold ml-[2rem] px-[3rem] py-[2rem] bg-vlgray`}
      >
        <Link to="/portfolio">
          <li
            onClick={burgerMenuHandler}
            className="mb-[1rem] cursor-pointer hover:underline relative z-100"
          >
            Portfolio
          </li>
        </Link>
        <Link to="/about">
          <li
            onClick={burgerMenuHandler}
            className="mb-[1rem] cursor-pointer hover:underline relative z-100"
          >
            About Us
          </li>
        </Link>
        <Link to="/contact">
          <li
            onClick={burgerMenuHandler}
            className="cursor-pointer hover:underline relative  z-100"
          >
            Contact
          </li>
        </Link>
      </ul>
    </>
  );
}

export default MobileMenu;
