import * as yup from "yup";

const characteristicOptions = {
  repairs: ["ПСО", "Евроремонт", "Дизайнерский"],
  Documents: ["Красная книга", "ДДУ"],
  Communications: ["Газ", "Электричество", "Отопление"],
  offers: ["Срочная продажа"],
  furniture: ["Да", "Нет"],
  Square: [1, 2, 3, 4],
};

const selectOptions = {
  deal: ["Продажа", "Аренда"],
  realEstate: ["Квартира", "Дом", "Офис", "Земельный участок"],
  NumberRooms: ["1", "2", "3", "4+"],
  Agent: ["Андрей", "Марат", "Эльвира"],
  HomeSeries: ["Элитка", "Кирпичный", "Панельный"],
};

export const schema = yup.object().shape({
  repairs: yup
    .string()
    .oneOf(
      characteristicOptions.repairs,
      "Выберите корректное состояние ремонта"
    )
    .required("Обязательное поле"), //
  Documents: yup
    .string()
    .oneOf(characteristicOptions.Documents, "Выберите корректный документ")
    .required("Обязательное поле"), //
  Communications: yup
    .string()
    .oneOf(
      characteristicOptions.Communications,
      "Выберите корректную коммуникацию"
    )
    .required("Обязательное поле"), //
  offers: yup
    .string()
    .oneOf(characteristicOptions.offers, "Выберите корректное предложение")
    .required("Обязательное поле"), //
  furniture: yup
    .string()
    .oneOf(characteristicOptions.furniture, "Выберите наличие мебели")
    .required("Обязательное поле"), //
  deal: yup
    .string()
    .oneOf(selectOptions.deal, "Выберите корректный тип сделки")
    .required("Обязательное поле"), //
  realEstate: yup
    .string()
    .oneOf(selectOptions.realEstate, "Выберите корректный тип недвижимости")
    .required("Обязательное поле"), //
  NumberRooms: yup
    .string()
    .oneOf(selectOptions.NumberRooms, "Выберите корректное количество комнат")
    .required("Обязательное поле"), //
  HomeSeries: yup
    .string()
    .oneOf(selectOptions.HomeSeries, "Выберите серию дома")
    .required("Обязательное поле"), //
  TypePayment: yup.string().required("Выберите вид платежа"), //
  ObjectStatus: yup.string().required("Укажите статус объекта"), //
  description: yup.string().required("Введите описание"), //
  Floor: yup.string().required("Введите этаж"), //
  IntersectionStreets: yup.string().required("Введите пересечение улиц"), //
  price: yup.number().typeError("Введите цену").required("Введите цену"), //
  allPrice: yup
    .number()
    .typeError("Введите цену на руки")
    .required("Введите цену на руки"), //
  userName: yup.string().required("Введите ФИО владельца"), //
  number: yup
    .string()
    .matches(/^\+?[0-9]{7,15}$/, "Введите корректный номер")
    .required("Введите телефон"), //
});
