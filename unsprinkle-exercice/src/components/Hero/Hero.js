import React from 'react';
import styled from 'styled-components/macro';
const baseSrc = '/images/hero-img';

const Hero = () => {
  return (
    <Wrapper>
      <picture>
          <source
            type='image/avif'
            srcset={`
              ${baseSrc}.avif 1x,
              ${baseSrc}@2x.avif 2x,
              ${baseSrc}@3x.avif 3x,
            `}
          />
          <source
            type='image/jpg'
            srcset={`
              ${baseSrc}.jpg 1x,
              ${baseSrc}@2x.jpg 2x,
              ${baseSrc}@3x.jpg 3x,
            `}
          />
          <HeroImage src={baseSrc + ".jpg"} alt='hero image'/>
        </picture>

      <Swoop src="/swoop.svg" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  height: 60vh;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: hsl(0deg 0% 1%);
`;

const HeroImage = styled.img`
  display: block;
  width: 500px;
  height: 500px;
  max-height: 100%;
`;

const Swoop = styled.img`
  position: absolute;
  left: 0;
  right: 0;
  /*
    Overhang by a couple px to prevent any pixel-rounding
    display issues
  */
  bottom: -2px;
  width: 100%;
`;

export default Hero;
