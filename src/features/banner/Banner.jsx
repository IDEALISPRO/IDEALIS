import React from 'react';
import './banner.scss';

export function Banner({ title, description }) {
  return (
    <div className='container'>
      <p className='BannerTitle'>{title}</p>
      <strong><p className='BannerDescription'>{description}</p></strong>
    </div>
  );
}
