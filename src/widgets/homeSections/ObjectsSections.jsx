import { ObjectsCard, ObjectsBtn } from '../../features/index';
import img from '../../shared/img/objImg.png';
import './objects.scss';
import { ObjectsStore } from '../../app/zustand/ObjectsStore';
import { useEffect } from 'react';

export const ObjectsSections = () => {

    const { objects, loading, error, objectsFetch } = ObjectsStore();

    useEffect(() => {
        objectsFetch();
    }, [objectsFetch]);
    
    return (
        <div className='container objects'>

            <div className="flex-cont">
                <div className="objects__title">
                    <h1 className='objects__title__text'>Количество найденных объектов</h1>
                    <h1 className='objects__title__mobile'>Кол-во найденных объектов</h1>
                </div>

                <div className="objects__info">
                    <p className='objects__info__res'>Результаты</p>

                    <p className='objects__info__count'>{objects.length}-{objects.length} из {objects.length} найденных объектов</p>
                    <p className='objects__info__mobile'>{objects.length}найденных объектов</p>
                </div>
            </div>

            <div className="objects__cards">
                {
                objects.slice(0,10).map((item) => (
                    <ObjectsCard
                    key={item.id}
                    img={img}
                    title={item.title}
                    location={item.userId}
                    description={item.body}
                    price={"3 400 000 сом"}
                    liked={false}
                    count={10}
                    />
                ))
                }
                <ObjectsBtn />
            </div>

        </div>
    );
}
