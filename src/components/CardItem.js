import React, { Fragment, useState } from 'react';
import './Cards.css';
import { GlobalStyle } from './globalStyles';

import { Modal } from './Modal';
function CardItem(props) {
  const [showModal, setShowModal] = useState(false);
  const openModal = (e) => {
    setShowModal((prev) => !prev);
    setCurrentImg(e.target.src);
    setCurrentText(e.target.alt);
    console.log('opening modal');
  };
  const [currentImg, setCurrentImg] = useState(null);
  const [currentText, setCurrentText] = useState(null);
  // const handleClick = (e) => {
  //   console.log(e.target.src);
  //   console.log(e.target.text);
  //   console.log(e.target);
  //   setCurrentImg(e.target.src);
  //   setCurrentText(e.target.alt);
  // };
  return (
    <Fragment>
      <li className='cards__item' onClick={openModal}>
        {/* <Link className="cards__item__link" to={props.path}> */}
        <div className='cards__item__link'>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img src={props.src} alt='climbing' className='cards__item__img' />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </div>
        {/* </Link> */}
      </li>
      {showModal && (
        <div>
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            setCurrentImg={setCurrentImg}
            currentImg={currentImg}
            setCurrentText={setCurrentText}
            currentText={currentText}
          />
          <GlobalStyle />
        </div>
      )}
    </Fragment>
  );
}
export default CardItem;
