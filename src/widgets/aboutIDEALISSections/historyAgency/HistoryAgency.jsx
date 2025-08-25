import { useState } from 'react';
import './historyAgency.scss';
import con from '../../../shared/btnConnect.png'
import history from '../../../shared/history/history.jpg'

export const HistoryAgency = () => {
    const [active, setActive] = useState(null);
    const btns = [
        {
            id: 1,
            text: '2008'
        },
        {
            id: 2,
            text: '2015'
        },
        {
            id: 3,
            text: '2020'
        },
        {
            id: 4,
            text: '2023'
        },
        {
            id: 5,
            text: '2025'
        },
    ]
  return (
    <section className='historyAgency_cont'>
        <h2 className="title">ИСТОРИЯ АГЕНСТВА</h2>
        <div className='historyAgency_cont_btns'>
            {
                btns.map(btn => (
                    <button onClick={() => setActive(btn.id)} className={active === btn.id ? `active` : ''} key={btn.id}>
                        <img className='connect' src={con} alt="" />
                        {btn.text}
                    </button>
                ))
            }
        </div>

        <div className='historyAgency_cont_content row'>
            <div className='historyAgency_cont_content_top'>
                <h2>“начальный проект”</h2>
            </div>

            <div className='historyAgency_cont_content_bottom'>
                <img src={history} alt="history" />
                <h3>Мы завершили строительство нового офиса в Бишкеке</h3>
                <div className='detail_text row'>
                    <p className='col-6'>Торжественное открытие нашего нового офиса в Бишкеке знаменует собой важную веху на нашем пути как ведущей строительной компании.</p>
                    <p className='col-6'>Наш новый офис оснащён самым современным оборудованием и укомплектован преданной своему делу командой профессионалов, стремящихся предоставлять исключительные строительные услуги. </p>
                </div>
            </div>
        </div>
    </section>
  )
}
