import React from 'react';
import searchBg from '../../assets/search-bg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const SearchModule = () => {

  const catBreeds = [
      'Tabby',
      'Tuxedo',
      'Calico'
  ]

  return (
    <section className="relative">
      <img className="z-0 rounded-t-xl" src={searchBg} alt="Cute cat Looking left" />
      <div className="container">
          <div className="w-3/4 sm:w-5/12 lg:w-1/3 z-50 absolute inset-y-1/4 lg:inset-y-1/3">
              <p className="mb-3 hidden xs:block text-lg sm:text-xl lg:text-2xl leading-none text-white">Get to know more about your cat breed</p>
              <span className="border-l border-darkbrown pl-3 absolute right-0 text-xl mt-3 mr-3 "><FontAwesomeIcon className="" icon={faSearch} /></span>
              <select required defaultValue={'default'} name="breed" id="breed" className="bg-white/75 sm:bg-white rounded p-3 pl-4 w-full before:content-['Hello_World']">
                  <option value='default' disabled>Select your breed</option>
                  {catBreeds.map((breed, index) =>
                      <option key={index} value={breed}>{breed}</option>
                  )}
              </select>
          </div>
      </div>
    </section>
  );
};