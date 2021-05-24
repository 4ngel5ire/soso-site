import React, { useRef, useState } from "react";
import "./Content.css";
import knife from "../../assets/image/knife.jpg";
import davArms from "../../assets/image/dav-arms.jpg";
import sunburst from "../../assets/video/sunburst.mp4";
import ReactPlayer from "react-player";
import { readFileSync } from "fs";

function Content() {
  return (
    <div className="content">
      <div className="top-bar">
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
      </div>
      <div className="img-ctn">
        <img className="content-first" src={knife} alt="" />
      </div>
      <div className="new-album-ctn">
        <div className="new-album-title">New Album Out Now</div>

        <div className="order-button">
          <div className="button-text">Order</div>
        </div>

        <div className="new-album__video-ctn">
          <ReactPlayer url={sunburst} controls={true} volume={0.1} />
        </div>
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
          ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
          consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor
          sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem
          ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
          consectetur lorem ipsum dolor sit amet, consectetur lorem ipsum dolor
          sit amet, consectetur lorem ipsum dolor sit amet, consectetur lorem
          ipsum dolor sit amet, consectetur lorem ipsum dolor sit amet,
          consectetur lorem ipsum dolor sit amet, consectetur :) :)
        </p>
      </div>
    </div>
  );
}

export default Content;
