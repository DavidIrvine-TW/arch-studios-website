import React from 'react'

function ContactPageYourProjectTablet() {
  return (
    <div className="hidden tablet:inline mb-[4.75rem] relative">
        <p className="absolute top-[-100px] left-[100px] text-[7.5rem] desktop:top-[-120px] desktop:left-[-300px] desktop:text-xl text-vlgray font-bold tracking-[-3px] leading-[200px]">Contact</p>
        <hr className="w-[50px] h-[2px] border-t border-dgray mb-[4.5rem] desktop:mb-[3rem] mt-[5.5rem] desktop:mt-[10rem]" />
        <h1 className="text-h2-mb tablet:text-m text-vdblue mb-[2.5rem] ">
          Tell us about your project
        </h1>
        <p className="text-dgray text-body">
          We’d love to hear more about your project. Please, leave a message
          below or give us a call. We have two offices, one in Texas and one in
          Tennessee. If you find yourself nearby, come say hello!
        </p>
      </div>
  )
}

export default ContactPageYourProjectTablet