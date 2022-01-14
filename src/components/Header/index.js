import React, { useEffect, useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import classes from './Header.module.scss';

export default function Header() {
  const navigate = useNavigate();
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

  const ctaClickHandler = () => {
    navigate("/page-cta");
  }

  return (
    <header className={classes.header}>
      <div className={classes.header_content}>
        <h2 className={classes.header_content_logo}>Navbar</h2>

        <nav
          className={`${classes.header_content_nav} ${menuOpen ? classes.isMenu : ''}`}>
          <ul>
            <li>
              <Link to="/page-one">PageOne</Link>
            </li>
            <li>
              <Link to="/page-two">PageTwo</Link>
            </li>
            <li>
              <Link to="/page-three">PageThree</Link>
            </li>
          </ul>
          <button onClick={ctaClickHandler}>CTA Page</button>
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
