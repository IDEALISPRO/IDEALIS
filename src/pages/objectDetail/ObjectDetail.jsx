import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  detailGet,
  detailViewPatch,
} from "../../app/store/reducers/admin/detailObject/detailObjectThunk";
import { useDetail } from "../../app/store/reducers/admin/detailObject/detailObjectSlice";
import { Feedback, ModalImg } from "../../entities";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import "./objectDetail.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const ObjectDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const { detail, loading, error } = useDetail();
  const [open, setOpen] = useState(false);

  console.log(detail);

  useEffect(() => {
    if (id) {
      dispatch(detailGet(id))
        .unwrap()
        .then((data) => {
          if (!data?.stats) return;

          const newItem = {
            views: 1,
            last_show_at: data.stats.last_show_at || new Date().toISOString(),
          };

          dispatch(detailViewPatch({ id, newObject: newItem }));
        });
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
            <img
              src={detail.images?.[0]?.url || "/no-image.jpg"}
              alt={detail.title || "Объект недвижимости"}
            />
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
              <p>
                Создано:{" "}
                {detail.created_at
                  ? new Date(detail.created_at).toLocaleDateString()
                  : "—"}
              </p>
              <p>
                Изменено:{" "}
                {detail.updated_at
                  ? new Date(detail.updated_at).toLocaleDateString()
                  : "—"}
              </p>
              <p>ID {detail.id}</p>
            </div>
            <div className="row view">
              <RemoveRedEyeIcon />
              {detail.stats?.views ?? 0}
            </div>
          </div>
        </div>

        <div className="basic__information">
          <div className="agent row">
            <div>
              {detail.manager?.avatar ? (
                <img src={detail.manager?.avatar} alt="" />
              ) : (
                <AccountCircleIcon fontSize="large" />
              )}
            </div>
            <div>
              <h3>Агент {detail.manager?.name || "Не указан"}</h3>
              <p>{detail.manager?.phone_number || "Нет телефона"}</p>
            </div>
          </div>

          <div className="basic__information_text">
            <h3>Основная информация</h3>
            <p>
              <span>Количество комнат:</span> {detail.rooms || "—"}
            </p>
            <p>
              <span>Тип недвижимости:</span> {detail.deal_type || "—"}
            </p>
            <p>
              <span>Название жилого комплекса:</span> {detail.title || "—"}
            </p>
            <p>
              <span>Площадь:</span> {detail.area_m2 || "—"} м²
            </p>
            <p>
              <span>Этаж:</span> {detail.floor || "—"} из
              {detail.floors_total || "—"}
            </p>
            <p>
              <span>Состояние:</span> {detail.repair_state || "—"}
            </p>
            <p>
              <span>Район и адрес:</span>{" "}
              {[detail.city, detail.district, detail.street, detail.house]
                .filter(Boolean)
                .join(", ") || "—"}
            </p>
          </div>

          <h2>{detail.price ? `${detail.price} сом` : "Цена не указана"}</h2>
        </div>
      </section>

      {!location.pathname.startsWith("/admin") && (
        <Feedback id={id} stats={detail.stats} />
      )}

      <ModalImg isOpen={open} setOpen={setOpen} images={detail?.images || []} />
    </div>
  );
};
