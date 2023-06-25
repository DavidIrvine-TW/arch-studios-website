import React from 'react';

const leaderImgPath = [
  {
    path: 'src/assets/about/desktop/avatar-jake.jpg',
    title: 'Chief Architect',
    name: 'Jake Richards',
  },
  {
    path: 'src/assets/about/desktop/avatar-thompson.jpg',
    title: 'Head of Finance',
    name: 'Thompson Smith',
  },
  {
    path: 'src/assets/about/desktop/avatar-jackson.jpg',
    title: 'Lead Designer',
    name: 'Jackson Rourke',
  },
  {
    path: 'src/assets/about/desktop/avatar-maria.jpg',
    title: 'Senior Architect',
    name: 'Maria Simpson',
  },
];

function AboutPageTheLeaders() {
  return (
    <article className="px-[2rem] mb-[15rem] tablet:mb-[5rem] tablet:w-[573px] desktop:w-[1110px] mx-auto tablet:px-[0px] desktop:flex desktop:gap-[8rem] desktop:mb-[0rem]">
      
      <h3 className="text-h2-mb text-vdblue mb-[3.4375rem] tablet:mb-[5rem] tablet:text-m">
        The <br></br> Leaders
      </h3>

      <div className=" flex flex-col tablet:flex-row flex-wrap gap-[5rem] tablet:gap-[0.8rem] desktop:gap-[2rem]">
        {leaderImgPath.map((leader, index) => (
          <div className='w-[311px] tablet:w-[280px] tablet:mb-[5rem] desktop:w-[350px]' key={index}>
            <img src={leader.path} alt={`Leader: ${leader.name}`} />
            <p className="text-s text-vdblue mt-[1rem]">{leader.name}</p>
            <p className="text-body text-dgray">{leader.title}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export default AboutPageTheLeaders;
