import React from 'react';
import NewsImg from '../../assets/img/NewsImg.jpg';

const MainNews = () => {
    return (
        <figure className="main_news">
            <img src={NewsImg} alt="Verdensballet" />
            <figcaption><h1>Verdensballetten på Møllerup Gods lørdag d. 13. juli 2019 blev en skøn aften</h1></figcaption>
            <p>Verdensballetten planlægger at komme igen næste år lørdag d. 11. juli 2020</p>
            <a href="#">Læs mere her</a>
        </figure>
    )
}

export default MainNews;
