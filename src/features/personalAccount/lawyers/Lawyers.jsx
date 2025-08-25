import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import './lawyers.scss'

export const Lawyers = () => {
    return (
        <section className='card-lawyers'>
            <div className="left-card-lawyers">
                <img src="https://imagedelivery.net/UxTWBQ0bVGPmoifGwvhQlw/salesfuel.com/2021/01/Attention-to-Detail.jpg/w=1440,h=1080" alt="profile picture" />
                <h3>Айбеков Руслан</h3>
                <p>Старший юрист</p>
                <h4>ruslan.law@idealis.kg</h4>
                <button className='btn-lawyers btn-for-dec'><PhoneIcon /> Позвонить</button>
            </div>
            <div className="line-lawyers"></div>
            <div className="right-card-lawyers">
                <div className="specialization">
                    <h2>Специализация:</h2>
                    <ul>
                        <li>Сопровождение сделок</li>
                        <li>Сопровождение сделок</li>
                        <li>Сопровождение сделок</li>
                    </ul>
                    <div className="address-lawyers">
                        <RoomIcon className='gps-lawyers'/>
                        <p>Офис № 12, ул. Курманжан Датка, 45</p>
                    </div>
                    <button className='btn-lawyers btn-for-mobile'><PhoneIcon /> Позвонить</button>
                </div>
            </div>
        </section>
    );
}


