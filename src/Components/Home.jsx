import React from 'react';
import Movies from './Movies';
import Banner from './Banner';
    const movies = fetch("/public/movieData.json")
    .then(res => res.json())

const Home = () => {
    return (
        <div className='flex flex-col  '>
              <Banner></Banner>
           
            <Movies movies={movies}  ></Movies>
        </div>
    );
};

export default Home;