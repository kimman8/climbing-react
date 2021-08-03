import React, { Fragment, useState } from "react";
// import { Link } from "react-router-dom";
import "./Cards.css";
import { Modal } from "./Modal";
function CardItem(props) {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
    console.log("opening modal");
  };
  const [currentImg, setCurrentImg] = useState(null);
  const [currentText, setCurrentText] = useState(null);
  const handleClick = (e) => {
    console.log(e.target.src);
    console.log(e.target.text);
    console.log(e.target);
    setCurrentImg(e.target.src);
    setCurrentText(e.target.alt);
  };
  return (
    <Fragment>
      <li className="cards__item" onClick={handleClick}>
        {/* <Link className="cards__item__link" to={props.path}> */}
        <div className="cards__item__link" onClick={openModal}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              src={props.src}
              alt="climbing image"
              className="cards__item__img"
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </div>
        {/* </Link> */}
      </li>
      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          setCurrentImg={setCurrentImg}
          currentImg={currentImg}
          setCurrentText={setCurrentText}
          currentText={currentText}
        />
      )}
    </Fragment>
  );
}
export default CardItem;

//1:06 YT
