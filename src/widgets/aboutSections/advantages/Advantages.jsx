import './advantages.scss';

export function Advantages() {
  const advantagesData = [
    { type: 'circle', title: 'Владелец', text: 'Подтвержденное жилье' },
    { type: 'square', title: 'Архитектор', text: 'Студия Е Архитекторов' },
    { type: 'square', title: 'Архитектор', text: 'Студия Е Архитекторов' },
    { type: 'circle', title: 'Владелец', text: 'Подтвержденное жилье' },
    { type: 'square', title: 'Архитектор', text: 'Студия Е Архитекторов' },
  ];

  return (
    <div className='advantages container'>
      <div className="advantages__header">
      <h3 className='advantages__title'>ПРЕИМУЩЕСТВА</h3>
      <p className='advantages__text'>«Стелла» — шестиэтажное здание, включающее пять уровней конструкции типа IIIA над одноуровневым подиумом типа IA.</p>
      </div>
      <div className="advantages__box">
        {advantagesData.map((item, index) => (
          <div
            key={index}
            className={
              item.type === 'circle'
                ? 'advantages__circle'
                : 'advantages__square-box'
                
            }
          >
            <p className="advantages__item-title">{item.title}</p>
            <p className="advantages__item-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
