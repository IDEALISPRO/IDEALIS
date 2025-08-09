import React from 'react';
import './banner.scss';

export default function Banner({ title, description }) {
  return (
    <div className='container'>
      <p className='BannerTitale'>{title}</p>
      <p className='BannerDescription'>{description}</p>
    </div>
  );
}
