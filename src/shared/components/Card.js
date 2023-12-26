import React, { useEffect, useState } from 'react';
import './card.css'
const Card = (character ) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const { default: image } = await import(
          `../charicon/genshinchar/${character.props}_Icon.png`
        );
        setImageSrc(image);
      } catch (error) {
        console.error(`Error loading image for ${character.props}:`, error);
      }
    };

    loadImage();
  }, [character.props]);

  return (
    <div className='card-container'>
      {imageSrc && <img src={imageSrc} alt={character} className='char-image'/>}
      <p>{character.props}</p>
    </div>
  );
};

export default Card;
