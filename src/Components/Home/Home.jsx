import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import image from "../../assets/IMG_4398.jpg";
import { CTA } from "./CTA";

const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle navigation clicks - close mobile menu
  const handleNavClick = (e, targetId) => {
    closeMobileMenu();
    // Allow default anchor behavior to proceed
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add(styles.menuOpen);
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.classList.remove(styles.menuOpen);
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.classList.remove(styles.menuOpen);
      document.documentElement.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const nav = document.querySelector(`.${styles.navigation}`);
      const button = document.querySelector(`.${styles.mobileMenuButton}`);

      if (
        isMobileMenuOpen &&
        nav &&
        !nav.contains(event.target) &&
        button &&
        !button.contains(event.target)
      ) {
        closeMobileMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isMobileMenuOpen]);

  return (
    <div id="home" className={styles.container}>
      {/* Header/Navigation */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>LOIS</div>
          <nav
            className={`${styles.navigation} ${
              isMobileMenuOpen ? styles.active : ""
            }`}
          >
            <ul className={styles.navList}>
              {["Home", "About Me", "Resume", "Contact Me"].map((item) => {
                const targetId = item.toLowerCase().replace(" ", "");
                return (
                  <li key={item} className={styles.navItem}>
                    <a
                      href={`#${targetId}`}
                      className={styles.navLink}
                      onClick={(e) => handleNavClick(e, targetId)}
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Dark Mode Toggle in Mobile Menu */}
            <div className={styles.mobileDarkModeToggle}>
              <button
                className={styles.darkModeButton}
                onClick={toggleDarkMode}
                aria-label={
                  isDarkMode ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                <span className={styles.darkModeIcon}>
                  {isDarkMode ? "☀️" : "🌙"}
                </span>
                <span className={styles.darkModeText}>
                  {isDarkMode ? "Light Mode" : "Dark Mode"}
                </span>
              </button>
            </div>
          </nav>

          {/* Desktop Dark Mode Toggle */}
          <div className={styles.desktopDarkModeToggle}>
            <button
              className={styles.darkModeButton}
              onClick={toggleDarkMode}
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              <span className={styles.darkModeIcon}>
                {isDarkMode ? "☀️" : "🌙"}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`${styles.mobileMenuButton} ${
              isMobileMenuOpen ? styles.active : ""
            }`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div className={styles.overlay} onClick={closeMobileMenu} />
      )}

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <div className={styles.greeting}>Hello, I'm Lois Omodibo</div>
            <h1 className={styles.title}>
              Frontend
              <span className={styles.titleAccent}> Developer</span>
            </h1>
            <p className={styles.description}>
              I'm a passionate frontend developer who architects seamless
              digital experiences through innovative code and intuitive design.
              With expertise in cutting-edge technologies and a passion for
              performance optimization, I transform complex business
              requirements into scalable, user-centric applications that drive
              meaningful engagement.
            </p>
            <CTA />
          </div>

          {/* Profile Image */}
          <div className={styles.imageSection}>
            <div className={styles.profilePlaceholder}>
              <div className={styles.profileImage}>
                <img
                  src={image}
                  alt="Lois - Frontend Developer"
                  className={styles.profileImage2}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
