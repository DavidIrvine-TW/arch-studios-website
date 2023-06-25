import heroImg from '../../public/assets/contact/mobile/image-hero.jpg'
import heroImgtablet from '../../public/assets/contact/tablet/image-hero.jpg'
import heroImgDesktop from '../../public/assets/contact/desktop/image-hero.jpg'
import MobileMenu from './MobileMenu'
import ContactPageYourProjectTablet from './ContactPageYourProjectTablet'

function ContactPageHero({burgerMenu}) {
  return (
  <div>
<div id="vertical-container" className="absolute top-0 w-[24px] flex flex-col gap-[2.5rem] items-center ml-[2rem]">
        <div id="vertical-line" className="border-l-2 h-[105px]"></div>
        <div id="vertical-text" className="text-[1.125rem] tracking-[18px] leading-[24px] text-mgray">CONTACT</div>
      </div>


    <article className='relative w-[375px] tablet:w-[573px] desktop:w-[1110px] mx-auto'>
        <MobileMenu burgerMenu={burgerMenu} />
        <picture>
            <source srcSet={heroImgDesktop} media="(min-width: 1440px)"/>
            <source srcSet={heroImgtablet} media="(min-width: 768px)"/>
            <img src={heroImg} className='relative z-[-11]'/>
        </picture>
        <div className='absolute top-0 left-0 w-[375px] h-[240px] tablet:w-[573px] tablet:h-[720px] desktop:w-[635px] desktop:h-[720px]'>
        <div className="absolute inset-0 bg-overlay z-[-9]" />
        </div>
        <div className='w-[343px] h-[45px] tablet:w-full tablet:h-[431px] absolute bottom-[-1px] left-0 tablet:left-[58px] desktop:left-[482px] desktop:w-[628px] desktop:h-[503px] desktop:pl-[7rem] px-[3.625rem] z-[-8] bg-white'>
        <ContactPageYourProjectTablet/>

        </div>
    </article>

  </div>
    






   
  )
}

export default ContactPageHero