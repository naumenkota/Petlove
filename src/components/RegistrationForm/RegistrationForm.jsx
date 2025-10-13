import s from "./RegistrationForm.module.css";
import { RegistrationFormSchema } from "../../utils/RegistrationFormSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import PasswordToggle from "../PasswordToggle/PasswordToggle";
import { useState } from "react";
import Title from "../Title/Title.jsx";

export default function RegistrationForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(RegistrationFormSchema),
  });

  const hasError = errors.email || errors.password || errors.name;

  return (
    <div className={s.wrapper}>
      <div className={s.wrapper_title}>
        <Title>Registration</Title>
        <p className={s.text}>Thank you for your interest in our platform.</p>
      </div>

      <form className={s.form}>
        <div className={`${s.inputGroup} ${hasError && s.inputGroupWithError}`}>
          <div className={s.inputWrapper}>
            <input
              {...register("name")}
              placeholder="Name"
              className={s.input}
            />
            <ErrorMessage message={errors.name?.message} />
          </div>
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
          <div className={s.inputWrapper}>
            <input
              {...register("password")}
              placeholder="Confirm password"
              className={s.input}
              type={showPassword ? "text" : "password"}
            />
            <PasswordToggle
              show={showConfirmPassword}
              toggle={() => setShowConfirmPassword((prev) => !prev)}
            />
            <ErrorMessage message={errors.password?.message} />
          </div>
        </div>
        <button type="submit" className={s.btn}>
          Registration
        </button>
      </form>

      <p className={s.question}>
        Already have an account?<span className={s.login}> Login</span>
      </p>
    </div>
  );
}
