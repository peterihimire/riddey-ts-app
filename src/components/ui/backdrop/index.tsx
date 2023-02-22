import React from "react";
import ReactDOM from "react-dom";

interface Props {
  open?: boolean;
  clicked?: () => void;
}

const backdrop: React.FC<Props> = ({ open, clicked }) => {
  return ReactDOM.createPortal(
    <div className={`backdrop ${open ? "show" : ""}`} onClick={clicked}></div>,
    document.getElementById("backdrop")!
  );
};

export default backdrop;
