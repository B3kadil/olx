
import '../App.css';
import React from 'react';
import android from '../Footer/images/google_play.d95752362.svg'
import ios from '../Footer/images/app_store.53e2154cd.svg'
function Footer() {
  return (
    <footer>
      <div className="blocks">
        <div className="footer-items">
          <div className="names">
            <a href="">Мобильные приложения</a>
            <a href="">Помощь и Обратная связь</a>
            <a href="">Платные услуги</a>
            <a href="">Бизнес на OLX</a>
            <a href="">Блог OLX</a>
            <a href="">Условия использования</a>
            <a href="">Политика конфиденциальности</a>
            <a href="">Реклама на сайте</a>
            <a href="">Как продавать и покупать?</a>
            <a href="">Правила безопасности</a>
            <a href="">Карта сайта</a>
            <a href="">Карта регионов</a>
            <a href="">Популярные запросы</a>
            <a href="">Работа в OLX</a>
          </div>
        </div>
        <div className="footer-apps">
          <img src={android} alt="" />
          <img src={ios} alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
