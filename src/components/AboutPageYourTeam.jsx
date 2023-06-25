import heritageImg from '../../public/assets/about/desktop/image-heritage.jpg'

function AboutPageYourTeam() {
  return (
    <article className="font-sparta px-[2rem] py-[1.5rem] desktop:py-[0px] desktop:px-[0px] text-dgray text-body tablet:mb-[14.5rem]  mb-[7rem] tablet:mt-[12.5rem] tablet:w-[573px] desktop:w-[1110px] desktop:flex desktop:gap-[8rem] mx-auto">
      <div className="mb-[4.75rem] tablet:hidden">
        <h1 className="text-h2-mb text-vdblue mb-[1.5rem]">
          Your team of professionals
        </h1>
        <p className="text-body"> 
          Our small team of world-class professionals will work with you every
          step of the way. Strong relationships are at the core of everything we
          do. This extends to the relationship our projects have with their
          surroundings.
        </p>
      </div>

      <div className='desktop:w-[445px]'>
        <hr className="w-[50px] mb-[4.3125rem] border-t border-dgray "></hr>

        <h2 className="text-h2-mb text-vdblue mb-[1.5rem] desktop:mb-[3rem] tablet:text-m ">
          Our<br></br> Heritage
        </h2>
        <p className="mb-[1.5rem] text-justify">
          Founded in 2007, we started as a trio of architects. Our complimentary
          skills and relentless attention to detail turned Arch into one of the
          most sought after boutique firms in the country.
        </p>
        <p className="mb-[1.5rem] text-justify">
          Specializing in Urban Design allowed us to focus on creating
          exceptional structures that live in harmony with their surroundings.
          We consider every detail from every surrounding element to inform our
          designs.
        </p>
        <p className="mb-[1.5rem] text-justify">
          Our small team of world-class professionals provides input on every
          project.
        </p>
      </div>
      <div className='hidden desktop:inline-flex'>
        <img className='w-[540px] h-[568px]' src={heritageImg} />
      </div>
    </article>
  );
}

export default AboutPageYourTeam;
