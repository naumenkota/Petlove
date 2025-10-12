import * as yup from "yup";

export const LoginFormSchema = yup.object().shape({
  email: yup
    .string()
    .transform((value) => value.trim())
    .matches(
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
      "Enter a valid Email"
    )
    .required("Email is required"),
  password: yup
    .string()
    .min(7, "Enter a valid password")
    .required("Password is required"),
});
