import React, { useState } from "react";
import "./Content.css";
import knife from "../../assets/image/knife.jpg";
import davArms from "../../assets/image/dav-arms.jpg";
import sunburst from "../../assets/video/sunburst.mp4";
import ReactPlayer from "react-player";
import useWindowSize from "../../Hooks/Window";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

interface ContentProps {
  iphone: boolean;
}

function Content(props: ContentProps) {
  const [click, setClick] = useState<boolean>(false);

  const videoRef = React.createRef<HTMLDivElement>();
  const tourRef = React.createRef<HTMLDivElement>();

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const size = useWindowSize();

  function handleMobileMenu() {
    if (click && props.iphone) {
      return "nav-menu iphone";
    }
    if (click) {
      return "nav-menu active";
    }
    return "nav-menu";
  }

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
          </div>
          <Link to="/" className="top-bar__title">
            SOSO
          </Link>
          <div className="top-bar__right">
            <a className="bar-text" href="mailto:dsalsa21@gmail.com">
              CONTACT
            </a>
            <div
              className="bar-text"
              onClick={() => {
                window.location.href = "https://www.instagram.com/soulpudding";
              }}
            >
              INSTA
            </div>
            <Link to="/about" className="bar-text">
              ABOUT
            </Link>
          </div>
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
            <Link
              to="/"
              className="nav-links"
              onClick={() => {
                if (videoRef && videoRef.current) {
                  setClick(false);
                  videoRef.current.scrollIntoView();
                }
                setClick(false);
              }}
            >
              VIDEOS
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

  function handleVideoSize() {
    if (!size.width) {
      return <></>;
    }

    if (size.width >= 1900) {
      return (
        <>
          <ReactPlayer
            className="new-album__player"
            url={sunburst}
            width={1200}
            height={675}
            controls={true}
            volume={0.1}
          />
        </>
      );
    }

    if (size.width < 1900 && size.width >= 1500) {
      return (
        <>
          <ReactPlayer
            className="new-album__player"
            url={sunburst}
            width={1200}
            height={675}
            controls={true}
            volume={0.1}
          />
        </>
      );
    }

    if (size.width < 1500 && size.width >= 1100) {
      return (
        <>
          <ReactPlayer
            className="new-album__player"
            url={sunburst}
            width={800}
            height={450}
            controls={true}
            volume={0.1}
          />
        </>
      );
    }

    if (size.width > 700 && size.width < 1100) {
      return (
        <>
          <ReactPlayer
            className="new-album__player"
            url={sunburst}
            controls={true}
            volume={0.1}
          />
        </>
      );
    }

    if (size.width > 600 && size.width < 700) {
      return (
        <>
          <ReactPlayer
            className="new-album__player"
            url={sunburst}
            width={500}
            height={281.25}
            controls={true}
            volume={0.1}
          />
        </>
      );
    }

    if (size.width > 490 && size.width < 600) {
      return (
        <>
          <ReactPlayer
            className="new-album__player"
            url={sunburst}
            width={425}
            height={240}
            controls={true}
            volume={0.1}
          />
        </>
      );
    }

    return (
      <>
        <ReactPlayer
          className="new-album__player"
          url={sunburst}
          width={300}
          height={169}
          controls={true}
          volume={0.1}
        />
      </>
    );
  }

  return (
    <div className="content">
      <div className="top-bar">{handleScreenSize()}</div>
      <div className="img-ctn">
        <img className="content-first" src={knife} alt="" />
      </div>
      <div className="new-album-ctn" ref={videoRef}>
        <div className="new-album-title">New Album Out Now</div>

        <div className="order-button">
          <div
            className="button-text"
            onClick={() => {
              window.open(
                "https://distrokid.com/hyperfollow/soso1/painful-puzzlement",
                "_blank"
              );
            }}
          >
            Listen Pls :(
          </div>
        </div>

        <div className="new-album__video-ctn">{handleVideoSize()}</div>
      </div>

      <div className="tour-section" ref={tourRef}>
        <div className="tour-section__title">Upcoming Tour Dates</div>
        <table>
          <tr>
            <th>&nbsp;&nbsp;Date&nbsp;&nbsp;</th>
            <th>&nbsp;&nbsp;Location&nbsp;&nbsp;</th>
          </tr>
          <tr>
            <td>&nbsp;&nbsp;Shows will be soon.....&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;TBD&nbsp;&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;&nbsp;No shows scheduled yet...&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;TBD&nbsp;&nbsp;</td>
          </tr>
          <tr>
            <td>
              &nbsp;&nbsp;Please come back and check again :((&nbsp;&nbsp;
            </td>
            <td>&nbsp;&nbsp;Middle of the Atlantic Ocean&nbsp;&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;&nbsp;please actually come back&nbsp;&nbsp;</td>
            <td>&nbsp;&nbsp;TBD&nbsp;&nbsp;</td>
          </tr>
        </table>
      </div>
      <div className="img-ctn">
        <img className="content-first" src={davArms} alt="" />
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

export default Content;
