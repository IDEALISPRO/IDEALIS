import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import "./feedback.scss";
import { useDispatch } from "react-redux";
import { smsPosts } from "../../app/store/reducers/public/sendSms/sendSmsThunks";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import { detailContactsPatch } from "../../app/store/reducers/admin/detailObject/detailObjectThunk";

const registrationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Имя обязательно")
    .min(2, "Имя должно содержать не менее 2 символов"),
  number: yup
    .string()
    .required("номер телефона обязательна")
    .min(7, "номер телефона должна содержать не менее 7 чисел"),
  comment: yup.string().required("поле не должно быть пустым"),
  agreeToTerms: yup
    .boolean()
    .oneOf([true], "Вы должны согласиться с условиями")
    .required(),
});

export const Feedback = ({ id, stats }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit = async (formData) => {
    const message = {
      name: formData.name,
      phone: formData.number,
      comment: formData.comment,
      agree: formData.agreeToTerms,
    };

    try {
      await dispatch(smsPosts(message)).unwrap();
      toast.success("Форма успешно отправлена!", {
        position: "top-right",
        autoClose: 3000,
      });

      const newStats = {
        contacts: 1,
      };

      await dispatch(
        detailContactsPatch({ id, newObject: newStats})
      );

      reset();
    } catch (error) {
      toast.error("Ошибка при отправке формы!", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <h2>ОСТАЛИСЬ ВОПРОСЫ? НАПИШИТЕ НАМ!</h2>
        <h4>Оставьте заявку и мы проконсультируем вас в ближайшее время</h4>

        <div className="form-group">
          <input
            {...register("name")}
            type="text"
            placeholder="ИМЯ"
            className="main-input"
          />
          {errors.name && <p className="error-text">{errors.name.message}</p>}
        </div>

        <div className="form-group">
          <input
            {...register("number")}
            type="number"
            placeholder="ТЕЛЕФОН"
            className="main-input"
          />
          {errors.number && (
            <p className="error-text">{errors.number.message}</p>
          )}
        </div>

        <div className="form-group">
          <input
            {...register("comment")}
            type="text"
            placeholder="КОММЕНТАРИЙ"
            className="main-input"
          />
          {errors.comment && (
            <p className="error-text">{errors.comment.message}</p>
          )}
        </div>

        <div className="form-group">
          <div className="checkbox">
            <input
              {...register("agreeToTerms")}
              type="checkbox"
              className="checkbox-form"
            />
            <label className={errors.agreeToTerms ? "error-text" : ""}>
              Я соглашаюсь с политикой конфиденциальности сайта
            </label>
          </div>
        </div>

        <button type="submit" className="btn-form">
          ОТПРАВИТЬ
        </button>
      </form>

      <ToastContainer />
    </>
  );
};
