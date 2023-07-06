import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser, AiOutlineProject } from "react-icons/ai";
import { MdOutlineContactMail } from "react-icons/md";
import { BiBookHeart } from "react-icons/bi";
import nav from "./Nav.module.css";

export const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");

  const handleNavClick = (navId) => {
    setActiveNav(navId);
  };

  return (
    <nav className={nav.navControl}>
      <a
        href="#home"
        onClick={() => handleNavClick("#home")}
        className={activeNav === "#home" ? nav.active : ""}
      >
        <AiOutlineHome />
      </a>

      <a
        href="#about"
        onClick={() => handleNavClick("#about")}
        className={activeNav === "#about" ? nav.active : ""}
      >
        <AiOutlineUser />
      </a>

      <a
        href="#skill"
        onClick={() => handleNavClick("#skill")}
        className={activeNav === "#skill" ? nav.active : ""}
      >
        <BiBookHeart />
      </a>

      <a
        href="#project"
        onClick={() => handleNavClick("#project")}
        className={activeNav === "#project" ? nav.active : ""}
      >
        <AiOutlineProject />
      </a>

      <a
        href="#contact"
        onClick={() => handleNavClick("#contact")}
        className={activeNav === "#contact" ? nav.active : ""}
      >
        <MdOutlineContactMail />
      </a>
    </nav>
  );
};
