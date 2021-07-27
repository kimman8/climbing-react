import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const CardItem = () => {
  return (
    <Fragment>
      <li className="cards__item">
        <Link className="cards__item__link">
          <figure className="cards__item__pic-wrap">
            <img src="/" alt="climbing image" className="cards__item__img" />
          </figure>
          <div className="cards__info__item">
            <h5 className="cards__info__text"></h5>
          </div>
        </Link>
      </li>
    </Fragment>
  );
};
export default CardItem;

//1:06 YT
