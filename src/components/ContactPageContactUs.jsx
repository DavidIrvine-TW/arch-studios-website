import React from "react";
import arrow from "../../public/assets/icons/icon-arrow.svg";
import { useState } from "react";

function ContactPageContactUs() {
  const inputStyle = { fontSize: "20px" };
  const [contactName, setContactName] = useState(""); // true
  const [validName, setValidName] = useState(true);
  const [contactNameError, setContactNameError] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true); // true
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [thankYouMessage, setThankYouMessage] = useState(false);
  const [messageContent, setMessageContent] = useState(""); //true
  const [messageErrorMessage, setMessageErrorMessage] = useState("");
  const [validMessage, setValidMessage] = useState(true);

  const nameChangeHandler = (e) => {
    setContactName(e.target.value.trim());
  };
  const emailChangeHandler = (e) => {
    setContactEmail(e.target.value.trim());
  };
  const messageChangeHandler = (e) => {
    setMessageContent(e.target.value.trim());
  };

  //form submit handler
  const formSubmitHandler = (event) => {
    event.preventDefault();
    let isValid = true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (thankYouMessage === true) {
      return;
    }

    if (!contactName) {
      setContactNameError("Can't be empty!");
      setValidName(false);
      isValid = false;
    } else {
      setContactNameError("");
      setValidName(true);
    }
    if (!contactEmail) {
      setEmailErrorMessage("Can't be empty!");
      setValidEmail(false);
      isValid = false;
    } else if (!emailPattern.test(contactEmail)) {
      setEmailErrorMessage("Enter A valid email address!");
      setValidEmail(false);
      isValid = false;
    } else {
      setEmailErrorMessage("");
      setValidEmail(true);
    }
    if (!messageContent) {
      setMessageErrorMessage("Can't be empty!");
      setValidMessage(false);
      isValid = false;
    } else {
      setMessageErrorMessage("");
      setValidMessage(true);
    }

    if (isValid) {
      setThankYouMessage(true);
      setContactName("");
      setContactEmail("");
      setMessageContent("");
    }
  };

  return (
    <article className="px-[2rem] font-sparta mt-[4rem] mb-[10rem] tablet:mb-[5rem] tablet:w-[573px] desktop:w-[1110px] desktop:flex justify-between desktop:px-[0px] mx-auto">
      <div className="mb-[2.5rem]">
        <h3 className="text-h2-mb text-vdblue tablet:text-m ">
          Connect<br></br> With Us
        </h3>
      </div>

      <form className="desktop:w-[730px]">
        <div className="tablet:flex items-center">
          <input
            className="ml-[2rem] mb-[1.5rem] mt-[2.5rem] outline-none tablet:w-[325x] desktop:w-[400px] desktop:h-[75px] focus:border-vdblue rounded"
            style={inputStyle}
            placeholder="Name"
            onChange={nameChangeHandler}
            value={contactName}
          />
          {validName ? (
            ""
          ) : (
            <p className="text-red pl-[2rem] ml-auto">{contactNameError}</p>
          )}
        </div>

        <hr className="border-t border-vdblue"></hr>

        <div className="tablet:flex items-center">
          <input
            className="ml-[2rem] mb-[1.5rem] mt-[2.5rem] outline-none desktop:w-[400px] desktop:h-[75px] tablet:w-[325x]"
            style={inputStyle}
            placeholder="Email"
            onChange={emailChangeHandler}
            value={contactEmail}
          />
          {validEmail ? (
            ""
          ) : (
            <p className="text-red pl-[2rem] ml-auto">{emailErrorMessage}</p>
          )}
        </div>

        <hr className="border-t border-vdblue"></hr>

        <div className="tablet:flex items-center">
          <textarea
            className="ml-[2rem] mb-[1.5rem] mt-[2.5rem] outline-none desktop:w-[400px] tablet:w-[325x]"
            draggable="false"
            style={{ resize: "none", ...inputStyle }}
            placeholder="Message"
            onChange={messageChangeHandler}
            value={messageContent}
          />
          {validMessage ? (
            ""
          ) : (
            <p className="text-red pl-[2rem] ml-auto">{messageErrorMessage}</p>
          )}
          {thankYouMessage ? (
            <p className="text-vdblue text-body ml-auto hidden desktop:inline-flex">
              Thanks, we have recieved your message.{" "}
            </p>
          ) : (
            ""
          )}
        </div>

        <hr className="border-t border-vdblue"></hr>

        <div className="flex justify-end">
          <button
            type="submit"
            onClick={formSubmitHandler}
            className="hover:bg-lgray flex items-center justify-center w-[80px] h-[80px] bg-vdblue"
          >
            <img src={arrow} />
          </button>
        </div>
      </form>
      <div className="h-[30px] mt-[3rem] desktop:hidden">
        {thankYouMessage ? (
          <p className="text-vdblue text-body ml-auto">
            Thanks, we have recieved your message.{" "}
          </p>
        ) : (
          ""
        )}
      </div>
    </article>
  );
}

export default ContactPageContactUs;
