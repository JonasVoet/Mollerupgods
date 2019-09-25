import React, { useState } from 'react';
import Posts from './Posts';
import MainNews from './MainNews';
import './news.scss';

const News = () => {

    const [allPosts] = useState([
        { image: "./img/news1.png", title: "Køb vores hampeprodukter", p: "På Møllerup Gods arbejder vi med hamp og hampens unikke ernæringsmæssige egenskaber. Alt vores hamp er dyrket i Danmark, og resultatet er en række gode produkter, som du kan købe her på webshoppen..", link: "Køb online her" },
        { image: "./img/news2.png", title: "Verdensballetten 2019", p: "Siden 2012 har de klassiske gule mure på Møllerup Gods dannet rammen for Verdensballetten, og med mange tusinde gæster gennem årene er begivenheden efterhånden blevet en fasttømret og populær sommertradition på Djursland. Også til sommer 2019 vil vi få fornøjelsen af forestillingen på Møllerup Gods", link: "Se mere her" },
        { image: "./img/news3.png", title: "Historien om Møllerup Gods", p: "Marsk Stig Andersen Hvide af den magtfulde Hvide-slægt er den tidligst kendte ejer af Møllerup. Møllerup var hans vigtigste besiddelse. Gården lå, som i dag, med en borg på øen og avlsbygninger på den anden side af voldgraven.", link: "Læs historien her" }

    ]);




    return (
        <div className="posts">
            <MainNews />
            <Posts allPostsProps={allPosts} />

            <div className="divider">
            </div>
        </div >
    )
}

export default News;
