import Footer from './Footer'
import AboutPageHero from './AboutPageHero';
import AboutPageTheLeaders from './AboutPageTheLeaders';
import AboutPageYourTeam from './AboutPageYourTeam'

function AboutPage({burgerMenu, setBurgerMenu, scrollToTop}) {
  return (
    <section className='fade-in w-[375px] tablet:w-[768px] desktop:w-[1440px] overflow-hidden mx-auto'>
        <AboutPageHero burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />
        <AboutPageYourTeam scrollToTop={scrollToTop}/>
        <AboutPageTheLeaders scrollToTop={scrollToTop}/>
        <Footer scrollToTop={scrollToTop}/>
    </section>
  )
}

export default AboutPage