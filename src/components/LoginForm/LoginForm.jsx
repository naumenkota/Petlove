import s from "./LoginForm.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import PasswordToggle from "../PasswordToggle/PasswordToggle";
import { useState } from "react";

const LoginFormSchema = yup.object().shape({
  email: yup
    .string()
    .transform((value) => value.trim())
    .email("Enter a valid Email")
    .required("Email is required"),
  password: yup
    .string()
    .min(7, "Enter a valid password")
    .required("Password is required"),
});

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,

    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(LoginFormSchema),
  });

  return (
    <div className={s.wrapper}>
      <div className={s.wrapper_title}>
        <h2 className={s.title}>Log in</h2>
        <p className={s.text}>
          Welcome! Please enter your credentials to login to the platform:
        </p>
      </div>
      <form className={s.form}>
        <div className={s.inputGroup}>
          <div className={s.inputWrapper}>
            <input
              {...register("email")}
              placeholder="Email"
              className={s.input}
            />
            <ErrorMessage message={errors.email?.message} />
          </div>
          <div className={s.inputWrapper}>
            <input
              {...register("password")}
              placeholder="Password"
              className={s.input}
              type={showPassword ? "text" : "password"}
            />
            <PasswordToggle
              show={showPassword}
              toggle={() => setShowPassword((prev) => !prev)}
            />
            <ErrorMessage message={errors.password?.message} />
          </div>
        </div>
        <button type="submit" className={s.btn}>
          Log in
        </button>
      </form>

      <p className={s.question}>
        Don't have an account? <span className={s.register}>Register</span>
      </p>
    </div>
  );
}
