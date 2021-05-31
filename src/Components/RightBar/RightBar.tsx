import React from "react";
import "./RightBar.css";
import useWindowSize from "../../Hooks/Window";

function RightBar() {
  const size = useWindowSize();

  return (
    <div className="right-bar">
      <div className="right-bar__text">{handleText()}</div>
      {/* <div className="right-footer">
        <div className="footer-text">link</div>
        <div className="footer-text">link</div>
        <div className="footer-text">link</div>
        <div className="footer-text">link</div>
      </div> */}
    </div>
  );

  function handleText() {
    if (!size.width) {
      return <></>;
    }
    if (size.width < 950) {
      return (
        <>
          SOSO SOSO SOSO SOSO SOSO SOSO SOSO SOSO SOSO SOSO SOSO SOSO SOSO SOSO
          SOSO SOSO SOSO SOSO SOSO SOSO SOSO SOSO SOSO SOSO SOSO SOSO SOSO SOSO
          SOSO SOSO SOSO SOSO SOSO SOSO SOSO SOSO SOSO SOSO SOSO SOSO SOSO SOSO
          SOSO SOSO SOSO SOSO SOSO SOSO SOSO SOSO SOSO SOSO SOSO SOSO SOSO SOSO
          SOSO SOSO SOSO SOSO SOSO SOSO SOSO SOSO SOSO SOSO SOSO SOSO SOSO SOSO
          SOSO SOSO SOSO SOSO SOSO SOSO SOSO
        </>
      );
    }
    return (
      <>
        SOSO
        <br />
        SOSO
        <br />
        SOSO
        <br />
        SOSO
        <br />
        SOSO
        <br />
        SOSO
        <br />
        SOSO
        <br />
        SOSO
        <br />
        SOSO
        <br />
        SOSO
        <br />
        SOSO
        <br />
        SOSO
        <br />
        SOSO
        <br />
        SOSO
        <br />
        SOSO
        <br />
        SOSO
        <br />
        SOSO
        <br />
        SOSO
        <br />
        SOSO
        <br />
        SOSO
        <br />
        SOSO
        <br />
        SOSO
        <br />
        SOSO
        <br />
        SOSO
        <br />
        SOSO
        <br />
        SOSO
        <br />
        SOSO
        <br />
        SOSO
        <br />
      </>
    );
  }
}

export default RightBar;
