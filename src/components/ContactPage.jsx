import ContactPageHero from "./ContactPageHero"
import ContactPageYourProject from "./ContactPageYourProject"
import Footer from './Footer'
import ContactPageMap from "./ContactPageMap"
import ContactPageContactUs from "./ContactPageContactUs"
import {useState} from 'react'

function ContactPage({scrollToTop}) {
  const [center, setCenter] = useState([40.9994353685655,  -81.4947866213419]);

  return (
    <section className="fade-in w-[375px] tablet:w-[768px] desktop:w-[1440px] overflow-hidden mx-auto">
        <ContactPageHero/>
        <ContactPageYourProject setCenter={setCenter}/>
        <ContactPageMap center={center}/>
        <ContactPageContactUs/>
        <Footer scrollToTop={scrollToTop}/>
    </section>
  )
}

export default ContactPage