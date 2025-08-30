import * as yup from "yup";

export const schema = yup.object().shape({
  photos: yup.mixed().test("required", "Загрузите от 3 до 15 фото", (value) => {
    return value && value.length >= 3 && value.length <= 15;
  }), //
  description: yup.string().required("Описание обязательно"),
  address: yup.string().required("Адресс обязательно"),

  Square: yup
    .number()
    .typeError("Площадь должна быть числом")
    .required("Введите площадь"),

  Floor: yup
    .number()
    .typeError("Этаж должен быть числом")
    .required("Введите этаж"),

  // NumberRooms: yup
  //   .number()
  //   .typeError("Количество комнат должно быть числом")
  //   .required("Введите количество комнат"),

  price: yup.number().typeError("Введите цену").required("Введите цену"), //

  number: yup
    .string()
    .required("Введите номер телефона")
    .matches(/^\+996\d{9}$/, "Введите номер в формате +996XXXXXXXXX"),

  TypePayment: yup.string().nullable(),
  IntersectionStreets: yup.string().nullable(),
  ObjectStatus: yup.string().nullable(),
  repairs: yup.string().nullable(),
  Documents: yup.string().nullable(),
  Communications: yup.string().nullable(),
  offers: yup.string().nullable(),
  furniture: yup.string().nullable(),
  deal: yup.string().nullable(),
  realEstate: yup.string().nullable(),
  Agent: yup.string().nullable(),
  District: yup.string().nullable(),
  HomeSeries: yup.string().nullable(),
  userName: yup.string().nullable(),
  allPrice: yup.string().nullable(),
  city: yup.string().nullable(),
});
