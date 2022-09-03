import { useState } from "react";

function ContactNav() {
  setTimeout(() => {
    const contact = document.querySelector(".contact") as HTMLElement;

    contact.style.display = "block";
  }, 700);
  return (
    <>
      <div className="contact">CONTACT</div>
    </>
  );
}

export default ContactNav;
