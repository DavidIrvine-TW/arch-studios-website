import React from "react";

function AboutPageYourTeamTablet() {
  return (
    <div className="hidden tablet:inline mb-[4.75rem] relative ">


    <p className="absolute top-[-100px] left-[100px] text-[7.5rem] desktop:top-[-120px] desktop:left-[-160px] desktop:text-xl text-vlgray font-bold tracking-[-3px] leading-[200px]">About</p>
    <hr className="w-[50px] h-[2px] border-t border-dgray mb-[4.5rem] desktop:mb-[3rem] mt-[5.5rem] desktop:mt-[10rem]" />
      <h1 className="text-h2-mb tablet:text-m text-vdblue mb-[2.5rem]">
        Your team of professionals
      </h1>
      <p className="text-dgray text-body">
        Our small team of world-class professionals will work with you every
        step of the way. Strong relationships are at the core of everything we
        do. This extends to the relationship our projects have with their
        surroundings.
      </p>
    </div>
  );
}

export default AboutPageYourTeamTablet;
