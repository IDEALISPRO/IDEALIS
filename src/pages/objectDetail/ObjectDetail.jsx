import { useParams } from "react-router-dom";
import "./objectDetail.scss";
import obj1 from "../../shared/object/obj1.jpg";
import obj2 from "../../shared/object/obj2.jpg";
import obj3 from "../../shared/object/obj3.jpg";
import agent from "../../shared/object/agent.jpg";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
export const ObjectDetail = () => {
  const { id } = useParams();
  const imgs = [
    {
      id: 1,
      img: obj1,
    },
    {
      id: 2,
      img: obj2,
    },
    {
      id: 3,
      img: obj3,
    },
  ];
  return (
    <div className="container object__detail">
      <section className="object row">
        <div className="object_img">
          <div className="object_img_main">
            <img src={obj3} alt="" />
          </div>
          <div className="object_img_others">
            {imgs.map((img) => (
              <div className="img">
                <img src={img.img} key={img.id} alt="" />
              </div>
            ))}
          </div>
          <div className="row date">
            <div>
              <p>Создано: 02.01.25</p>
              <p>Изменено: 30.04.25</p>
              <p>ID 123456</p>
            </div>
            <div>
              <RemoveRedEyeIcon />
              27
            </div>
          </div>
        </div>
        <div className="basic__information">
          <div className="agent row">
            <div>
              <img src={agent} alt="" />
            </div>
            <div>
              <h3>ФИО агента</h3>
              <p>Номер агента</p>
            </div>
          </div>
          <div className="basic__information_text">
            <h3>основная информация</h3>
            <p>
              <span>Количество комнат:</span>3 комнаты
            </p>
            <p>
              <span>Тип недвижимости:</span>Элитка
            </p>
            <p>
              <span>Название жилого комплекса:</span>ЖК “Кэмбридж”
            </p>
            <p>
              <span>Площадь:</span>119,55 м2
            </p>
            <p>
              <span>Этаж:</span>Квартира на 12 этаже, а в доме всего 37 этажей
            </p>
            <p>
              <span>Состояние:</span>“сдан ПСО” - без ремонта
            </p>
            <p>
              <span>Район и адрес:</span>Южная Магистраль/Советская
            </p>
          </div>
          <div>
            <p>цена</p>
            <h2>$200,000</h2>
          </div>
        </div>
      </section>
    </div>
  );
};
