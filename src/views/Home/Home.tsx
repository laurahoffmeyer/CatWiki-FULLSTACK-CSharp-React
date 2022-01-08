import React from 'react';
import { SearchModule } from '../../components/SearchModule/SearchModule';
import { MostSearched } from '../../components/MostSearched/MostSearched';
import { ArticleModule } from '../../components/ArticleModule/ArticleModule';

export const Home = () => {

  return (
    <>
      <SearchModule />
      <MostSearched />
      <ArticleModule />
    </>
  );
};