import React, { useState, useEffect } from "react";
import "./NavBarComponent.css";
import { NavLink, Link } from "react-router-dom";
import PopupPDPA from "./PopupPDPA";

function NavBarComponent() {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  function togglePopup() {
    setShowPopup(!showPopup);
  }

  useEffect(() => {
    const header = document.querySelector("header");
    const handleScroll = () => {
      if (window.scrollY > 0) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Itim&display=swap"
        rel="stylesheet"
      ></link>
      <img src="./images/Logo5.png" className="Logo" alt="Logo" />
      <nav>
        <NavLink
          to="/"
          className={(navData) =>
            navData.isActive ? "actives " : "navb contactclass"
          }
        >
          หน้าหลัก
        </NavLink>
        <div className="dropdown">
          <button className="dropbtn">
            แบบประเมิน
            <i className="fa fa-caret-down" aria-hidden="true"></i>
          </button>
          <div className="dropdown-content">
            <NavLink to="/Stresspage">แบบประเมินความเครียด</NavLink>
            <NavLink to="/Phq9page">แบบประเมินภาวะซึมเศร้า</NavLink>
            <NavLink to="/Gad7page">แบบประเมินภาวะวิตกกังวล</NavLink>
          </div>
        </div>
        <NavLink
          to="/about"
          className={(navData) => (navData.isActive ? "actives " : "navb a")}
        >
          เกี่ยวกับ
        </NavLink>
        <NavLink
          to="/contact"
          className={(navData) =>
            navData.isActive ? "actives " : "navb contactclass a"
          }
        >
          ติดต่อเรา
        </NavLink>
        <Link
          to="/start"
          className="faded-button a"
          onClick={togglePopup}
        >
          เริ่ม
        </Link>
        {showPopup && <PopupPDPA onClose={handlePopupClose} />}
      </nav>
    </header>
  );
}

export default NavBarComponent;

