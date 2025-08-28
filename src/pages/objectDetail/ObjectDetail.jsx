
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { detailGet } from '../../app/store/reducers/admin/detailObject/detailObjectThunk';
import { useDetail } from "../../app/store/reducers/admin/detailObject/detailObjectSlice";
import { Feedback, ModalImg } from "../../entities";
import { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import "./objectDetail.scss";

export const ObjectDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { detail, loading, error } = useDetail();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(detailGet(id));
    }
  }, [id, dispatch]);



  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;
  if (!detail) return <p>Нет данных</p>;

  return (
    <div className="container object__detail">
      <section className="object row">
        <div className="object_img" onClick={() => setOpen(!open)}>
          <div className="object_img_main">
            <img src={detail.images?.[0]?.url} alt={detail.title} />
          </div>
          <div className="object_img_others">
            {detail.images?.slice(0, 3).map((img) => (
              <div className="img" key={img.id} onClick={() => setOpen(true)}>
                <img src={img.url} alt="" />
              </div>
            ))}
            {detail.images?.length > 3 && (
              <div className="img more" onClick={() => setOpen(true)}>
                +{detail.images.length - 3}
              </div>
            )}
          </div>
          <div className="row date">
            <div>
              <p>Создано: {new Date(detail.created_at).toLocaleDateString()}</p>
              <p>Изменено: {new Date(detail.updated_at).toLocaleDateString()}</p>
              <p>ID {detail.id}</p>
            </div>
            <div className="row view">
              <RemoveRedEyeIcon />
              27
            </div>
          </div>
        </div>

        <div className="basic__information">
          <div className="agent row">
            <div>
              <img src="/default-agent.jpg" alt="" />
            </div>
            <div>
              <h3>Агент #{detail.agent}</h3>
              <p>{detail.owner_phone}</p>
            </div>
          </div>
          <div className="basic__information_text">
            <h3>Основная информация</h3>
            <p><span>Количество комнат:</span> {detail.rooms}</p>
            <p><span>Тип недвижимости:</span> {detail.category}</p>
            <p><span>Название жилого комплекса:</span> {detail.title}</p>
            <p><span>Площадь:</span> {detail.area_m2} м²</p>
            <p><span>Этаж:</span> {detail.floor} из {detail.floors_total}</p>
            <p><span>Состояние:</span> {detail.repair_state}</p>
            <p><span>Район и адрес:</span> {detail.city}, {detail.district}, {detail.street} {detail.house}</p>
          </div>
          <h2>{detail.price} сом</h2>
        </div>
      </section>

      <Feedback />

      <ModalImg
        isOpen={open}
        setOpen={setOpen}
        images={detail?.images || []}
      />


    </div>
  );
};
