import { ObjectsCard } from '../../features/index';
import img from '../../shared/img/objImg.png';
import './newBuildingsSection.scss';
import { ObjectsStore } from '../../app/zustand/ObjectsStore';
import { useEffect } from 'react';

export const NewBuildingsSection = () => {
    const { objects, loading, error, objectsFetch } = ObjectsStore();

    useEffect(() => {
        objectsFetch();
    }, [objectsFetch]);

    return (
        <div className='container objects'>

            <div className="flex-cont"   >
                <div className="objects__info">
                    <p className='objects__info__res'>Результаты</p>

                    <p className='objects__info__count'>{objects.length > 0 ? `1-${Math.min(18, objects.length)} из ${objects.length} найденных объектов` : 'Нет объектов'}</p>
                    <p className='objects__info__mobile'>{objects.length}найденных объектов</p>
                </div>
            </div>

            <div className="objects__cards">
                {
                    objects.slice(0, 18).map((item) => (
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
            </div>

        </div>
    );
}
