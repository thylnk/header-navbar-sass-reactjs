import React, { useEffect, useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import classes from './Header.module.scss';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [size, setSize] = useState({
    width: undefined,
    height: undefined
  });

  const menuToggleHandler = () => {
    setMenuOpen(!menuOpen);
  };

  // componentDidMount and componentWillUnmount
  useEffect(() => {
    const handleReSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener("resize", handleReSize);

    return () => {
      window.removeEventListener("resize", handleReSize);
    }
  }, [])

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  return (
    <header className={classes.header}>
      <div className={classes.header_content}>
        <h2 className={classes.header_content_logo}>Navbar</h2>

        <nav
          className={`${classes.header_content_nav} ${menuOpen ? classes.isMenu : ''
            }`}>
          <ul>
            <li>
              <a href="/">PageOne</a>
            </li>
            <li>
              <a href="/">PageTwo</a>
            </li>
            <li>
              <a href="/">PageThree</a>
            </li>
          </ul>
          <button>CTA Page</button>
        </nav>
        <div className={classes.header_content_toggle}>
          {menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
}
