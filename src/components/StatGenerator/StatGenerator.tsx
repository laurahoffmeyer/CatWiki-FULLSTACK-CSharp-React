import React from 'react';
import styled, { css } from 'styled-components';

interface IStatPill {
    currentNumber: number;
    rating: number;
}

const StatPill = styled.div<IStatPill>`
    width: 18%;
    height: 10px;
    border-radius: 0.375rem;
    background-color: #000;

    ${props => props.currentNumber <= props.rating && css`
        background-color: var(--darkgrey);
    `}
    ${props => props.currentNumber > props.rating && css`
        background-color: var(--lightgrey);
    `}
`;

export const StatGenerator:Function = ( { rating }: { rating: number }) => {
    const ratingScale = [1, 2, 3, 4, 5];

  return (
    <div className="flex w-full justify-between items-end">        
        {ratingScale.map((n, index) => 
            <StatPill key={index} currentNumber={n} rating={rating}></StatPill>
        )}
    </div>
  );
};