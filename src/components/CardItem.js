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
  return (
    <Fragment>
      <li className="cards__item" onClick={openModal}>
        {/* <Link className="cards__item__link" to={props.path}> */}
        <div className="cards__item__link">
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
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </Fragment>
  );
}
export default CardItem;

//1:06 YT
