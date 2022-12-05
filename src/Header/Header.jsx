
import React from 'react';
import logo from '../Header/img/unnamed.png'
function Header() {
  return (
    <header>
      <div className="header-logo">
        <img className='logo' src={logo} alt="" />
      </div>
      <div className="row"> <div className="header-item">
        <i class="fa-regular fa-message"></i>
        <a href="">Сообщение</a>
      </div>
        <div className="header-item">
          <a href="" className='language kz'>Қаз</a>
          <a href="" className='language ru'>Рус</a>
        </div>
        <div className="header-item">
          <i class="fa-regular fa-heart"></i>
        </div>
        <div className="header-item">
          <i class="fa-regular fa-user"></i>
          <a href="">Ваш профиль</a>
        </div>
        <div className="header-item">
          <a className='header-button' href="">Подать обьявление</a>
        </div></div>
    </header >
  );
}

export default Header;
