import welcomeImg from "../../public/assets/home/desktop/image-welcome.jpg";

function HomeWelcomeSection() {
  return (
    <article className="mt-[4.5rem]  px-[2rem] mb-[7.0625rem] tablet:mb-[8.5rem] desktop:mb-[12rem] font-sparta tablet:mt-[5.5rem] tablet:px-[6rem] mx-auto">
      <hr className="w-[50px] h-[2px] border-t border-dgray mb-[4.25rem] tablet:hidden" />

      <p
        id="welcome-txt"
        className="relative desktop:bottom-[-110px] desktop:left-[55px] left-[10px] bottom-[-40px] text-[9.5rem] desktop:text-[15.625rem] text-vlgray font-bold tracking-[-3px] leading-[200px]"
      >
        Welcome
      </p>
      <div className="desktop:flex gap-[7rem]">
        <div className="desktop:mt-[100px]">
          <div className="desktop:w-[445px] desktop:ml-[16.6rem]">
            <h2 className="text-h2-mb text-vdblue mb-[1.5rem] tablet:text-m tablet:mb-[2.5rem]">
              Welcome to <br></br> Arch Studio{" "}
            </h2>
          </div>

          <div className="text-body text-dgray text-justify desktop:w-[445px] desktop:ml-[16.6rem]">
            <p className="mb-[1rem] tablet:mb-[1.5rem]">
              We have a unique network and skillset to help bring your projects
              to life. Our small team of highly skilled individuals combined
              with our large network put us in a strong position to deliver
              exceptional results.
            </p>
            <p className="mb-[1rem] tablet:mb-[1.5rem]">
              Over the past 10 years, we have worked on all kinds of projects.
              From stations to high-rise buildings, we create spaces that
              inspire and delight.
            </p>
            <p>
              We work closely with our clients so that we understand the
              intricacies of each project. This allows us to work in harmony the
              surrounding area to create truly stunning projects that will stand
              the test of time.
            </p>
          </div>
        </div>

        <div className="hidden desktop:block w-[350px] h-[568px]">
          <img src={welcomeImg} />
        </div>
      </div>
    </article>
  );
}

export default HomeWelcomeSection;
