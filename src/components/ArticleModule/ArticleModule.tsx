import React from 'react';
import articleImg from '../../assets/cat-article.png';

export const ArticleModule = () => {
  return (
    <section className="container">
      <div className="flex flex-wrap lg:flex-nowrap my-20 lg:space-x-8">
          <div className="w-full lg:w-1/2 mt-10">
              <h2 className="leading-none before:block before:h-0.5 before:w-16 before:mb-3 before:bg-darkbrown before:rounded">Why should you have a cat?</h2>
              <p className="mt-6">Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety levels</p>
              <h5 className="leading-none mt-12 after:content-['_→']">read more</h5>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <img className="w-full" alt="Cute pictures of cats and their owners" src={articleImg} />
          </div>
      </div>
    </section>
  );
};