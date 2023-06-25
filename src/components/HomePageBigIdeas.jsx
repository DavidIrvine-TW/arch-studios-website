import { Link } from 'react-router-dom';
import smallTeamImg from '../../public/assets/home/mobile/image-small-team.jpg'
import smallTeamImgDesk from '../../public/assets/home/desktop/image-small-team.jpg'
import smallTeamImgTab from '../../public/assets/home/tablet/image-small-team.jpg'
import arrow from "../../public/assets/icons/icon-arrow.svg";

function HomePageBigIdeas({scrollToTop}) {

  return (
    <article className='relative w-[375px] tablet:w-[573px] h-[560px] desktop:w-[1110px] mx-auto overflow-hidden font-sparta mb-[4.25rem] tablet:mb-[13rem]'>
      <picture>
        <source srcSet={smallTeamImgDesk} media="(min-width: 1440px)"/>
        <source srcSet={smallTeamImgTab} media="(min-width: 768px)"/>
      <img className="absolute z-[-10]" src={smallTeamImg}/>
      </picture>
       
        <div className="absolute inset-0 bg-overlay z-[-9]" />
        <div className='px-[2rem] py-[11.3125rem] tablet:px-[3.5rem] desktop:px-[12rem]'>
        <h3 className='text-bigideas tablet:text-m text-white w-[300px] tablet:w-[445px]'>Small team, big ideas</h3>
        <Link onClick={scrollToTop} to="/about"><button className="hover:bg-dgray flex items-center justify-center gap-[1.5rem] w-[187px] h-[72px] mt-[1.5rem] bg-vdblue text-white font-bold text-body">
            About Us
            <img src={arrow} />
          </button></Link>
        </div>     
    </article>
  )
}

export default HomePageBigIdeas