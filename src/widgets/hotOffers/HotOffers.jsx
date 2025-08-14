import './hotOffers.scss';
import img1 from "../../shared/images/hotOffersImg1.png"
import img2 from "../../shared/images/hotOffersImg2.png"
import img3 from "../../shared/images/hotOffersImg3.png"
import img4 from "../../shared/images/hotOffersImg4.png"
import React, { useState } from 'react';
import { HotOfferCard } from '../../features/hotOffersCard/HotOfferCard';

export const HotOffers = () => {
    
    const cards = [
        {
            id: 1,  
            image: img1,
            description: 'Цены снижены — успейте выбрать своё!'
        },
        {
            id: 2,  
            image: img2,
            description: 'Лучшие объекты недвижимости в Кыргызстане — только сейчас!',
            descriptionSecond: 'Успейте выбрать квартиру, дом или коммерческое помещение по выгодной цене. Мы собрали самые актуальные и привлекательные предложения на рынке.'
        },
        {
            id: 3,  
            image: img3,
            description: 'Лови лучшие предложения по недвижимости в Кыргызстане.'
        },
        {
            id: 4,  
            image: img4,
            description: 'Только сейчас — топ объекты по выгодной цене!'
        }
    ]

    const [activeId, setActiveId] = useState(cards[1].id);


  return (
    <div className='container hotOffers'>

        <h1 className='hotOffers__title'>Горячие предложения</h1>

        <div className='hotOffers__list'>
            {
                cards.map((card) => (
                    <HotOfferCard 
                        key={card.id}
                        image={card.image}
                        description={card.description}
                        descriptionSecond={card.descriptionSecond}
                        isActive={activeId === card.id}
                        onClick={() => setActiveId(activeId === card.id ? null : card.id)}
                    />
                ))
            }
        </div>

        <button className='hotOffers__btn'>Узнать больше</button>
    </div>
  )
}
