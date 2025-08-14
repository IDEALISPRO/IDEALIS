import './hotOffers.scss';
import img from "../../shared/images/hotOffersImg.png"
import React, { useState } from 'react';
import { HotOfferCard } from '../../features/hotOffersCard/HotOfferCard';

export const HotOffers = () => {
    
    const cards = [
        {
            id: 1,  
            image: img,
            description: 'Лови лучшие предложения по недвижимости в Кыргызстане.'
        },
        {
            id: 2,  
            image: img,
            description: 'Лови лучшие предложения по недвижимости в Кыргызстане.'
        },
        {
            id: 3,  
            image: img,
            description: `Лучшие объекты недвижимости в Кыргызстане — только сейчас! Успейте выбрать квартиру, дом или коммерческое помещение по выгодной цене. Мы собрали самые актуальные и привлекательные предложения на рынке.`
        },
        {
            id: 4,  
            image: img,
            description: 'Лови лучшие предложения по недвижимости в Кыргызстане.'
        },
        {
            id: 5,  
            image: img,
            description: 'Лови лучшие предложения по недвижимости в Кыргызстане.'
        }
    ]

    const [activeId, setActiveId] = useState(cards[2].id);


  return (
    <div className='hotOffers'>

        <h1 className='hotOffers__title'>Горячие предложения</h1>

        <div className='hotOffers__list'>
            {
                cards.map((card) => (
                    <HotOfferCard 
                        key={card.id}
                        image={card.image}
                        description={card.description}
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
