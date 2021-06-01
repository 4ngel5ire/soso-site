import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import useWindowSize from "../../Hooks/Window";
import studio from "../../assets/image/studio.jpg";
import bass from "../../assets/image/bass.jpg";
import "./About.css";

interface AboutProps {
  iphone: boolean;
}

function About(props: AboutProps) {
  const [click, setClick] = useState<boolean>(false);

  const videoRef = React.createRef<HTMLDivElement>();
  const tourRef = React.createRef<HTMLDivElement>();

  function handleMobileMenu() {
    if (click && props.iphone) {
      return "nav-menu iphone";
    }
    if (click) {
      return "nav-menu active";
    }
    return "nav-menu";
  }

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const size = useWindowSize();

  function handleScreenSize() {
    if (!size.width) {
      return <></>;
    }

    //large window
    if (size.width >= 1200) {
      return (
        <>
          <div className="top-bar__left">
            {/* <div className="bar-text">MERCH</div> */}
            <div
              className="bar-text"
              onClick={() => {
                window.location.href =
                  "https://distrokid.com/hyperfollow/soso1/painful-puzzlement";
              }}
            >
              MUSIC
            </div>
            <div
              className="bar-text"
              onClick={() => {
                window.location.href = "https://www.instagram.com/soulpudding";
              }}
            >
              INSTA
            </div>
          </div>
          <Link to="/" className="top-bar__title">
            SOSO
          </Link>
          <div className="top-bar__right">
            <a className="bar-text" href="mailto:dsalsa21@gmail.com">
              CONTACT
            </a>
          </div>
          <Link to="/about" className="bar-text">
            ABOUT
          </Link>
        </>
      );
    }

    //medium window
    else if (size.width > 500 && size.width < 1200) {
      return (
        <>
          <Link to="/" className="top-bar__title" style={{ padding: "1rem" }}>
            SOSO
          </Link>
          <div className="top-bar__medium">
            <div
              className="bar-text"
              onClick={() => {
                if (videoRef && videoRef.current) {
                  videoRef.current.scrollIntoView();
                }
              }}
            >
              VIDEOS
            </div>
            <div
              className="bar-text"
              onClick={() => {
                window.location.href =
                  "https://distrokid.com/hyperfollow/soso1/painful-puzzlement";
              }}
            >
              MUSIC
            </div>
            <div
              className="bar-text"
              onClick={() => {
                if (tourRef && tourRef.current) {
                  tourRef.current.scrollIntoView();
                }
              }}
            >
              TOUR
            </div>
            <a className="bar-text" href="mailto:dsalsa21@gmail.com">
              CONTACT
            </a>
            <div className="bar-text">INSTA</div>
            <Link to="/about" className="bar-text">
              ABOUT
            </Link>
          </div>
        </>
      );
    }

    //mobile screens
    return (
      <>
        <Link to="/" className="top-bar__title">
          SOSO
        </Link>
        <div className="top-bar__burger" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={handleMobileMenu()}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              ABOUT
            </Link>
          </li>
          <li className="nav-item">
            <a href="mailto:dsalsa21@gmail.com" className="nav-links">
              CONTACT
            </a>
          </li>
        </ul>
      </>
    );
  }

  return (
    <div className="about">
      <div className="top-bar">{handleScreenSize()}</div>
      <div className="img-ctn">
        <img className="content-first" src={studio} alt="" />
      </div>
      <div className="bottom-about">
        <div className="bottom-title">About David.... :)</div>
        <p>
          So, so is a solo project written and ran out of the head space of
          David Sosa. Originally the bassist of Astragal David’s side project
          takes a softer turn to writing. Having influences from Andy Shauf to
          Chad VanGaalen the home recording aspect with So, so is clear as Dave
          self records and produces all the music you hear.
        </p>
      </div>

      <div className="img-ctn">
        <img className="content-first" src={bass} alt="" />
      </div>

      <div className="bottom-footer">
        <div className="bottom-footer__text1">2021 ©</div>
        <div className="bottom-footer__text2">
          All Rights Reserved for David :))
        </div>
      </div>
    </div>
  );
}

export default About;
