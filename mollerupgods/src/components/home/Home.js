import React from 'react';
import Intro from '../intro/Intro';
import News from '../news/News';
import Article from '../articles/Article';
import Outro from '../outro/Outro';

const Home = () => {
    return (
        <div className="wrapper">
            <Intro />
            <News />
            <Article />
            <Outro />

        </div>
    )
}

export default Home
