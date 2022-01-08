import React from 'react';
import searchBg from '../../assets/search-bg.jpg';
import { ImageBlockFormatter } from '../../components/ImageBlockFormatter/ImageBlockFormatter';

export const TopTen = () => {

const catArray = [
    {
        name: 'Calico',
        image: searchBg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae pharetra mi. Aenean porttitor, erat hendrerit finibus finibus, nibh ipsum eleifend lectus, in efficitur elit ligula et justo.',
        url: 'https://google.com'
    },
    {
        name: 'Fred',
        image: searchBg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae pharetra mi. Aenean porttitor, erat hendrerit finibus finibus, nibh ipsum eleifend lectus, in efficitur elit ligula et justo.',
        url: 'https://google.com'
    },
    {
        name: 'Turtle',
        image: searchBg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae pharetra mi. Aenean porttitor, erat hendrerit finibus finibus, nibh ipsum eleifend lectus, in efficitur elit ligula et justo.',
        url: 'https://google.com'
    },
    {
        name: 'met',
        image: searchBg,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae pharetra mi. Aenean porttitor, erat hendrerit finibus finibus, nibh ipsum eleifend lectus, in efficitur elit ligula et justo.',
        url: 'https://google.com'
    },
]

  return (
    <section className="pt-8 pb-10">
        <h1>Top 10 most searched breeds</h1>
        {catArray.map((cat, index) => 
        <div key={index} className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between items-start mt-10 space-x-6">
            <div className="hover-before-top z-10 w-36 md:w-3/12 lg:w-2/12">
                <ImageBlockFormatter image={cat.image} url={cat.url} />
            </div>
            <div className="flex flex-col w-full md:w-9/12 lg:w-10/12 mt-4 mb-6 sm:m-0">
                <h3>{index+1}. {cat.name}</h3>
                <p>{cat.description}</p>
            </div>
        </div>
        )}
    </section>
  );
};