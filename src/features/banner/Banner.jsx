import './banner.scss';

export function Banner({ title, description }) {
  return (
    <div className='Banner'>
      <p className='BannerTitle'>{title}</p>
      <p className='BannerDescription'>{description}</p>
    </div>
  );
}
