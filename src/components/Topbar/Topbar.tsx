import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from '@fortawesome/free-solid-svg-icons'
import React from "react";

export const TopBar = () => {

  return (
    <>
        <h1>
            <FontAwesomeIcon icon={faCat} /> CatWiki
        </h1>
    </>
  );
};