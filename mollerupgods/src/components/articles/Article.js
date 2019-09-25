import React, { useState } from 'react';
import ArticlePosts from './ArticlePosts';
import './articles.scss';

const Article = () => {

    const [articles] = useState([
        {
            img: "./img/article1.jpg", title: "Møllerup Hamp", p: "På Møllerup dyrker vi industri-hamp til fødevarer, isolering og hudpleje.",
            link: "Køb produkter her"
        },

        {
            img: "./img/article2.jpg", title: "Møder & events", p: "Hold møde eller firmaevent i smukke, autentiske rammer med plads til kreativitet.",
            link: "Læs mere her"
        },


        {
            img: "./img/article3.jpg", title: "Fest på kroen", p: "Lej Hubertus Kroen og hold fest for op til 80 pers. i romantiske og historiske rammer.",
            link: "Læs mere"
        },

        {
            img: "./img/article4.jpg", title: "Rundvisninger", p: "Bestil en rundvisning på Møllerup, lær noget om historien, jagten, og livet på Møllerup.",
            link: "Læs mere"
        },

        {
            img: "./img/article5.jpg", title: "Hamp hudpleje", p: "Prøv Møllerups nye hudplejeserie baseret på de næringsrige olie fra hampens frø.",
            link: "Læs mere"
        },

        {
            img: "./img/article6.jpg", title: "Hamp fødevarer", p: "Prøv fødevarer udviklet på baggrund af frøene fra den sunde hamp fra Møllerup.",
            link: "Læs mere"
        },

        {
            img: "./img/article7.png", title: "Møllerup bogen", p: "Der er kød og blod på historien,  Læs mere om Marsk Stig & livet på Møllerup.",
            link: "Køb produkter her"
        },

        {
            img: "./img/article8.jpg", title: "Møllerup jagt", p: "På Møllerup dyrker vi industri-hamp til fødevarer, isolering og hudpleje.",
            link: "Køb produkter her"
        },

        {
            img: "./img/article9.jpg", title: "Møllerup Hamp", p: "På Møllerup dyrker vi industri-hamp til fødevarer, isolering og hudpleje.",
            link: "Køb produkter her"
        },

        {
            img: "./img/article10.jpg", title: "Møllerup Hamp", p: "På Møllerup dyrker vi industri-hamp til fødevarer, isolering og hudpleje.",
            link: "Køb produkter her"
        },

        {
            img: "./img/article11.jpg", title: "Møllerup Hamp", p: "På Møllerup dyrker vi industri-hamp til fødevarer, isolering og hudpleje.",
            link: "Køb produkter her"
        },

        {
            img: "./img/article12.jpg", title: "Møllerup Hamp", p: "På Møllerup dyrker vi industri-hamp til fødevarer, isolering og hudpleje.",
            link: "Køb produkter her"
        }
    ]);


    return (
        <div className="article_posts">
            <h2>Møllerup Gods tilbyder en perlerække af muligheder</h2>
            <p className="text">Møllerup Gods og Hubertus Kroen er ikke alene kulturhistoriske perler, vi er også en virksomhed med højt til loftet, masser af muligheder og god plads til aktiviteter på 425 hektar - for private og erhverv</p>
            <ArticlePosts allArticleProps={articles} />

        </div>
    )
}

export default Article
