import React, { useState, useEffect } from "react";
import Modal from "../ui/modal";
import Grad from "../../assets/images/grad-clip.svg";
import CheckCircle from "../../assets/images/check-circle.svg";
import { ProgressBarLine } from "react-progressbar-line";

import "./styles.scss";

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [progress, setProgress] = useState(0);

  const lists = [
    {
      id: 1,
      span: "Feature #1",
      txt: " Etiam convallis, nibh vitae dui risus",
      img: CheckCircle,
    },
    {
      id: 1,
      span: "Feature #2",
      txt: " Etiam convallis, nibh vitae dui risus",
      img: CheckCircle,
    },
    {
      id: 1,
      span: "Feature #3",
      txt: " Etiam convallis, nibh vitae dui risus",
      img: CheckCircle,
    },
  ];

  useEffect(() => {
    setShowModal(true);
    document.documentElement.classList.add("_fixed");
    document.body.classList.add("_fixed");
  }, []);

  const progressbarHandler = () => {
    setProgress(progress + 1);
  };

  return (
    <section className={`home`}>
      <article className="wrapper">
        <h1>Peter Ihimire</h1>
      </article>

      {showModal && (
        <Modal>
          {
            <article className={`modal-wrapper`}>
              <header className={`modal-icon`}>
                <img src={Grad} alt="" style={{ width: "30px" }} />
              </header>

              <h3>Upgrade to Riddey PRO and boost productivity!</h3>
              <p>
                Pellentesque porttitor euismod ante, accumsan consequat purus!
              </p>

              <article className={`modal-list`}>
                <ul>
                  {lists.map(({ img, span, txt }) => {
                    return (
                      <li>
                        <img
                          src={img}
                          alt=""
                          style={{ width: "30px", marginRight: "5px" }}
                        />
                        <p>
                          <span>{span}</span>- {txt}
                        </p>
                      </li>
                    );
                  })}
                </ul>
                <h5>Current Usage</h5>
                <h6>{progress} out of 10 boards in use</h6>

                <ProgressBarLine
                  value={progress}
                  min={0}
                  max={10}
                  strokeWidth={2}
                  trailWidth={2}
                  className={`progress-bar`}
                  text=" "
                  styles={{
                    path: {
                      stroke: "#E26559",
                    },
                    trail: {
                      stroke: "#EBECEC",
                    },
                    text: {
                      fill: "#404040",
                      textAlign: "center",
                      fontSize: "12px",
                      display: "none",
                      visibility: "none",
                    },
                  }}
                />
              </article>

              <button
                className={`btn-primary btn-block `}
                onClick={progressbarHandler}
                disabled={progress === 10 ? true : false}
              >
                Add New Board
              </button>
            </article>
          }
        </Modal>
      )}
    </section>
  );
};

export default Home;
