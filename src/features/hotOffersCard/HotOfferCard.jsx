import './hotOffersCard.scss'

export const HotOfferCard = ({image, description, isActive, onClick}) => {

  return (
    <div onClick={onClick} className={`hotOffersCard ${isActive ? 'active' : ''}`}>
            <img className='hotOffersCard__img' src={image} alt="image" />
            
            <h3 className='hotOffersCard__description'>{description}</h3>
    </div>
  )
}
