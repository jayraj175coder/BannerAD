import React from 'react';
import { AdBanner } from '../types';
import './BannerImageComp.css';

interface BannerImageCompProps {
  banner: AdBanner;
  onEdit: (banner: AdBanner) => void;
}

const BannerImageComp: React.FC<BannerImageCompProps> = ({ banner, onEdit }) => {
  const backgroundStyle = banner.background.startsWith('#')
    ? { backgroundColor: banner.background }
    : { backgroundImage: `url(${banner.background})` };

  return (
    <div className="banner-container" style={backgroundStyle}>
      <div className="banner-content">
        <div className="text-content">
          <h2>{banner.title}</h2>
          <p>{banner.description}</p>
          <button className="cta-button">{banner.cta}</button>
        </div>
        <div className="image-content">
          <img src={banner.image} alt={banner.title} />
        </div>
        <button className="edit-button" onClick={() => onEdit(banner)}>✎</button>
      </div>
    </div>
  );
};

export default BannerImageComp;
