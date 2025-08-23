import './objectsCard.scss';
import loca from '../../shared/icons/location.svg';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useState } from 'react';

export const ObjectsCard = ({ img, title, location, description, price, count }) => {

    const [liked, setLiked] = useState(false);

    const HandleLike = () => {
        console.log(liked);
        setLiked(!liked)
    }

    const TextWidth = (text) => {
        if (text.length > 58) {
            return text.slice(0, 30) + '...';
        } else {
            return text
        }
    }

    return (
        <div className='objCard'>
            <img className='objCard__img' src={img} alt={title} loading='lazy' />

            <div className='objCard__info'>
                <h3 className='objCard__info__title'>{TextWidth(title)}</h3>
                <p className='objCard__info__location'><img className='objCard__info__location__mark' src={loca} alt="" loading='lazy' />{location}</p>
                <p className='objCard__info__desc'>{TextWidth(description)}</p>
                <p className='objCard__info__price'>{price}</p>
            </div>

            <div className='objCard__buttons'>
                <button className='objCard__buttons__more'>Подробнее</button>
                <button className='objCard__buttons__phone'>
                    <LocalPhoneIcon className='objCard__buttons__phone__icon' />
                </button>
                <button onClick={HandleLike} className={"objCard__buttons__like"}>
                    <FavoriteSharpIcon className={`objCard__buttons__like__icon ${liked ? `red` : ''}`} />
                </button>
            </div>
        </div>
    );
};