import './hotOffersCard.scss'

export const HotOfferCard = ({image, description, isActive, onClick, descriptionSecond}) => {

  const TextWidth = (text) => {
    if (text.length > 58) {
      return text.slice(0, 58) + '...';
    }else{
      return text
    }
  }

  return (
    <div onClick={onClick} className={`hotOffersCard ${isActive ? 'activeCard' : ''}`}>
            <img className='hotOffersCard__img' src={image} alt="image" />
            
            <h3 className='hotOffersCard__description'>{TextWidth(description)}</h3>
            <h3 className={`hotOffersCard__description adaptive ${isActive ? '' : 'none'}`}>{descriptionSecond}</h3>
    </div>
  )
}
