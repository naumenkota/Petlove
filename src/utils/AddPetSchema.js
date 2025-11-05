import * as yup from "yup";

export const AddPetSchema = yup.object().shape({
  title: yup.string().required("Title is required"),

  name: yup.string().required("Name is required"),

  imgUrl: yup
    .string()
    .matches(
      /^https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp)$/,
      "Enter a valid image URL"
    )
    .required("Image URL is required"),

  species: yup.string().required("Species is required"),

  birthday: yup
    .string()
    .matches(
      /^\d{4}-\d{2}-\d{2}$/,
      "Enter a valid date in the format YYYY-MM-DD"
    )
    .required("Birthday is required"),

  sex: yup.string().required("Sex is required"),
});
