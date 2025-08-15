import './hotOffersCard.scss'

export const HotOfferCard = ({image, description, isActive, onClick, descriptionSecond}) => {

  return (
    <div onClick={onClick} className={`hotOffersCard ${isActive ? 'active' : ''}`}>
            <img className='hotOffersCard__img' src={image} alt="image" />
            
            <h3 className='hotOffersCard__description'>{description}</h3>
            <h3 className={`hotOffersCard__description adaptive ${isActive ? '' : 'none'}`}>{descriptionSecond}</h3>
    </div>
  )
}
