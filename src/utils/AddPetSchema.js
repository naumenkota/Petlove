import * as yup from "yup";

export const AddPetSchema = yup.object().shape({
  title: yup.string().required("Title is required"),

  name: yup.string().required("Name is required"),

  imgUrl: yup
    .string()
    .url("Enter a valid image URL")
    .required("Image URL is required"),

  species: yup.string().required("Species is required"),

  birthday: yup
    .date()
    .transform((value, originalValue) => {
      if (originalValue instanceof Date) return originalValue;
      const [day, month, year] = originalValue.split(".");
      return new Date(`${year}-${month}-${day}`);
    })
    .required("Birthday is required"),

  sex: yup.string().required("Sex is required"),
});
