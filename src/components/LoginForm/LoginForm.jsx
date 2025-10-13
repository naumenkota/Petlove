import s from "./LoginForm.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import PasswordToggle from "../PasswordToggle/PasswordToggle";
import { useState } from "react";
import Title from "../Title/Title.jsx";
import { LoginFormSchema } from "../../utils/LoginFormSchema.js";
import { useDispatch } from "react-redux";
import { login } from "../../redux/api/api.js";
import toast from "react-hot-toast";

export default function LoginForm() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = async (data) => {
    try {
      await dispatch(login(data)).unwrap();
      toast.success("Log in successful!");
    } catch (error) {
      toast.error(error);
    }
  };

  const hasError = errors.email || errors.password;

  return (
    <div className={s.wrapper}>
      <div className={s.wrapper_title}>
        <Title>Log in</Title>
        <p className={s.text}>
          Welcome! Please enter your credentials to login to the platform:
        </p>
      </div>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={`${s.inputGroup} ${hasError && s.inputGroupWithError}`}>
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
