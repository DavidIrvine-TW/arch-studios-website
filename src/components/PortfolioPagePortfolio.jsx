import MobileMenu from "./MobileMenu";


const imgPaths = [
  {
    path: "./assets/portfolio/mobile/image-seraph.jpg",
    pathtablet: "./assets/portfolio/tablet/image-seraph.jpg",
    pathdesktop: "./assets/portfolio/desktop/image-seraph.jpg",
    title: "Seraph Station",
    date: "September 2019",
    extra: "View all projects",
    alt: "image of project",
  },
  {
    path: "./assets/portfolio/mobile/image-eebox.jpg",
    pathtablet: "./assets/portfolio/tablet/image-eebox.jpg",
    pathdesktop: "./assets/portfolio/desktop/image-eebox.jpg",
    title: "Eebox Building",
    date: "August 2017",
    extra: "View all projects",
    alt: "image of project",
  },
  {
    path: "./assets/portfolio/mobile/image-federal.jpg",
    pathtablet: "./assets/portfolio/tablet/image-federal.jpg",
    pathdesktop: "./assets/portfolio/desktop/image-federal.jpg",
    title: "Federal Building",
    date: "March 2017",
    extra: "View all projects",
    alt: "image of project",
  },
  {
    path: "./assets/portfolio/mobile/image-del-sol.jpg",
    pathtablet: "./assets/portfolio/tablet/image-del-sol.jpg",
    pathdesktop: "./assets/portfolio/desktop/image-del-sol.jpg",
    title: "Project Del Sol",
    date: "January 2016",
    extra: "View all projects",
    alt: "image of project",
  },
  {
    path: "./assets/portfolio/mobile/image-prototype.jpg",
    pathtablet: "./assets/portfolio/tablet/image-prototype.jpg",
    pathdesktop: "./assets/portfolio/desktop/image-prototype.jpg",
    title: "Le Prototype",
    date: "October 2015",
    extra: "View all projects",
    alt: "image of project",
  },
  {
    path: "./assets/portfolio/mobile/image-228b.jpg",
    pathtablet: "./assets/portfolio/tablet/image-228b.jpg",
    pathdesktop: "./assets/portfolio/desktop/image-228b.jpg",
    title: "228B Tower",
    date: "April 2015",
    extra: "View all projects",
    alt: "image of project",
  },
  {
    path: "./assets/portfolio/mobile/image-edelweiss.jpg",
    pathtablet: "./assets/portfolio/tablet/image-edelweiss.jpg",
    pathdesktop: "./assets/portfolio/desktop/image-edelweiss.jpg",
    title: "Hotel Edelweiss",
    date: "December 2013",
    extra: "View all projects",
    alt: "image of project",
  },
  {
    path: "./assets/portfolio/mobile/image-netcry.jpg",
    pathtablet: "./assets/portfolio/tablet/image-netcry.jpg",
    pathdesktop: "./assets/portfolio/desktop/image-netcry.jpg",
    title: "Netcry Tower",
    date: "August 2012",
    extra: "View all projects",
    alt: "image of project",
  },
  {
    path: "./assets/portfolio/mobile/image-hypers.jpg",
    pathtablet: "./assets/portfolio/tablet/image-hypers.jpg",
    pathdesktop: "./assets/portfolio/desktop/image-hypers.jpg",
    title: "Hypers",
    date: "January 2012",
    extra: "View all projects",
    alt: "image of project",
  },
  {
    path: "./assets/portfolio/mobile/image-sxiv.jpg",
    pathtablet: "./assets/portfolio/tablet/image-sxiv.jpg",
    pathdesktop: "./assets/portfolio/desktop/image-sxiv.jpg",
    title: "SXIV Tower",
    date: "March 2011",
    extra: "View all projects",
    alt: "image of project",
  },
  {
    path: "./assets/portfolio/mobile/image-trinity.jpg",
    pathtablet: "./assets/portfolio/tablet/image-trinity.jpg",
    pathdesktop: "./assets/portfolio/desktop/image-trinity.jpg",
    title: "Trinity Tower",
    date: "September 2010",
    extra: "View all projects",
    alt: "image of project",
  },
  {
    path: "./assets/portfolio/mobile/image-paramour.jpg",
    pathtablet: "./assets/portfolio/tablet/image-paramour.jpg",
    pathdesktop: "./assets/portfolio/desktop/image-paramour.jpg",
    title: "Project Paramour",
    date: "Febuary 2008",
    extra: "View all projects",
    alt: "image of project",
  },
];

function PortfolioPagePortfolio({ burgerMenu }) {
  return (
    <div>
      <div id="vertical-container" className="absolute top-0 w-[24px] flex flex-col gap-[2.5rem] items-center ml-[2rem]">
        <div id="vertical-line" className="border-l-2 h-[105px]"></div>
        <div id="vertical-text" className="text-[1.125rem] tracking-[18px] leading-[24px] text-mgray">PORTFOLIO</div>
      </div>

    
    <article className="relative w-[375px] tablet:w-[573px] desktop:w-[1110px] overflow-hidden px-[2rem] tablet:px-[0px] mx-auto ">
      <MobileMenu burgerMenu={burgerMenu} />
      <ul className="flex flex-col gap-[1.5rem] relative desktop:flex-row desktop:flex-wrap">
        {imgPaths.map((img, index) => (
          <li key={index}  className="cursor-pointer relative w-[311px] h-[240px] tablet:w-full desktop:w-[350px] desktop:h-[560px]">
            
            <picture>
            <source srcSet={img.pathdesktop} media="(min-width: 1440px)" />
              <source srcSet={img.pathtablet} media="(min-width: 768px)" />
              <img className="absolute z-[-11]" src={img.path} alt={img.alt} />
            </picture>
            <div className="absolute inset-0 bg-overlay z-[-9]" />
            <div className="absolute inset-0 hover:bg-vlgrayoverlay  cursor-pointer" />
            <div className="pt-[9.5rem] desktop:pt-[28rem] pb-[1.5rem] mx-[1.5rem] ">
              <p className="text-s text-white relative z-[-8]">{img.title}</p>
              <p className="text-white text-body relative z-[-8]">{img.date}</p>
            </div>
  
          </li>
        ))}
      </ul>
    </article>
    </div>
  );
}

export default PortfolioPagePortfolio;
