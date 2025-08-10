import './objectsBtn.scss'
import { useNavigate } from 'react-router-dom';

export const ObjectsBtn = () => {
    return (
        <button className='objBtn'>
            <div className='objBtn__btn'>
                <svg className='objBtn__btn__svg' xmlns="http://www.w3.org/2000/svg" width="67" height="63" viewBox="0 0 67 63" fill="none">
                    <path d="M35.834 3.4834L63.834 31.4834L35.834 59.4834M59.9451 31.4834L3.16732 31.4834" stroke="#163659" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <h2 className='objBtn__text'>Посмотреть все</h2>
        </button>
    )
}
