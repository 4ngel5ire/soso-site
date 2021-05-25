import React from "react";
import "./Content.css";
import knife from "../../assets/image/knife.jpg";
import davArms from "../../assets/image/dav-arms.jpg";
import sunburst from "../../assets/video/sunburst.mp4";
import ReactPlayer from "react-player";
import useWindowSize from "../../Hooks/Window";

function Content() {
  const size = useWindowSize();

  function handleScreenSize() {
    console.log(size.width);
    if (!size.width) {
      return <></>;
    }

    //large window
    if (size.width >= 1200) {
      return (
        <>
          <div className="top-bar__left">
            <div className="bar-text">MERCH</div>
            <div className="bar-text">VIDEOS</div>
            <div className="bar-text">MUSIC</div>
          </div>
          <div className="top-bar__title">SOSO</div>
          <div className="top-bar__right">
            <div className="bar-text">TOUR</div>
            <div className="bar-text">CONTACT</div>
            <div className="bar-text">INSTA</div>
          </div>
        </>
      );
    }

    //medium window
    else if (size.width > 500 && size.width < 1200) {
      return (
        <>
          <div className="top-bar__title">SOSO</div>
          <div className="top-bar__medium">
            <div className="bar-text">MERCH</div>
            <div className="bar-text">VIDEOS</div>
            <div className="bar-text">MUSIC</div>
            <div className="bar-text">TOUR</div>
            <div className="bar-text">CONTACT</div>
            <div className="bar-text">INSTA</div>
          </div>
        </>
      );
    }

    //mobile screens
    return (
      <>
        <div className="top-bar__title">SOSO</div>
        <div className="top-bar__medium">
          <div className="bar-text">VIDEOS</div>
          <div className="bar-text">MUSIC</div>
          <div className="bar-text">TOUR</div>
          <div className="bar-text">INSTA</div>
        </div>
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

    // if (size.width > 400 && size.width < 950) {
    //   return (
    //     <>
    //       <ReactPlayer
    //         className="new-album__player"
    //         url={sunburst}
    //         width={725}
    //         height={409}
    //         controls={true}
    //         volume={0.1}
    //       />
    //     </>
    //   );
    // }

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
      <div className="new-album-ctn">
        <div className="new-album-title">New Album Out Now</div>

        <div className="order-button">
          <div className="button-text">Order</div>
        </div>

        <div className="new-album__video-ctn">{handleVideoSize()}</div>
      </div>

      <div className="tour-section">
        <div className="tour-section__title">Upcoming Tour Dates</div>
        <table>
          <tr>
            <th>Date</th>
            <th>Location</th>
          </tr>
          <tr>
            <td>July 4th, 1991 (For America)</td>
            <td>Dylans America House</td>
          </tr>
          <tr>
            <td>July 5th, 2020</td>
            <td>Middle of the Atlantic Ocean</td>
          </tr>
          <tr>
            <td>July 35th, 2021</td>
            <td>Austrailian Displomat Office (Peace Time Agreement)</td>
          </tr>
          <tr>
            <td>July 99th, 2024</td>
            <td>TBD</td>
          </tr>
        </table>
      </div>
      <div className="img-ctn">
        <img className="content-first" src={davArms} alt="" />
      </div>

      <div className="bottom-about">
        <div className="bottom-title">About David.... :)</div>
        <p>
          lorem ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
          consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor
          sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem
          ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
          consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor
          sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem
          ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
          consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor
          sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem
          ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet, :) :)
        </p>
      </div>
    </div>
  );
}

export default Content;
