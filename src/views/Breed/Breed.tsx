import React from 'react';
import searchBg from '../../assets/search-bg.jpg';
import { ImageBlockFormatter } from '../../components/ImageBlockFormatter/ImageBlockFormatter';
import { StatGenerator } from '../../components/StatGenerator/StatGenerator';

export const Breed = () => {

const catObject = 
{
    name: 'Calico',
    image: searchBg,
    description: "Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.",
    stats: [
        { name:'Adaptability', rating:2 },
        { name:'Affection level', rating:4 },
        { name:'Child Friendly', rating:5 },
        { name:'Grooming', rating:1 }
    ],
    relatedImages: [
        searchBg,
        searchBg,
        searchBg,
        searchBg,
        searchBg,
        searchBg,
        searchBg,
        searchBg
    ]
};

  return (
    <section className="pt-8 pb-10">
        <div className="flex justify-between space-x-16">
            <div className="w-4/12">
                <ImageBlockFormatter image={catObject.image} clickable={false} />
            </div>
            <div className="w-8/12">
                <h1>{catObject.name}</h1>
                <p className="mb-8">{catObject.description}</p>
                {catObject.stats.map((stat, index) => 
                <div key={index} className="flex justify-between items-center space-x-4 mt-4">
                    <div className="w-1/3">
                        <p className="font-bold">{stat.name}:</p>
                    </div>
                    <div className="w-2/3">
                        <StatGenerator rating={stat.rating} />
                    </div>
                </div>
                )}
            </div>
        </div>
        <div className="my-16">
            <h3>Other photos</h3>
            <div className="flex flex-wrap justify-between items-end">
            {catObject.relatedImages.map((image, index) => 
                <div key={index} className="two-four-grid mt-6">
                    <ImageBlockFormatter image={image} />
                </div>
            )}
            </div>
        </div>
    </section>
  );
};