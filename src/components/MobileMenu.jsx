import { Link } from "react-router-dom";

function MobileMenu(props) {

  const { burgerMenu, setBurgerMenu } = props;
  const burgerMenuSlide = burgerMenu ? "slide-in " : "slide-out";
  const burgerMenuVisible = burgerMenu ? '' : 'hidden'
  const overlayVisible = burgerMenu ? "" : "hidden";
  

  const burgerMenuHandler = () => {
    setBurgerMenu((prev) => !prev);
  };
  return (
    <>
     <div className={`${overlayVisible} top-0 bottom-0 left-0 right-0 bg-overlay absolute z-[99] menu-overlay`}/>
      <ul
        className={`menu-list ${burgerMenuSlide} ${burgerMenuVisible} relative z-[100] w-[343px] font-sparta text-s font-bold ml-[2rem] px-[3rem] py-[2rem] bg-vlgray`}
      >
        <li className="mb-[1rem] cursor-pointer hover:underline relative z-100"><Link onClick={burgerMenuHandler} to="/portfolio">Portfolio</Link></li>
        <li className="mb-[1rem] cursor-pointer hover:underline relative z-100"><Link onClick={burgerMenuHandler} to="/about">About Us</Link></li>
        <li className="cursor-pointer hover:underline relative  z-100"><Link onClick={burgerMenuHandler} to="/contact">Contact</Link></li>
      </ul>
    </>
  );
}

export default MobileMenu;
