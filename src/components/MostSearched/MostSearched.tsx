import React from 'react';
import searchBg from '../../assets/search-bg.jpg';
import { ImageBlockFormatter } from '../ImageBlockFormatter/ImageBlockFormatter';

export const MostSearched = () => {

const catArray = [
    {
        name: 'Calico',
        image: searchBg,
        url: 'https://www.google.com'
    },
    {
        name: 'Fred',
        image: searchBg,
        url: 'https://www.google.com'
    },
    {
        name: 'Turtle',
        image: searchBg,
        url: 'https://www.google.com'
    },
    {
        name: 'met',
        image: searchBg,
        url: 'https://www.google.com'
    },
]

  return (
    <section className="bg-beige rounded-b-xl pt-8 pb-10">
        <div className="container">
            <h6 className="mb-10 after:block after:h-0.5 after:w-16 after:mt-1 after:bg-darkbrown after:rounded">Most Searched Breeds</h6>
            <div className="flex flex-wrap md:flex-nowrap w-full justify-between items-end">
                <h2 className="leading-none w-full md:w-2/3 lg:w-1/2">66+ Breeds For you to discover</h2>
                <h5 className="leading-none w-full md:w-1/3 lg:w-1/2 text-left md:text-right mt-8 md:mt-0 after:content-['_→']">see top 10</h5>
            </div>
            <div className="my-8 flex flex-wrap md:flex-nowrap justify-between items-end">
                {catArray.map((cat, index) => 
                    <div key={index} className="hover-before-top two-four-grid z-10 mt-6 md:mt-0">
                        <ImageBlockFormatter image={cat.image} url={cat.url} />
                        <h6 className="text-left md:text-center mt-3">{cat.name}</h6>
                    </div>
                )}
            </div>            
        </div>
    </section>
  );
};