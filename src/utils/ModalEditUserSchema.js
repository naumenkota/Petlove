import * as yup from "yup";

export const ModalEditUserSchema = yup.object().shape({
  avatar: yup
    .string()
    .matches(/^https?:\/\/.*\.(png|jpe?g|gif|webp)$/i, "Need correct path")
    .nullable()
    .notRequired(),
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .matches(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, "Invalid email")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(/^\+38\d{10}$/, "Phone must be in format +38XXXXXXXXXX")
    .notRequired(),
});
