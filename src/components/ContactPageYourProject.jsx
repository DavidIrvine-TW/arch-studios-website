import arrow from "../../public/assets/icons/icon-arrow-dark.svg";

function ContactPageYourProject({ setCenter }) {
  const mainOffice = [40.9994353685655, -81.4947866213419];
  const office = [32.704626, -96.837628];

  const setLocationHandler = (coords) => {
    setCenter(coords);
  };

  return (
    <article className="font-sparta px-[2rem] py-[1.5rem] text-dgray text-body mb-[4.5rem] tablet:mt-[12.5rem] tablet:w-[573px] desktop:w-[1110px] desktop:px-[0px] desktop:py-[0px] mx-auto ">

      <div className="mb-[4.75rem] tablet:hidden">
        <h1 className="text-h2-mb text-vdblue mb-[1.5rem] tablet:text-m ">
          Tell us about your project
        </h1>
        <p className="text-body">
          We’d love to hear more about your project. Please, leave a message
          below or give us a call. We have two offices, one in Texas and one in
          Tennessee. If you find yourself nearby, come say hello!
        </p>
      </div>


      <hr className="w-[50px] mb-[4.3125rem] border-t border-dgray"></hr>




      <div id="contact--details--container" className="desktop:flex justify-evenly">
        
        <h2 className="text-h2-mb text-vdblue mb-[2.5rem] tablet:text-m">
          Contact<br></br> Details
        </h2>

        <div className="flex flex-col gap-[1rem] tablet:mb-[2.5rem] d">
          <div>
            <p className="font-bold text-body">Main Office</p>
          </div>
  
          <div className="tablet:flex tablet:justify-between desktop:flex desktop:flex-col ">
            <div>
              <p>Mail : &nbsp;&nbsp;archone@mail.com</p>
              <p>Address : &nbsp;&nbsp;1892 Chenoweth Drive TN </p>
              <p>Phone : &nbsp;&nbsp;123-456-3451</p>
            </div>

            <div className="mt-[2.688rem] mb-[2.5rem]">
              <button
                onClick={() => setLocationHandler(mainOffice)}
                className="hover:underline flex gap-[1.5rem] items-center font-bold text-vdblue"
              >
                View on Map <img src={arrow} />
              </button>
            </div>
          </div>
        
        </div>

        <div
          id="contact--details--container"
          className="flex flex-col gap-[1rem]"
        >
          <div>
            <p className="font-bold text-body">Office II</p>
          </div>

          <div className="tablet:flex tablet:justify-between tablet:items-center desktop:flex desktop:flex-col ">
            <div>
              <p>Mail : &nbsp;&nbsp;archtwo@mail.com</p>
              <p>Address : &nbsp;&nbsp;3399 Wines Lane TX </p>
              <p>Phone : &nbsp;&nbsp;832-123-4321</p>
            </div>

            <div className="mt-[2.688rem]">
              <button
                onClick={() => setLocationHandler(office)}
                className="hover:underline flex gap-[1.5rem] items-center font-bold text-vdblue"
              >
                View on Map <img src={arrow} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </article>
  );
}

export default ContactPageYourProject;
