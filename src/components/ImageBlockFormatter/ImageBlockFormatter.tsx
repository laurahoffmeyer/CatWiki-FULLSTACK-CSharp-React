import React from 'react';
import useMeasure from 'react-use-measure';
import styled, { css } from 'styled-components';

interface IImageBlock {
    url?: string
}

const ImageBlock = styled.div<IImageBlock>`
    width: 100%;
    background-size: cover;
    background-position: center;
    border-radius: 0.375rem;

    ${props => props.url && css`
        &:hover {
            cursor: pointer;
            &:before {
                display: block;
                content: " ";
                position: relative;
                top: 16%;
                height: 66%;
                width: 15px;
                margin-left: -8px;
                border-radius: 0.375rem;
                z-index: -10;
                background-color: var(--gold);
            }
        }`
    }
`;

export const ImageBlockFormatter:Function = ( { image, url }: {image: string, url: string}) => {
    const [ref, { width }] = useMeasure();

    return <ImageBlock url={url} ref={ref} style={{height: width, backgroundImage: `url(${image})`}}></ImageBlock>;
};