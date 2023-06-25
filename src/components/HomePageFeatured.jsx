import { Link } from "react-router-dom";
import arrow from "../../public/assets/icons/icon-arrow.svg";

const imgPaths = [
  {
    id: 1,
    path: "src/assets/portfolio/mobile/image-del-sol.jpg",
    pathtablet: "src/assets/portfolio/tablet/image-del-sol.jpg",
    pathdesktop: "src/assets/portfolio/desktop/image-del-sol.jpg",
    title: "Project Del Sol",
    date: "",
    extra: "View all projects",
    alt: "image of project",
  },
  {
    id: 2,
    path: "src/assets/portfolio/mobile/image-228b.jpg",
    pathtablet: "src/assets/portfolio/tablet/image-228b.jpg",
    pathdesktop: "src/assets/portfolio/desktop/image-228b.jpg",
    title: "228B Tower",
    date: "",
    extra: "View all projects",
    alt: "image of project",
  },
  {
    id: 3,
    path: "src/assets/portfolio/mobile/image-prototype.jpg",
    pathtablet: "src/assets/portfolio/tablet/image-prototype.jpg",
    pathdesktop: "src/assets/portfolio/desktop/image-prototype.jpg",
    title: "Le Prototype",
    date: "",
    extra: "View all projects",
    alt: "image of project",

  },
];

function HomePageFeatured({ scrollToTop }) {
  return (
    <article className="font-sparta px-[2rem] tablet:px-[0px] flex flex-col gap-[1.5rem] w-[375px] tablet:w-[573px] desktop:w-[1110px] mx-auto">

      <div className="mb-[1.5rem] tablet:mb-[5.5rem] tablet:flex justify-between items-center">
        <h4 className="text-bigideas text-vdblue tablet:text-m ">Featured</h4>
        <div>
          <Link onClick={scrollToTop} to="/portfolio">
            <button className=" hidden tablet:inline-flex hover:bg-dgray items-center justify-center gap-[1.5rem] w-[169px] h-[72px] bg-vdblue text-body text-white font-bold">
              See All
              <img src={arrow} />
            </button>
          </Link>
        </div>
      </div>





<div className="relative desktop:flex gap-[2rem]">
      {imgPaths.map((img, index) => (
        <div key={index} className="relative w-[311px] h-[240px] tablet:w-[573px] desktop:w-[350px] desktop:h-[560px] mb-[1.5rem]">
          <picture>
            <source srcSet={img.pathdesktop} media="(min-width: 1440px)" />
            <source srcSet={img.pathtablet} media="(min-width: 768px)" />
            <img className="absolute z-[-10]" src={img.path} alt={img.alt} />
          </picture>
          <div className="absolute inset-0 bg-overlay z-[-9]" />
          <Link onClick={scrollToTop} to="/portfolio"><div className="cursor-pointer pt-[9.5625rem] desktop:pt-[30rem]  mx-[1.5rem] ">
            <p className="text-s text-white">{img.title}</p>
            <p className="text-white text-body">{img.extra}</p>
          </div></Link>
          <p className="hidden tablet:block text-[15.5rem] absolute top-[-40px] right-[20px] text-vlgray font-bold opacity-30">{img.id}</p>
        </div>
      ))}

</div>

      <div>
        <Link onClick={scrollToTop} to="/portfolio">
          <button className="tablet:hidden hover:bg-dgray flex items-center justify-center gap-[1.5rem] w-full h-[72px] bg-vdblue text-body text-white font-bold">
            See All
            <img src={arrow} />
          </button>
        </Link>
      </div>
    </article>
  );
}

export default HomePageFeatured;
