import './objectsCard.scss';
import loca from '../../shared/icons/location.svg';
import phone from '../../shared/icons/phone.svg';
import { useState } from 'react';

export const ObjectsCard = ({ img, title, location, description, price }) => {

    const [liked, setLiked] = useState(false);

    const HandleLike = () => {
        console.log(liked);
        setLiked(!liked)
    }

    return (
        <div className='objCard'>
            <img className='objCard__img' src={img} alt={title} loading='lazy' />

            <div className='objCard__info'>
                <h3 className='objCard__info__title'>{title}</h3>
                <p className='objCard__info__location'><img className='objCard__info__location__mark' src={loca} alt="" loading='lazy' />{location}</p>
                <p className='objCard__info__desc'>{description}</p>
                <p className='objCard__info__price'>{price}</p>
            </div>

            <div className='objCard__buttons'>
                <button className='objCard__buttons__more'>Подробнее</button>
                <button className='objCard__buttons__phone'><img className='objCard__buttons__phone__mark' src={phone} alt="" /></button>
                <button onClick={HandleLike} className={`objCard__buttons__like ${liked ? `red` : ''}`}>
                    <svg className={`objCard__buttons__like__mark ${liked ? `red` : ''}`} stroke="grey" strokeWidth="2px" width="24" height="24" viewBox="9.5 -2 11 30" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.7 1.96924C4.4475 1.96924 1 5.41674 1 9.66924C1 17.3692 10.1 24.3692 15 25.9974C19.9 24.3692 29 17.3692 29 9.66924C29 5.41674 25.5525 1.96924 21.3 1.96924C18.696 1.96924 16.393 3.26214 15 5.24104C14.2899 4.22981 13.3466 3.40452 12.25 2.83502C11.1533 2.26551 9.93568 1.96854 8.7 1.96924Z" />
                    </svg></button>
            </div>
        </div>
    );
};