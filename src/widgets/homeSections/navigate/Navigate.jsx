import { useState } from 'react';
import { NavigateCard } from '../../../entities/navigateCard/NavigateCard';
import image from '../../../shared/images/navigateImages/image.jpg';
import './navigate.scss';

export const Navigate = () => {
  const [activeSelect, setActiveSelect] = useState(null);

  const categoriesArr = [
    { id: 1, title: 'Вторичное жильё', type: '', images: { first_image: image, second_image: image, third_image: image, last_image: image } },
    { id: 2, title: 'Новостройки', type: '', images: { first_image: image, second_image: image, third_image: image, last_image: image } },
    { id: 3, title: 'Дома', type: '', images: { first_image: image, second_image: image, third_image: image, last_image: image } },
    { id: 4, title: 'Участки', type: '', images: { first_image: image, second_image: image, third_image: image, last_image: image } },
    { id: 5, title: 'Под бизнес', type: '', images: { first_image: image, second_image: image, third_image: image, last_image: image } },
    { id: 6, title: 'СРОЧНО', type: 'check', images: { first_image: image, second_image: image, third_image: image, last_image: image } },
  ];

  return (
    <section className="categories-navigate container">
      <h2 className="title">Категории недвижимости</h2>
      <div className="categories-navigate__content">
        {categoriesArr?.map((obj) => (
          <NavigateCard
            activeSelect={activeSelect}
            setActiveSelect={setActiveSelect}
            key={obj?.id}
            {...obj}
          />
        ))}
      </div>
    </section>
  );
};
